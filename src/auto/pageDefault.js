/**
 * 生成监控页面默认
 */
import { nanoid } from 'nanoid';
import { contentstyle, colstyle, btnstyle, txtstyle, contentflexstyle, colnoflex, colrowstyle, textborderstyle } from './pageNodeDefault';
import { drawthree, drawmap, drawtwo, drwacontrol, ariMap } from './pageNodeDefault';
export const drawerid = nanoid(10);

export const pageDefault = (parentbox, boxid, headid, footid) => {
    return {
        "id": parentbox,
        "type": {
            "resolvedName": "Container"
        },
        "displayName": "Container",
        "props": {
            "span": 24,
            "style": {
                ...colstyle,
                "height": "100%",
                "display": "flex",
                "flexDirection": "row",
                "key": "topLeft",
                "justifyContent": "flex-start",
                "alignItems": "flex-start",
                "rowGap": 0,
                "columnGap": 0,
                "flexWrap": "wrap"
            },
            "displayName": "Container"
        },
        "parent": "ROOT",
        "nodes": [
            headid,
            // drawerid,
            boxid,
            footid
        ],
        "linkedNodes": {},
        "hidden": false,
        "isCanvas": true
    }
}

export const pageLayout = (parentid, source, tag) => {
    const drawerbtnid = nanoid(10);
    const drawercontentid = nanoid(10);
    const drawertitleid = nanoid(10);
    const drawertitlechildid = nanoid(10);
    const drawercontentchildid = nanoid(10);
    const tab1 = nanoid(10);
    const tab2 = nanoid(10);
    const settingparent = nanoid(10); // 优化边界设置
    const openparent = nanoid(10); // 优化参数开关盒子
    const controlparent = nanoid(10); // 控制参数
    const drawMap = drawmap();
    const setting = Array(7).fill(1).map((_, i) => {
        return drawthree(settingparent, tag ? ariMap[2]?.[i] : drawMap[i], source)
    });
    const open = Array(tag ? 8 : 7).fill(1).map((_, i) => {
        return drawtwo(openparent, tag ? ariMap[1]?.[i] : drawMap[i], source)
    });
    const control = Array(tag ? 8 : 7).fill(1).map((_, i) => {
        return drwacontrol(controlparent, tag ? ariMap[0]?.[i] : drawMap[i], source)
    });

    return {
        [drawerid]: {
            "id": drawerid,
            "type": {
                "resolvedName": "Drawer"
            },
            "displayName": "Drawer",
            "props": {
                "width": 378,
                "height": 378,
                "placement": "right",
                "size": "default",
                "isTitle": true,
                "isFooter": false,
                "mask": true,
                "isExtra": false,
                "closable": true,
                "maskClosable": true,
                "displayName": "Drawer",
                "style": {
                    "translateX": 0,
                    "translateY": 0,
                },
                "getContainer": "body"
            },
            "custom": {},
            "parent": parentid,
            "nodes": [],
            "linkedNodes": {
                "drawer-button": drawerbtnid,
                "drawer-title": drawertitleid,
                "drawer-content": drawercontentid
            },
            "hidden": false,
            "isCanvas": true
        },
        [drawerbtnid]: {
            "id": drawerbtnid,
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "width": '40px',
                "children": "",
                "icon": "ControlOutlined",
                "template": "default",
                "type": "text",
                "shape": "default",
                "events": {},
                "style": {
                    ...btnstyle,
                    "position": 'absolute',
                    "right": '10px',
                    'top': '-4px',
                    "width": '40px',
                }
            },
            "custom": {},
            "parent": drawerid,
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [drawertitleid]: {
            "id": drawertitleid,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle,
            },
            "custom": {},
            "parent": drawerid,
            "nodes": [
                drawertitlechildid
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [drawercontentid]: {
            "id": drawercontentid,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle
            },
            "custom": {},
            "parent": drawerid,
            "nodes": [
                drawercontentchildid
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [drawertitlechildid]: {
            "id": drawertitlechildid,
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化配置",
                "style": txtstyle
            },
            "custom": {},
            "parent": drawertitleid,
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        [drawercontentchildid]: {
            "id": drawercontentchildid,
            "type": {
                "resolvedName": "Tabs"
            },
            "displayName": "Tabs",
            "props": {
                "displayName": "Tabs",
                "type": "line",
                "size": "middle",
                "defaultActiveKey": "",
                "tabBarGutter": 0,
                "tabPosition": "top",
                "centered": false,
                "destroyInactiveTabPane": false,
                "items": [
                    {
                        "id": "1",
                        "label": "优化控制",
                        "key": "1",
                        "children": "内容1",
                        "name": "优化控制",
                        "title": "优化控制"
                    },
                    {
                        "id": "2",
                        "label": "优化设置",
                        "key": "2",
                        "children": "内容2",
                        "name": "优化设置",
                        "title": "优化设置"
                    }
                ],
                "style": {
                    "translateX": 0,
                    "translateY": 0
                }
            },
            "custom": {},
            "parent": drawercontentid,
            "nodes": [],
            "linkedNodes": {
                "container-1": tab1,
                "container-2": tab2
            },
            "hidden": false,
            "isCanvas": true
        },
        [tab1]: {
            "id": tab1,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle,
                "children": "内容1"
            },
            "custom": {},
            "parent": drawercontentchildid,
            "nodes": [
                "n2Lt6nV2Um",
                "rSVhIgwusS",
                controlparent
                
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [tab2]: {
            "id": tab2,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle,
                "children": "内容2"
            },
            "custom": {},
            "parent": drawercontentchildid,
            "nodes": [
                settingparent,
                openparent,
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [settingparent]: {
            "id": settingparent,
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": colstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": tab1,
            "nodes": [
                "q2CmQjoNPn",
                "Zbkajfwp-F",
                ...setting?.map(t => t.id)
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [openparent]: {
            "id": openparent,
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": colnoflex,
                "displayName": "Col"
            },
            "custom": {},
            "parent": tab2,
            "nodes": [
                "Kfe6Qygbt1",
                "CeAzrInI_q",
                ...open?.map(t => t.id),
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "q2CmQjoNPn": {
            "id": "q2CmQjoNPn",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    ...textborderstyle
                },
            },
            "custom": {},
            "parent": settingparent,
            "nodes": ['q2CmQjoNPB'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "q2CmQjoNPB": {
            "id": "q2CmQjoNPB",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化边界设置",
                "style": txtstyle
            },
            "custom": {},
            "parent": 'q2CmQjoNPn',
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "Zbkajfwp-F": {
            "id": "Zbkajfwp-F",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": {
                    ...contentstyle,
                    ...contentflexstyle
                },
                "displayName": "Container"
            },
            "custom": {},
            "parent": settingparent,
            "nodes": [
                "JVA9eTa-9g",
                "LE6jzWVNDz",
                "8J65JMXvkS"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        ...setting[0].page,
        ...setting[1].page,
        ...setting[2].page,
        ...setting[3].page,
        ...setting[4].page,
        ...setting[5].page,
        ...setting[6].page,
        "JVA9eTa-9g": {
            "id": "JVA9eTa-9g",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 14,
                "style": colrowstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "Zbkajfwp-F",
            "nodes": [
                "xRza1S7rup"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "LE6jzWVNDz": {
            "id": "LE6jzWVNDz",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 5,
                "style": colrowstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "Zbkajfwp-F",
            "nodes": [
                "5QTDRjPj5T"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "8J65JMXvkS": {
            "id": "8J65JMXvkS",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 5,
                "style": colrowstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "Zbkajfwp-F",
            "nodes": [
                "DphdMxNUg_"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "xRza1S7rup": {
            "id": "xRza1S7rup",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化边界",
                "style": txtstyle
            },
            "custom": {},
            "parent": "JVA9eTa-9g",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "5QTDRjPj5T": {
            "id": "5QTDRjPj5T",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "下限",
                "style": txtstyle
            },
            "custom": {},
            "parent": "LE6jzWVNDz",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "DphdMxNUg_": {
            "id": "DphdMxNUg_",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "上限",
                "style": txtstyle
            },
            "custom": {},
            "parent": "8J65JMXvkS",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "Kfe6Qygbt1": {
            "id": "Kfe6Qygbt1",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    ...textborderstyle
                },
            },
            "custom": {},
            "parent": openparent,
            "nodes": ['Kfe6Qygbte'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "Kfe6Qygbte": {
            "id": "Kfe6Qygbte",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化参数开关",
                "style": txtstyle
            },
            "custom": {},
            "parent": 'Kfe6Qygbt1',
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "CeAzrInI_q": {
            "id": "CeAzrInI_q",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": {
                    ...contentstyle,
                    ...contentflexstyle
                },
                "displayName": "Container"
            },
            "custom": {},
            "parent": openparent,
            "nodes": [
                "rZE1-97vhc",
                "-3Iwqmmzml"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "rZE1-97vhc": {
            "id": "rZE1-97vhc",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 18,
                "style": {
                    ...txtstyle,
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": "CeAzrInI_q",
            "nodes": [
                "snMF9SbO6z"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "-3Iwqmmzml": {
            "id": "-3Iwqmmzml",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 6,
                "style": {
                    ...txtstyle,
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": "CeAzrInI_q",
            "nodes": [
                "96wSyPKmUh"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "snMF9SbO6z": {
            "id": "snMF9SbO6z",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "控制参数",
                "style": txtstyle
            },
            "custom": {},
            "parent": "rZE1-97vhc",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "96wSyPKmUh": {
            "id": "96wSyPKmUh",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "是否开启",
                "style": txtstyle
            },
            "custom": {},
            "parent": "-3Iwqmmzml",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        ...open[0].page,
        ...open[1].page,
        ...open[2].page,
        ...open[3].page,
        ...open[4].page,
        ...open[5].page,
        ...open?.[6]?.page,
        ...open?.[7]?.page,
        "n2Lt6nV2Um": {
            "id": "n2Lt6nV2Um",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": {
                    ...colrowstyle,
                    "alignItems": "flex-start",
                    "columnGap": 16
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": "30-TOBvNoT",
            "nodes": [
                "xYzNQ1ZE_z",
                "0YbA4GEXPo"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "rSVhIgwusS": {
            "id": "rSVhIgwusS",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": colnoflex,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "30-TOBvNoT",
            "nodes": [
                "YsCJaiTVu0",
                "6y7QJqNp0k"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [controlparent]: {
            "id": controlparent,
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": {
                    ...txtstyle,
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": tab1,
            "nodes": [
                "NrvCv6U4Dm",
                "LHbHuHR2aE",
                ...control?.map(t => t.id),
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "xYzNQ1ZE_z": {
            "id": "xYzNQ1ZE_z",
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "children": "一键开机",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.ONECLICK_START?.NAME,
                            "value": "1"
                        }
                    }
                },
                "status": [
                    {
                        "id": "E7FX2YUMnt",
                        "label": "",
                        "value": "0",
                        "expression": {
                            "bind": "${" + source.ONECLICK_START?.NAME + "}==0?0:1",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_START?.NAME
                            ],
                        },
                        "color": "transparent"
                    },
                    {
                        "id": "gscdXE4Lbw",
                        "label": "",
                        "value": "1",
                        "expression": {
                            "bind": "${" + source.ONECLICK_START?.NAME + "}==1?1:0",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_START?.NAME
                            ],
                        },
                        "color": "rgb(46,142,251)"
                    }
                ],
                "style": {
                    ...txtstyle,
                    "paddingSide": "side",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                },
                "displayName": "Button"
            },
            "custom": {},
            "parent": "n2Lt6nV2Um",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "0YbA4GEXPo": {
            "id": "0YbA4GEXPo",
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "children": "一键关机",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.ONECLICK_STOP?.NAME,
                            "value": "1"
                        }
                    }
                },
                "status": [
                    {
                        "id": "E7FX2YUMnt",
                        "label": "",
                        "value": "0",
                        "expression": {
                            "bind": "${" + source.ONECLICK_STOP?.NAME + "}",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_STOP?.NAME
                            ],
                        },
                        "color": "transparent"
                    },
                    {
                        "id": "gscdXE4Lbw",
                        "label": "",
                        "value": "1",
                        "expression": {
                            "bind": "${" + source.ONECLICK_STOP?.NAME + "}",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_STOP?.NAME
                            ],
                        },
                        "color": "rgb(46,142,251)"
                    }
                ],
                "style": {
                    ...txtstyle,
                    "paddingSide": "side",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                },
                "displayName": "Button"
            },
            "custom": {},
            "parent": "n2Lt6nV2Um",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "YsCJaiTVu0": {
            "id": "YsCJaiTVu0",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    ...textborderstyle
                },
            },
            "custom": {},
            "parent": "rSVhIgwusS",
            "nodes": ['YsCJaiTVub'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "YsCJaiTVub": {
            "id": "YsCJaiTVub",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化控制建议信息",
                "style": txtstyle
            },
            "custom": {},
            "parent": "YsCJaiTVu0",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        // 建议组件
        "6y7QJqNp0k": {
            "id": "6y7QJqNp0k",
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": false,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "200px",
                    "heightType": "fixed",
                    "widthType": "relative",
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
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 4,
                    "paddingBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "rSVhIgwusS",
            "hidden": false,
            "nodes": [
                "KBi2yNmUny"
            ],
            "linkedNodes": {}
        },
        "KBi2yNmUny": {
            "type": {
                "resolvedName": "LogsRoller"
            },
            "isCanvas": true,
            "props": {
                "displayName": "LogRoller",
                "value": source?.HINT?.NAME && {
                    "bind": source?.HINT?.NAME,
                    "type": "points",
                    "point": [source?.HINT?.NAME]
                },
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "200px",
                    "widthType": "relative",
                    "heightType": "fixed",
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
                    "heightUnit": "px"
                }
            },
            "displayName": "LogsRoller",
            "custom": {},
            "parent": "6y7QJqNp0k",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "NrvCv6U4Dm": {
            "id": "NrvCv6U4Dm",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style":  {
                    ...contentstyle,
                    ...textborderstyle
                },
            },
            "custom": {},
            "parent": controlparent,
            "nodes": ['NrvCv6U4DH'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "NrvCv6U4DH": {
            "id": "NrvCv6U4DH",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "控制参数",
                "style": txtstyle
            },
            "custom": {},
            "parent": "NrvCv6U4Dm",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        // 控制参数
        "LHbHuHR2aE": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "2a1_jDAqHs",
                "VPlbKn2dWO",
                "pv3jOlEtY5"
            ],
            "linkedNodes": {}
        },
        "2a1_jDAqHs": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LHbHuHR2aE",
            "hidden": false,
            "nodes": [
                "BG1SMbzlmA"
            ],
            "linkedNodes": {}
        },
        "VPlbKn2dWO": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LHbHuHR2aE",
            "hidden": false,
            "nodes": [
                "zOqQGwIaA9"
            ],
            "linkedNodes": {}
        },
        "pv3jOlEtY5": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LHbHuHR2aE",
            "hidden": false,
            "nodes": [
                "D_ILDFFXhm"
            ],
            "linkedNodes": {}
        },
        "BG1SMbzlmA": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "控制参数",
                "status": [
                    {
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d"
                    },
                    {
                        "label": "故障",
                        "value": "1",
                        "key": "3",
                        "color": "#f5222d"
                    }
                ],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
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
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "2a1_jDAqHs",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "zOqQGwIaA9": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "设定值",
                "status": [
                    {
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d"
                    },
                    {
                        "label": "故障",
                        "value": "1",
                        "key": "3",
                        "color": "#f5222d"
                    }
                ],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
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
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "VPlbKn2dWO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "D_ILDFFXhm": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "反馈值",
                "status": [
                    {
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d"
                    },
                    {
                        "label": "故障",
                        "value": "1",
                        "key": "3",
                        "color": "#f5222d"
                    }
                ],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
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
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "pv3jOlEtY5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        ...control?.[0]?.page,
        ...control?.[1]?.page,
        ...control?.[2]?.page,
        ...control?.[3]?.page,
        ...control?.[4]?.page,
        ...control?.[5]?.page,
        ...control?.[6]?.page,
        ...control?.[7]?.page,
    }
}
