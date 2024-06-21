import { root, boxid, box, parentbox, footid, device, headid, text } from "../nodesDefault";
import headDefault, { footDefault } from "../headDefault";
import { pageLayout, pageDefault } from "../pageDefault";
import { position, getMaxHieght, helpFunction, pipevHeight, generateText } from './nodesDefault';
import { styleMap } from '../stylesDefault';
import { pipe } from '../nodesDefault';
import { rootPointAirMap, drwaitemair } from '../pageNodeDefault';
import { EFAULT_PUMP_MAP } from '../global';
const { ConHeight } = styleMap;


// 垂直间隙 80 
export const handleSource = (source, deviceModelMap, links, global, allsource) => {
    let result = {
        ROOT: root, // 根节点
        [parentbox]: pageDefault(parentbox, boxid, headid, footid),
        ...headDefault(headid, parentbox, source, 'air', allsource),
        ...pageLayout(parentbox, source, 'air'),
        // 页面框架节点
        [boxid]: box,
        ...footDefault(footid, parentbox, source, 'air'),
    }
    result.ROOT.props['projId'] = global?.ProjectId;
    result.ROOT.props['global'] = { "ProjectName": global?.ProjectName, "ProjectId": global?.ProjectId };
    const pointsObject = { ...rootPointAirMap(source), ...drwaitemair(), MODE_SYS: 0, HINT: '' }; // 点表映射
    const ACOPS = source?.ACOPS || {}; // 空压机
    const ARWTS = source?.ARWTS || {}; // 储气湿罐
    for (const t in ARWTS) {
        let str = ''
        for (const t0 in ACOPS) {
            str += `${'${' + ACOPS[t0].ONOFF.NAME + '}'}==1&&`
        }
        str.slice(-2);
        ARWTS[t].preStates = str;
    }
    const RDRYS = source?.RDRYS || {}; // 冷干机
    const DDRYS = source?.DDRYS || {}; // 吸干机
    const ARDTS = source?.ARDTS || {}; // 储气干罐
    for (const t in ARDTS) {
        let str = ''
        const obj = source?.DDRYS || source?.RDRYS;
        for (const t0 in obj) {
            str += `${'${' + obj[t0].ONOFF.NAME + '}'}==1&&`
        }
        str.slice(-2);
        ARDTS[t].preStates = str;
    }

    const idsList = {
        ...ACOPS,
        ...ARWTS,
        ...RDRYS,
        ...DDRYS,
        ...ARDTS
    }
    let initTop = (ConHeight - getMaxHieght(ACOPS, ARWTS, RDRYS, DDRYS, ARDTS)) / 2 - 200; // 初始位置   
    initTop = initTop < 0 ? -100 : initTop;
    let prevX = 0; //前一个节点的横坐标
    // 空压机分组 x: 50, y: height
    const ACOPSobj = {};
    for (let key in ACOPS) {
        const { NEXT_NODE } = ACOPS?.[key] || {}
        if (NEXT_NODE) {
            // 防止 NEXT_NODE 不存在时去序列号导致报错
            const nextNode = JSON.stringify(NEXT_NODE);
            if (ACOPSobj[nextNode]) {
                ACOPSobj[nextNode].push(key);
            } else {
                ACOPSobj[nextNode] = [key];
            }
        }

    }
    let tag = 'L';
    for (let key in ACOPSobj) {
        if (ACOPSobj[key].length > JSON.parse(key).length) {
            tag = 'R';
        }
    }
    const ACOPSARR = Object.values(ACOPSobj);
    /**
    * 保留一位小数
    */
    const fix = (num) => {
        return Number(Number(num).toFixed(1));
    };
    // 空压机
    // 总管的位置: 在少的那一侧的中间设备上
    console.log('initTopinitTopinitTop', initTop)
    ACOPSARR.forEach((item, index) => {
        // 总管是否在当前侧,就是多设定一个横管
        const len = item.length - 1;
        let str = ''
        item.forEach(t0 => str += `${'${' + ACOPS[t0].ONOFF.NAME + '}'}==1&&`);
        item.forEach((t, i) => {
            const current = ACOPS[t];
            const deviceItem = device('Acop', current, pointsObject, deviceModelMap?.ACOPS?.[current.ID]);
            result[deviceItem.id] = deviceItem;
            result[deviceItem.id].props.style = { ...styleMap['Acop'], ...position((index + i), initTop, 0) };
            prevX = result[deviceItem.id].props.style.translateX;
            const target = result[deviceItem.id].props.style;
            const nameText = text();
            nameText.props.value = current.NAME
            nameText.props.style = {
                ...nameText.props.style,
                translateX: target.translateX + target.width * 0.5 - 20,
                translateY: target.translateY + target.height + 10
            }
            result[nameText.id] = nameText;
            [['PR_DISCHARGE', 'Mpa'], ['T_DISCHARGE', '℃']].forEach((textitem, textindex) => {
                generateText(result, textitem, textindex, target);
            })
            pointsObject['PR_DISCHARGE'] = 0;
            pointsObject['T_DISCHARGE'] = 0;
            const pipeh1 = pipe('h', '0');
            pipeh1.props.waterstyle = '1';
            pipeh1.props.style = { ...styleMap['h'], fill: '#407FCB', };
            pipeh1.props.style.width = fix(pipeh1.props.style.width * 0.33);
            pipeh1.props.style.translateX = target.translateX + target.width;
            pipeh1.props.style.translateY = target.translateY + target.height * 0.7 + styleMap['h'].height;
            pipeh1.props.status = {
                bind: `${'${' + current.ONOFF.NAME + '}'}==1`,
                type: "expressions",
            };
            result[pipeh1.id] = pipeh1;
            const X = pipeh1.props.style.translateX + pipeh1.props.style.width;
            const pipeh2 = pipe('h', '0');
            const vheight = len % 2 == 0 ? pipevHeight : pipevHeight * 0.5;
            if (tag === 'L' && i === (len >> 1)) { // 生成总管
                pipeh2.props.waterstyle = '1';
                pipeh2.props.style = { ...styleMap['h'], fill: '#407FCB', };
                pipeh2.props.style.width = fix(pipeh2.props.style.width * 0.33);
                pipeh2.props.style.translateX = X + styleMap['v'].width;
                pipeh2.props.style.translateY = pipeh1.props.style.translateY + (len % 2 == 0 ? 0 : vheight);
                pipeh2.props.status = {
                    bind: str.slice(0, -2),
                    type: "expressions",
                };
                result[pipeh2.id] = pipeh2;
            }
            if ( i === (len >> 1)) {
                const pipev1 = pipe('v', (i > (len >> 1)) ? '1' : '0');
                pipev1.props.waterstyle = '1';
                pipev1.props.style = { ...styleMap['v'], fill: '#407FCB', };
                pipev1.props.style.height = vheight;
                pipev1.props.style.translateX = X;
                pipev1.props.style.translateY = pipeh1.props.style.translateY;
                pipev1.props.status = {
                    bind: str.slice(0, -2),
                    type: "expressions",
                };
                result[pipev1.id] = pipev1;
                if (len % 2 == 1) {
                    // 生成总管的地方要生成两个竖管
                    const pipev2 = pipe('v', '1');
                    pipev2.props.waterstyle = '1';
                    pipev2.props.style = { ...styleMap['v'], fill: '#407FCB', };
                    pipev2.props.style.height = vheight;
                    pipev2.props.style.translateX = X;
                    pipev2.props.style.translateY = pipev1.props.style.translateY + vheight;
                    pipev2.props.status = {
                        bind: str.slice(0, -2),
                        type: "expressions",
                    };
                    result[pipev2.id] = pipev2;
                }
            } else if (i !== len && i !== (len >> 1)) {
                const pipev = pipe('v', (i > (len >> 1)) ? '1' : '0');
                pipev.props.waterstyle = '1';
                pipev.props.style = { ...styleMap['v'], fill: '#407FCB', };
                pipev.props.style.height = 150;
                pipev.props.style.translateX = X;
                pipev.props.style.translateY = pipeh1.props.style.translateY;
                pipev.props.status = {
                    bind: `${'${' + ACOPS[item[i + 1]].ONOFF.NAME + '}'}==1`,
                    type: "expressions",
                };
                result[pipev.id] = pipev;
            }
            if (i == 0) {
                const nextlen = current.NEXT_NODE?.length;
                const curlen = item.length;
                current.NEXT_NODE.forEach(t => {
                    t.LEN = nextlen;
                })
                helpFunction(current.NEXT_NODE, result, tag, prevX, initTop + (curlen - nextlen) * pipevHeight * 0.5, result[deviceItem.id], idsList, deviceModelMap, item.length, pointsObject)
            }
        })
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
                "YdPQ0AdAa_"
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
                "HwVZcC64He"
            ],
            "linkedNodes": {}
        },
        "HwVZcC64He": {
            "type": {
                "resolvedName": "GenericIcon"
            },
            "isCanvas": false,
            "props": {
                "displayName": "GenericIcon",
                "icon": "LogoutOutlined",
                "events": {
                    "onClick": {
                        "action": "logout"
                    }
                },
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
                    "marginSide": "side",
                    "margin": 0,
                    "color": "rgb(255, 255, 255)",
                    "marginTop": 0,
                    "marginRight": 20,
                    "marginLeft": 40,
                    "marginBottom": 0
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "YdPQ0AdAa_",
            "hidden": false,
            "nodes": [],
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
    }
    console.log('result', result)
    return result;
}