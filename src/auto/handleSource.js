import {
    root, boxid, box, device, chl_pump, chl_tower, chl_Out, pump_In, pump_chl, tower_chl,
    deviceMapIdsTool, valuesMapsHandle, generateText, systemTempratureMap, parentbox, headid, footid
} from './nodesDefault';
import { deviceNumToole, deviceTranform, styleMap } from './stylesDefault';
import { pageLayout, pageDefault } from './pageDefault';
import headDefault, { footDefault } from './headDefault';
import { rootPointMap, drawpointmap } from './pageNodeDefault';

export const handleSource = (source, deviceModelMap, links, global) => {    // test
    console.log('source, deviceModelMap, links, global: ', source, deviceModelMap, links, global);
    let result = {
        ROOT: root,
        [parentbox]: pageDefault(parentbox, boxid, headid, footid),
        ...headDefault(headid, parentbox, source, null, footid),
        ...pageLayout(parentbox, source),
        [boxid]: box,
        ...footDefault(footid, parentbox, source),
    }
    result.ROOT.props['projId'] = global?.ProjectId;
    result.ROOT.props['global'] = { "ProjectName": global?.ProjectName, "ProjectId": global?.ProjectId };
    const pointsObject = { ...rootPointMap(source), ...drawpointmap(), MODE_SYS: 0, HINT: '' }; // 点表映射
    const CHLS = Object.values(source.CHLS);
    const CHWPS = Object.values(source.CHWPS);
    const CWPS = Object.values(source.CWPS);
    const CTS = Object.values(source.CTS);
    const DVS = Object.values(source.DVS);
    systemTempratureMap({ cwout: source.T_CW_S, cwin: source.T_CW_R, chwout: source.T_CHW_S, chwin: source.T_CHW_R });
    deviceNumToole({ CHLS: CHLS.length, CHWPS: CHWPS.length, CWPS: CWPS.length, CTS: CTS.length });
    const connectCHWMap = {};
    const connectCWMap = {};
    const chlsArr = [];
    CHLS.forEach((item, index) => {
        const { ID, CHWPS, CWPS, VALVES } = item;
        CHWPS.forEach((t) => {
            const ids = t.SUITE_IDS.find(t1 => connectCHWMap[t1]?.length > 1);
            if (ids) {
                connectCHWMap[ids] = Array.from(new Set([...connectCHWMap[ids], ...t.SUITE_IDS]));
            } else {
                connectCHWMap[ID] = Array.from(new Set([...(connectCHWMap[ID] || []), ...t.SUITE_IDS]));
            }
        })
        CWPS.forEach((t) => {
            const ids = t.SUITE_IDS.find(t1 => connectCWMap[t1]?.length > 1);
            if (ids) {
                connectCWMap[ids] = Array.from(new Set([...connectCWMap[ids], ...t.SUITE_IDS]));
            } else {
                connectCWMap[ID] = Array.from(new Set([...(connectCWMap[ID] || []), ...t.SUITE_IDS]));
            }

        })
        valuesMapsHandle(ID, VALVES, deviceModelMap?.VALVES)
        const resultMap = device('Chiller', item, pointsObject, deviceModelMap?.CHLS?.[item.ID]);
        deviceMapIdsTool(item.ID, resultMap.id, item);
        resultMap.props.style = { ...styleMap['CHLS'], ...deviceTranform(index, 'CHLS', 0) };
        result[resultMap.id] = resultMap;
        pointsObject[item.P.NAME] = 0;
        pointsObject[item.I_PCT.NAME] = 0;
        chlsArr.push(resultMap);
        generateText(result, resultMap, null, item.P, "kW", null, -30);
        generateText(result, resultMap, 'right', item.I_PCT, null, true);
    })
    CHLS.forEach((item, index) => {
        /**chl -out */
        chl_Out(result, index, index == chlsArr.length - 1, chlsArr[index]?.props.style, item, CHLS);
    })
    CHWPS.forEach((item, index) => {
        const resultMap = device('Pump', item, pointsObject, deviceModelMap?.CHWPS?.[item.ID]);
        deviceMapIdsTool(item.ID, resultMap.id, item);
        resultMap.props.style = { ...styleMap['CHWPS'], ...deviceTranform(index, 'CHWPS', 15) };
        result[resultMap.id] = resultMap;
        pointsObject[item.P.NAME] = 0;
        pointsObject[item.FREQ.NAME] = 0;
        generateText(result, resultMap, null, item.P, "kW");
        generateText(result, resultMap, 'right', item.FREQ, "Hz", null, -30);

    })
    CWPS.forEach((item, index) => {
        const resultMap = device('Pump', item, pointsObject, deviceModelMap?.CWPS?.[item.ID]);
        deviceMapIdsTool(item.ID, resultMap.id, item);
        resultMap.props.style = { ...styleMap['CWPS'], ...deviceTranform(index, 'CWPS', 15) };
        result[resultMap.id] = resultMap;
        pointsObject[item.P.NAME] = 0;
        pointsObject[item.FREQ.NAME] = 0;
        generateText(result, resultMap, null, item.P, "kW");
        generateText(result, resultMap, 'right', item.FREQ, "Hz", null, -30);
    })
    CTS.forEach((item, index) => {
        const resultMap = device('Tower', item, pointsObject, deviceModelMap?.CTS?.[item.ID]);
        deviceMapIdsTool(item.ID, resultMap.id, item);
        valuesMapsHandle(item.ID, item.VALVES, deviceModelMap?.VALVES);
        resultMap.props.style = { ...styleMap['CTS'], ...deviceTranform(index, 'CTS', 6) };
        result[resultMap.id] = resultMap;
        pointsObject[item.P.NAME] = 0;
        pointsObject[item.FREQ.NAME] = 0;
        generateText(result, resultMap, null, item.P, "kW", null, -15);
        generateText(result, resultMap, 'right', item.FREQ, "Hz", null, -10);
    })

    DVS.forEach((item) => {
        pointsObject[item.ONOFF.NAME] = 0;
        pointsObject[item.FAULT.NAME] = 0;
    })

    const connectCHW = Object.values(connectCHWMap); // 冷冻侧冷机总管
    const connectCW = Object.values(connectCWMap); // 冷却测冷机总管
    const connectCHWP = connectCHW.map(item => { // 每一个总管对应的冷冻泵
        return Array.from(new Set(item.map(item0 => source.CHLS[item0]?.CHWPS?.map(t => t.ID)).flat(2)))
    })
    const connectCWP = connectCW.map(item => { // 每一个总管对应的冷却塔
        return Array.from(new Set(item.map(item0 => source.CHLS[item0]?.CWPS?.map(t => t.ID)).flat(2)))
    })
    const connectCT = connectCW.map(item => { // 每一个总管对应的冷却塔
        return Array.from(new Set(item.map(item0 => source.CHLS[item0]?.CTS?.map(t => t.ID)).flat(2)))
    })
    /** chl - pump */
    connectCHW.forEach((item, index) => {
        chl_pump(item, result, 'chw', 'CHLS', '2', connectCHWP[index], index);
        //chwTransform(i);
    })

    pump_In(CHWPS, result);
    /** 冷却侧 chl - pump */
    connectCW.forEach((item, index) => {
        // chl_pump(item, result, 'cw', 'CHLS', '3', connectCWP[index], index);
        chl_tower(item, result, index, connectCT[index]);
    })
    /**
     * 冷却塔与冷却泵与冷机的连接方式是一样的
     */
    /** tower-chl tower-pump */
    connectCT.forEach((item, index) => {
        const chlarr = Array.from(new Set(item.map((item0) => source.CTS[item0]?.SUITE_IDS).flat(2))).sort(); //当前冷却塔组关联的冷机
        connectCW.forEach((t0, i0) => {
            if ([...t0].sort().toString() === chlarr.toString()) {
                chl_pump(item, result, 'chw', 'CTS', '3', connectCWP[index], index);  //冷却泵关联冷却塔 冷却塔组的关联冷机===冷却泵组关联的冷机
                // 对应水泵是
                pump_chl(connectCT[i0], result, 'chw', connectCW[index][connectCW[index].length - 1], 'tower', '1', index);
            }
        })
    })
    /** 冷却侧 chl - pump */
    connectCW.forEach((item, index) => {
        chl_pump(item, result, 'cw', 'CHLS', '3', connectCWP[index], index);
        // chl_tower(item, result, index, connectCT[index]);
    })
    /**pump - chl
    * 每组第一个冷机的位置就是总管的位置，
    * 所有水泵的管子最终流向总管
    */
    connectCHWP.forEach((item, index) => {
        pump_chl(item, result, 'chw', connectCHW[index][connectCHW[index].length - 1], null, '2', index); // 冷冻水回水
    })
    /** 冷却侧 pump - chl */
    connectCWP.forEach((item, index) => {
        pump_chl(item, result, 'chw', connectCT[index][connectCT[index].length - 1], 'tower_pump', '3', index);
        pump_chl(item, result, 'cw', connectCW[index][connectCW[index].length - 1], null, '3', index);
    })
    connectCT.forEach((item, index) => {
        tower_chl(item, result, index);
    })
    const boxidChild = Object.values(result).filter(t => t?.parent === boxid);
    result['ROOT'].props.points = pointsObject;
    result[boxid].nodes = boxidChild?.map(t => t.id);
    result[boxid].props.style.contentMaxX = Math.max(...boxidChild?.map(t => t.props.style.translateX));
    result[boxid].props.style.contentMinX = Math.min(...boxidChild?.map(t => t.props.style.translateX));
    result = {
        ...result,
        "3GQM1xL3jA": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "68px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "side",
                    "margin": 0,
                    "background": "linear-gradient(rgba(25, 28, 44, 1), rgba(25, 28, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "EKzxxXgFQm",
                            "type": "color",
                            "key": "EKzxxXgFQm",
                            "value": "rgba(25, 28, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 20,
                    "paddingTop": 0,
                    "paddingRight": 10,
                    "paddingLeft": 30,
                    "paddingBottom": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "widthUnit": "%",
                    "heightUnit": "px"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "r8EFbkcVe0",
                "YdPQ0AdAa_",
                "22Wncp7ety"
            ],
            "linkedNodes": {}
        },
        "r8EFbkcVe0": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "ProjectName",
                    "type": "global"
                },
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
                    "fontWeight": "bolder",
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "3GQM1xL3jA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "YdPQ0AdAa_": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "300px",
                    "height": "auto",
                    "widthType": "fixed",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "widthUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "3GQM1xL3jA",
            "hidden": false,
            "nodes": [
                "6sMAEekVGW",
            ],
            "linkedNodes": {}
        },
        "6sMAEekVGW": {
            "type": {
                "resolvedName": "Menu"
            },
            "isCanvas": false,
            "props": {
                "theme": "light",
                "multiple": false,
                "selectable": true,
                "inlineIndent": 24,
                "mode": "horizontal",
                "triggerSubMenuAction": "hover",
                "value": "2",
                "selectedKeys": "2",
                "items": [
                    {
                        "id": "1",
                        "label": "首页",
                        "key": "1",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links?.[0]
                        }
                    },
                    {
                        "id": "2",
                        "label": "监控",
                        "key": "2",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links?.[1]
                        }
                    },
                    {
                        "id": "3",
                        "label": "能耗",
                        "key": "3",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links?.[2]
                        }
                    },
                    {
                        "id": "4",
                        "label": "报警",
                        "key": "4",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links?.[3]
                        }
                    },
                    {
                        "id": "5",
                        "label": "报表",
                        "key": "5",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links?.[4]
                        }
                    }
                ],
                "style": {
                    "position": "relative",
                    "width": "300px",
                    "height": "auto",
                    "widthType": "fixed",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": "46px",
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "borderBottomWidth": 0,
                    "background": "transparent",
                    "backgroundList": [],
                    "widthUnit": "px"
                },
                "displayName": "Menu",
            },
            "displayName": "Menu",
            "custom": {},
            "parent": "3GQM1xL3jA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "0eTv-zkzh-": {
            "type": {
                "resolvedName": "Dropdown"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Dropdown",
                "trigger": [
                    "hover"
                ],
                "placement": "bottom",
                "children": "     ",
                "disabled": false,
                "arrow": true,
                "autoAdjustOverflow": true,
                "autoFocus": false,
                "destroyPopupOnHide": false,
                "menu": {
                    "style": {
                        "maxWidth": 240
                    },
                    "items": [
                        {
                            "id": "2",
                            "label": "系统配置",
                            "key": "2",
                            "disabled": false,
                            "links": {
                                "action": "link",
                                "link": {
                                    "href": `http://${location.hostname}:${location.port}/home`
                                }
                            },
                            "name": "系统配置",
                            "title": "系统配置"
                        },
                        {
                            "id": "1",
                            "label": "退出",
                            "key": "1",
                            "disabled": false,
                            "links": {
                                "action": "logout"
                            },
                            "name": "退出",
                            "title": "退出"
                        },
                    ]
                },
                "icon": "LogoutOutlined"
            },
            "displayName": "Dropdown",
            "custom": {},
            "parent": "22Wncp7ety",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "22Wncp7ety": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "70px",
                    "height": "auto",
                    "widthType": "fixed",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "3GQM1xL3jA",
            "hidden": false,
            "nodes": [
                "0eTv-zkzh-"
            ],
            "linkedNodes": {}
        }
    }
    // console.log('pointsObject', pointsObject)
    // console.log('result', result, boxid)
    console.log('result: ', result);
    return result;
}

/**
 * 冷机-冷冻泵 冷机-末端
 * 
 * 冷冻水回水的情况：
 * 要判断是否用同一个总管，
 * 生成冷机时，自动生成一个横管，一个转接头，
 * 第一台冷机和最后一台冷机单独处理。
 * 第一台冷机的转接头用弯头转接头，最后一台冷机的转接头用90度的三头转接头，并且生成的管子也变为两个横管
 * 
 * 总管逻辑：
 * 当next冷机是记录里的冷机，那么用同一个总管，自动生成一个竖管。
 * 如果next冷机的id是从来没有被记录的，那么单独用一个总管，就不生成竖管。并且cur冷机的转接头改用90度三头转接头，并且再生成一个横管。
 * 冷冻水出水的情况：
 * 生成冷机时，自动生成一个竖管，一个横贯，一个转接头
 * 最后一台冷机的转接头用90度的弯头
 * 
 * 
*/