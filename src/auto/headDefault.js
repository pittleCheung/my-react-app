import { contentstyle, txtstyle, btnstyle, colrowstyle } from './pageNodeDefault';
import { commonTextStyle } from './stylesDefault';
import { nanoid } from 'nanoid';
import { drawerid } from './pageDefault'

export default (headid, parentbox, source, tag, allsource) => {
    const allArr = allsource && Object.values(allsource).map(t => ({
        "id": t.ID,
        "label": t.NAME,
        "key": t.ID,
        "disabled": false,
        "links": "",
        "name": t.NAME,
        "title": t.NAME
    }))
    return {
        [headid]: {
            "id": headid,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "span": 24,
                "style": {
                    ...contentstyle,
                    "height": '48px',
                    "translateX": 0,
                    "translateY": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "flexWrap": "wrap",
                    "background": "linear-gradient(#23263B, #23263B)",
                    "backgroundList": [
                        {
                            "id": "G56DBVl10R",
                            "type": "color",
                            "key": "G56DBVl10R",
                            "value": "#23263B",
                            "disabled": false
                        }
                    ],
                },
                "displayName": "Container"
            },
            "custom": {},
            "parent": parentbox,
            "nodes": [
                "Qig2cA0j1y",
                "bkTsl7i0EA",
                "C-Drdz3ynO"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "Qig2cA0j1y": {
            "id": "Qig2cA0j1y",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 8,
                "style": {
                    ...contentstyle,
                    "background": "linear-gradient(#23263B, #23263B)",
                    "backgroundList": [
                        {
                            "id": "G56DBVl10R",
                            "type": "color",
                            "key": "G56DBVl10R",
                            "value": "#23263B",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "color": "rgb(255, 255, 255)",
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "topCenter",
                    "justifyContent": "center",
                    "alignItems": "flex-start",
                    "paddingLeft": 8
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": headid,
            "nodes": [
                "xUpAMbJesl"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "bkTsl7i0EA": {
            "id": "bkTsl7i0EA",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 8,
                "style": {
                    ...contentstyle,
                    "background": "linear-gradient(#23263B, #23263B)",
                    "backgroundList": [
                        {
                            "id": "xTlfDmgn6Z",
                            "type": "color",
                            "key": "xTlfDmgn6Z",
                            "value": "#23263B",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 16
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": headid,
            "nodes": [
                "yiqQBrj5P6",
                "Ge30tZHeIq"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "xUpAMbJesl": !tag ? {
            "id": "xUpAMbJesl",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "系统图",
                "style": {
                    ...txtstyle,
                    "paddingLeft": 15,
                }
            },
            "custom": {},
            "parent": "Qig2cA0j1y",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        } : {
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
                "children": "空压站房",
                "disabled": false,
                "arrow": true,
                "autoAdjustOverflow": true,
                "autoFocus": false,
                "destroyPopupOnHide": false,
                "menu": {
                    "style": {
                        "maxWidth": 240
                    },
                    "items": allArr
                }
            },
            "displayName": "Dropdown",
            "custom": {},
            "parent": "Qig2cA0j1y",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "yiqQBrj5P6": {
            "id": "yiqQBrj5P6",
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "children": "常规模式",
                "template": "default",
                "type": "default",
                "shape": "default",
                "htmlType": "button",
                "status": [
                    {
                        "id": "zjDgmJ5hLa",
                        "label": "打开",
                        "value": "1",
                        "expression": {
                            "bind": source.MODE_SYS.NAME,
                            "type": "points",
                            "point": [source.MODE_SYS.NAME]
                        },
                        "color": "rgb(38,102,216)",
                    },
                    {
                        "id": "EGZ1WVT_gX",
                        "label": "关闭",
                        "value": "0",
                        "expression": {
                            "bind": source.MODE_SYS.NAME,
                            "type": "points",
                            "point": [source.MODE_SYS.NAME]
                        },
                        "color": "rgb(38, 38, 38)"
                    }
                ],    
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.MODE_SYS.NAME,
                            "value": "1"
                        }
                    }
                },
                "style": {
                    ...btnstyle,
                    "translateX": 0,
                    "translateY": 0,
                    "marginTop": 0,
                },
                "displayName": "Button"
            },
            "custom": {},
            "parent": "bkTsl7i0EA",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "Ge30tZHeIq": {
            "id": "Ge30tZHeIq",
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "children": "优化模式",
                "template": "default",
                "type": "default",
                "shape": "default",
                "status": [
                    {
                        "id": "zjDgmJ5hLv",
                        "label": "打开",
                        "value": "2",
                        "expression": {
                            "bind": source.MODE_SYS.NAME,
                            "type": "points",
                        },
                        "color": "rgb(38,102,216)",
                        "name": "打开",
                        "title": "打开"
                    },
                    {
                        "id": "EGZ1WVT_gw",
                        "label": "关闭",
                        "value": "0",
                        "expression": {
                            "bind": source.MODE_SYS.NAME,
                            "type": "points",
                        },
                        "color": "rgb(38, 38, 38)"
                    }
                ],  
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.MODE_SYS.NAME,
                            "value": "2"
                        }
                    }
                },
                "style": {
                    ...btnstyle,
                    "translateX": 0,
                    "translateY": 0,
                    "marginTop": 0,
                },
                "displayName": "Button"
            },
            "custom": {},
            "parent": "bkTsl7i0EA",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "C-Drdz3ynO": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
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
                    "marginSide": "all",
                    "padding": 8,
                    "translateX": 0,
                    "translateY": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "background": "linear-gradient(rgba(35, 38, 59, 1), rgba(35, 38, 59, 1))",
                    "backgroundList": [
                        {
                            "id": "bWxFxFYco2",
                            "type": "color",
                            "key": "bWxFxFYco2",
                            "value": "rgba(35, 38, 59, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": headid,
            "hidden": false,
            "nodes": [
                drawerid
            ],
            "linkedNodes": {}
        }
    }
}

const footItem = (footid, name, unit, point, type) => {
    const contentid = nanoid(10);
    const node1id = nanoid(10);
    return {
        id: contentid,
        page: {
            [contentid]: {
                "id": contentid,
                "type": {
                    "resolvedName": "Container"
                },
                "displayName": "Container",
                "props": {
                    "style": {
                        ...colrowstyle,
                        "width": type ? '14%' : '15%',
                        "justifyContent": "flex-start",
                        "rowGap": 0,
                        "columnGap": 0
                    },
                    "displayName": "Container",
                },
                "custom": {},
                "parent": footid,
                "nodes": [node1id], //
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [node1id]: {
                "id": node1id,
                "type": {
                    "resolvedName": "StateText"
                },
                "isCanvas": false,
                "props": {
                    "displayName": "StateText",
                    "level": "5",
                    "size": "",
                    "decimalSeparator": 1,
                    "percent": false,
                    "value": {
                        "bind": point,
                        "type": "points"
                    },
                    "type": "",
                    "strong": false,
                    "italic": false,
                    "underline": false,
                    "disabled": false,
                    "mark": false,
                    "keyboard": false,
                    "delete": false,
                    "code": false,
                    "isBefore": true,
                    "isAfter": !!unit,
                    "before": {
                        "value": name + "："
                    },
                    "after": {
                        "value": unit || ''
                    },
                    "style": {
                        ...commonTextStyle,
                    }
                },
                "displayName": "StateText",
                "custom": {},
                "parent": contentid,
                "hidden": false,
                "nodes": [],
                "linkedNodes": {}
            },
        }
    }
}
export const footDefault = (footid, parentbox, source, type) => {
    let arr = [];
    if (type === 'air') {
        arr = [
            footItem(footid, '气电比', null, source?.['R_AIR_COMP'].NAME, type),
            footItem(footid, '总功率', 'kW', source?.['P_PLANT'].NAME, type),
            footItem(footid, '排气压力', 'kPa', source?.['PR_DISCHARGE'].NAME, type),
            footItem(footid, '排气温度', 'kPa', source?.['T_DISCHARGE'].NAME, type),
            footItem(footid, '总管压力', 'kPa', source?.['PR_PLANT'].NAME, type),
            footItem(footid, '总管露点温度', '℃', source?.['T_DEW'].NAME, type),
            footItem(footid, '总管流量', 'Nm³', source?.['FLOW_PLANT_AIR'].NAME, type)
        ]
    } else {
        arr = [
            footItem(footid, '制冷站COP', null, source?.['COP_PLANT'].NAME),
            footItem(footid, '制冷站', 'kW', source?.['P_PLANT'].NAME),
            footItem(footid, '制冷机', 'kW', source?.['P_CH_GROUP'].NAME),
            footItem(footid, '冷冻泵', 'kW', source?.['P_CHWP_GROUP'].NAME),
            footItem(footid, '冷却泵', 'kW', source?.['P_CWP_GROUP'].NAME),
            footItem(footid, '冷却塔', 'kW', source?.['P_CT_GROUP'].NAME)
        ]
    }
    console.log('arr[0]', arr[0], parentbox)
    return {
        [footid]: {
            "id": footid,
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": {
                    ...contentstyle,
                    "height": "48px",
                    "translateX": 0,
                    "translateY": 0,
                    "background": "linear-gradient(#22263C, #22263C)",
                    "backgroundList": [
                        {
                            "id": "B4lopvwr9K",
                            "type": "color",
                            "key": "B4lopvwr9K",
                            "value": "#22263C",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "rowGap": 0,
                    "columnGap": 0,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": parentbox,
            "nodes": arr?.map(t => t.id), //arr?.map(t => t.id)
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        ...arr[0].page,
        ...arr[1].page,
        ...arr[2].page,
        ...arr[3].page,
        ...arr[4].page,
        ...arr[5].page,
        ...(arr?.[6]?.page || {})
    }
}

