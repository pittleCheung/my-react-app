import { contentstyle, contentpaddingstyle } from '../pageNodeDefault';
/**
 * 首页
 */
export default (source, links, global, type) => {
    console.log('sourcesource', location.hostname, location.port)
    return {
        "ROOT": {
            "type": {
                "resolvedName": "Page"
            },
            "isCanvas": true,
            "props": {
                "title": "页面标题",
                "theme": {
                    "algorithm": "darkAlgorithm",
                    "token": {
                        "colorPrimary": "#1677ff"
                    }
                },
                "events": {
                    "onLoad": null
                },
                "style": {
                    ...contentstyle,
                    "background": "linear-gradient(rgba(16, 18, 32, 1), rgba(16, 18, 32, 1))",
                    "borderRadius": 0,
                    "backgroundList": [
                        {
                            "id": "EKzxxXgFQm",
                            "type": "color",
                            "key": "EKzxxXgFQm",
                            "value": "rgba(16, 18, 32, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "",
                    "flexDirection": "",
                    "key": "centerLeft",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": "",
                    "minHeight": '100vh'
                },
                "projId": global.ProjectId,
                "global": {
                    "ProjectId": global.ProjectId,
                    "ProjectName": global.ProjectName,
                    "ProjectImage": global.ProjectImage,
                    "BuildingArea": global.BuildingArea,
                    "DeviceNum": global.DeviceNum,
                    "TagNum": global.TagNum,
                    "LogicNum": global.LogicNum,
                    "AlarmIndexNum": global.AlarmIndexNum,
                    "Temp": global.Temp,
                    "Hum": global.Hum,
                    "Weather": global.Weather,
                    "Wind": global.Wind
                },
                "points": type === 'CAS' ? {
                    [source.AIR_DISCHARGE_GROUP?.NAME]: 0,
                    [source.AIR_USED_GROUP?.NAME]: 0
                } : {
                    [source.ELEC_CH_GROUP?.NAME]: 0,
                    [source.ELEC_CHWP_GROUP?.NAME]: 0,
                    [source.ELEC_CWP_GROUP?.NAME]: 0,
                    [source.ELEC_CT_GROUP?.NAME]: 0,
                    [source.COP_HVAC?.NAME]: 0
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "3GQM1xL3jA",
                "2GGr33YGxV"
            ],
            "linkedNodes": {}
        },
        "3GQM1xL3jA": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "height": "68px",
                    "heightType": "fixed",
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
                    ...contentstyle,
                    "fontSize": 18,
                    "fontWeight": "bolder",
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
                    ...contentstyle,
                    "widthType": "fixed",
                    "width": "300px",
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
                "value": "1",
                "selectedKeys": "1",
                "items": [
                    {
                        "id": "1",
                        "label": "首页",
                        "key": "1",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links[0]
                        }
                    },
                    {
                        "id": "2",
                        "label": "监控",
                        "key": "2",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links[1]
                        }
                    },
                    {
                        "id": "3",
                        "label": "能耗",
                        "key": "3",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links[2]
                        }
                    },
                    {
                        "id": "4",
                        "label": "报警",
                        "key": "4",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links[3]
                        }
                    },
                    {
                        "id": "5",
                        "label": "报表",
                        "key": "5",
                        "disabled": false,
                        "links": {
                            "action": "navigateTo",
                            "link": links[4]
                        }
                    }
                ],
                "style": {
                    ...contentstyle,
                    "width": "300px",
                    "widthType": "fixed",
                    "lineHeight": "46px",
                    "borderBottomWidth": 0,
                    "background": "transparent",
                    "backgroundList": [],
                    "widthUnit": "px"
                },
                "displayName": "Menu",
                "selectedKeys": "1"
            },
            "displayName": "Menu",
            "custom": {},
            "parent": "3GQM1xL3jA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2GGr33YGxV": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    ...contentstyle,
                    "background": "linear-gradient(rgba(16, 18, 32, 1), rgba(16, 18, 32, 1))",
                    "backgroundList": [
                        {
                            "id": "llgI_hHhLl",
                            "type": "color",
                            "key": "llgI_hHhLl",
                            "value": "rgba(16, 18, 32, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "XMnO1qyfq-",
                "FZFWtIySHj"
            ],
            "linkedNodes": {}
        },
        "XMnO1qyfq-": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "flex",
                "span": 5,
                "flex": "'300px'",
                "style": {
                    ...contentpaddingstyle,
                    "width": "300px",
                    "widthType": "fixed",
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "heightUnit": "%"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "2GGr33YGxV",
            "hidden": false,
            "nodes": [
                "D1AMrYNybc",
                "5JC2OTgrA1",
                "ddwiJ-2P5s",
                "w1qWWGPpOo",
                "_sj3hQ1zik"
            ],
            "linkedNodes": {}
        },
        "D1AMrYNybc": {
            "type": {
                "resolvedName": "Image"
            },
            "isCanvas": false,
            "props": {
                "height": '300px',
                "width": '300px',
                "src": {
                    "bind": "ProjectImage",
                    "type": "global"
                },
                "events": {},
                "displayName": "Image"
            },
            "displayName": "Image",
            "custom": {},
            "parent": "XMnO1qyfq-",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "5JC2OTgrA1": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "marginTop": 20,
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "4FVXaxU9sS",
                            "type": "color",
                            "key": "4FVXaxU9sS",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XMnO1qyfq-",
            "hidden": false,
            "nodes": [
                "WYq162MOgv",
                "5D0OSmsZRd"
            ],
            "linkedNodes": {}
        },
        "ddwiJ-2P5s": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "background": "linear-gradient(rgba(23, 26, 43, 1), rgba(23, 26, 43, 1))",
                    "backgroundList": [
                        {
                            "id": "qHHm03DN9M",
                            "type": "color",
                            "key": "qHHm03DN9M",
                            "value": "rgba(23, 26, 43, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XMnO1qyfq-",
            "hidden": false,
            "nodes": [
                "aVQlI4YA2D",
                "MmXwhoG2B1"
            ],
            "linkedNodes": {}
        },
        "w1qWWGPpOo": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "height": "48px",
                    "heightType": "fixed",
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "S2M9kd80IN",
                            "type": "color",
                            "key": "S2M9kd80IN",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ],
                    "widthUnit": "%",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XMnO1qyfq-",
            "hidden": false,
            "nodes": [
                "7XHFj4gpds",
                "Wb3xGMiBrb"
            ],
            "linkedNodes": {}
        },
        "WYq162MOgv": {
            "type": {
                "resolvedName": "GenericIcon"
            },
            "isCanvas": false,
            "props": {
                "displayName": "GenericIcon",
                "icon": "BankOutlined",
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 18,
                    "fontWeight": "bolder",
                    "color": "rgb(255, 255, 255)",
                    "marginSide": "side",
                    "marginTop": 0,
                    "marginRight": 20,
                    "marginLeft": 20,
                    "marginBottom": 0
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "5JC2OTgrA1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "5D0OSmsZRd": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "height": "48px",
                    "width": "180px",
                    "heightType": "fixed",
                    "widthType": "fixed",
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "5JC2OTgrA1",
            "hidden": false,
            "nodes": [
                "-Fp2BQj_ik",
                "JbxPCfM3D_",
                "3tBvF3cL7p"
            ],
            "linkedNodes": {}
        },
        "-Fp2BQj_ik": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "面积:",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "5D0OSmsZRd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "3tBvF3cL7p": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "m²",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "5D0OSmsZRd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "JbxPCfM3D_": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "BuildingArea",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": 'right'
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "5D0OSmsZRd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "aVQlI4YA2D": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": contentpaddingstyle,
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "ddwiJ-2P5s",
            "hidden": false,
            "nodes": [
                "p_lPaNkepc",
                "eirCob1QJg"
            ],
            "linkedNodes": {}
        },
        "MmXwhoG2B1": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": contentpaddingstyle,
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "ddwiJ-2P5s",
            "hidden": false,
            "nodes": [
                "QIpkor6MR9",
                "PAbaZ4ZkWe"
            ],
            "linkedNodes": {}
        },
        "QIpkor6MR9": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "MmXwhoG2B1",
            "hidden": false,
            "nodes": [
                "WsmT6SXO6x",
                "R910brpIA1"
            ],
            "linkedNodes": {}
        },
        "PAbaZ4ZkWe": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "textAlign": "center",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topCenter",
                    "justifyContent": "center",
                    "alignItems": "flex-start",
                    "columnGap": 0
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "MmXwhoG2B1",
            "hidden": false,
            "nodes": [
                "Kl7YYMdKZe",
                "s-dtPTm6jg"
            ],
            "linkedNodes": {}
        },
        "7XHFj4gpds": {
            "type": {
                "resolvedName": "GenericIcon"
            },
            "isCanvas": false,
            "props": {
                "displayName": "GenericIcon",
                "icon": "CloudOutlined",
                "events": {},
                "style": {
                    ...contentstyle,
                    "marginSide": "side",
                    "fontSize": 18,
                    "fontWeight": "bolder",
                    "color": "rgb(255, 255, 255)",
                    "marginTop": 0,
                    "marginRight": 20,
                    "marginLeft": 20,
                    "marginBottom": 0
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "w1qWWGPpOo",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Wb3xGMiBrb": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "天气信息",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "w1qWWGPpOo",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "_sj3hQ1zik": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "S2M9kd80IN",
                            "type": "color",
                            "key": "S2M9kd80IN",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XMnO1qyfq-",
            "hidden": false,
            "nodes": [
                "kFUoy70ixX",
                "nrv2WsO4Re",
                "x5Lo52osTj",
                "XZSIn6UToL"
            ],
            "linkedNodes": {}
        },
        "x5Lo52osTj": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": contentpaddingstyle,
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "_sj3hQ1zik",
            "hidden": false,
            "nodes": [
                "LkbVJVkflV",
                "ehYqQHscm9"
            ],
            "linkedNodes": {}
        },
        "LkbVJVkflV": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": contentpaddingstyle,
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "x5Lo52osTj",
            "hidden": false,
            "nodes": [
                "KAwwNNBsvZ"
            ],
            "linkedNodes": {}
        },
        "ehYqQHscm9": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": contentpaddingstyle,
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "x5Lo52osTj",
            "hidden": false,
            "nodes": [
                "BHIA2dIce6"
            ],
            "linkedNodes": {}
        },
        "kFUoy70ixX": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": contentpaddingstyle,
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "_sj3hQ1zik",
            "hidden": false,
            "nodes": [
                "J-Ysz9Ec5j",
                "qJ6UJhhQiX"
            ],
            "linkedNodes": {}
        },
        "J-Ysz9Ec5j": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": contentpaddingstyle,
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "kFUoy70ixX",
            "hidden": false,
            "nodes": [
                "7emXePDeVh"
            ],
            "linkedNodes": {}
        },
        "qJ6UJhhQiX": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topRight",
                    "justifyContent": "flex-end",
                    "alignItems": "flex-start",
                    "columnGap": 5
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "kFUoy70ixX",
            "hidden": false,
            "nodes": [
                "8c4j1TpkbU",
                "g746NJ2Q5v"
            ],
            "linkedNodes": {}
        },
        "nrv2WsO4Re": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": contentpaddingstyle,
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "_sj3hQ1zik",
            "hidden": false,
            "nodes": [
                "UjzWrCSDSQ",
                "vS6Slk69W4"
            ],
            "linkedNodes": {}
        },
        "UjzWrCSDSQ": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": contentpaddingstyle,
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "nrv2WsO4Re",
            "hidden": false,
            "nodes": [
                "os9nmM-hLx"
            ],
            "linkedNodes": {}
        },
        "vS6Slk69W4": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topRight",
                    "justifyContent": "flex-end",
                    "alignItems": "flex-start",
                    "columnGap": 4
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "nrv2WsO4Re",
            "hidden": false,
            "nodes": [
                "gKmn4LmxDj",
                "gJiJbRaI3S"
            ],
            "linkedNodes": {}
        },
        "Mir-d7NqAu": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": contentstyle,
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "FZFWtIySHj",
            "hidden": false,
            "nodes": [
                "6WtVE6_Ugs"
            ],
            "linkedNodes": {}
        },
        "FZFWtIySHj": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "flex",
                "span": 19,
                "flex": "1",
                "style": {
                    ...contentpaddingstyle,
                    "heightUnit": "%",
                    "paddingTop": 0,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "2GGr33YGxV",
            "hidden": false,
            "nodes": [
                "Mir-d7NqAu",
                "WuWMo1iD1W"
            ],
            "linkedNodes": {}
        },
        "WuWMo1iD1W": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "flex-start",
                    "columnGap": 10
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "FZFWtIySHj",
            "hidden": false,
            "nodes": [
                "GV8x0YMXmd",
                "qUiD2YCRTK"
            ],
            "linkedNodes": {}
        },
        "GV8x0YMXmd": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "height": "100%",
                    "heightType": "relative",
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "WL1GCz3zoL",
                            "type": "color",
                            "key": "WL1GCz3zoL",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "%"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "WuWMo1iD1W",
            "hidden": false,
            "nodes": [
                "Xjqp3rMY3J",
                "U_xG4VU9H7"
            ],
            "linkedNodes": {}
        },
        "qUiD2YCRTK": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "knhaq6yUBJ",
                            "type": "color",
                            "key": "knhaq6yUBJ",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "",
                    "flexDirection": "",
                    "key": "centerLeft",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": ""
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "WuWMo1iD1W",
            "hidden": false,
            "nodes": [
                "-AM353lhqS",
                "jZk76ZW3SE"
            ],
            "linkedNodes": {}
        },
        "Xjqp3rMY3J": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "height": 48,
                    "heightType": "fixed",
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "XSeiyKab_d",
                            "type": "color",
                            "key": "XSeiyKab_d",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(41, 86, 192, 1)",
                    "borderSide": "side",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 2,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 8,
                    "paddingBottom": 0,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 5,
                    "marginBottom": 0,
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "GV8x0YMXmd",
            "hidden": false,
            "nodes": [
                "h7ubIkOQRu"
            ],
            "linkedNodes": {}
        },
        "-AM353lhqS": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "height": "48px",
                    "heightType": "fixed",
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "VCKVsxWmqw",
                            "type": "color",
                            "key": "VCKVsxWmqw",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(41, 86, 192, 1)",
                    "borderSide": "side",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 2,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 8,
                    "paddingBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qUiD2YCRTK",
            "hidden": false,
            "nodes": [
                "pDnCK9ii37"
            ],
            "linkedNodes": {}
        },
        "h7ubIkOQRu": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type === 'CAS' ? "供需平衡" :"分享能耗",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Xjqp3rMY3J",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pDnCK9ii37": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警信息",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "-AM353lhqS",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "U_xG4VU9H7": type == 'HVAC' ? {
            "type": {
                "resolvedName": "Pie"
            },
            "isCanvas": false,
            "props": {
                "option": {
                    "title": {},
                    "tooltip": {
                        "trigger": "item"
                    },
                    "legend": {
                        "orient": "horizontal",
                        "left": "left"
                    },
                    "series": [
                        {
                            "name": "分布比例",
                            "type": "pie",
                            "radius": "50%",
                            "data": [
                                {
                                    "pointSource": source.ELEC_CH_GROUP?.NAME,
                                    "name": source.ELEC_CH_GROUP?.NAME
                                },
                                {
                                    "pointSource": source.ELEC_CHWP_GROUP?.NAME,
                                    "name": source.ELEC_CHWP_GROUP?.NAME
                                },
                                {
                                    "pointSource": source.ELEC_CWP_GROUP?.NAME,
                                    "name": source.ELEC_CWP_GROUP?.NAME
                                },
                                {
                                    "pointSource": source.ELEC_CT_GROUP?.NAME,
                                    "name": source.ELEC_CT_GROUP?.NAME
                                }
                            ],
                            "emphasis": {
                                "itemStyle": {
                                    "shadowBlur": 10,
                                    "shadowOffsetX": 0,
                                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                                }
                            }
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "360px",
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Pie",
                "pointSource": source.ELEC_CH_GROUP?.NAME,
                "aggregate": "sum",
                "timeType": "1 day"
            },
            "displayName": "Pie",
            "custom": {},
            "parent": "GV8x0YMXmd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        } : {
            "type": {
                "resolvedName": "Bar"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Bar",
                "dateType": "day",
                "ranges": [],
                "aggregate": "last",
                "timeType": "5 minutes",
                "option": {
                    "xAxis": {
                        "type": "category",
                        "data": []
                    },
                    "yAxis": {
                        "type": "value"
                    },
                    "series": [
                        {
                            "id": "4Zgh4t7pW8",
                            "label": "AIR_DISCHARGE_GROUP",
                            "data": [],
                            "type": "bar",
                            "showBackground": true,
                            "backgroundStyle": {
                                "color": "rgba(180, 180, 180, 0.2)"
                            },
                            "name": "",
                            "stack": "",
                            "stackStrategy": "samesign",
                            "barWidth": null,
                            "barGap": "30%",
                            "barCategoryGap": "20%",
                            "large": false,
                            "pointSource": source.AIR_DISCHARGE_GROUP?.NAME,
                            "label": source.AIR_DISCHARGE_GROUP?.NAME
                        },
                        {
                            "id": "7N2xQkxBAO",
                            "type": "bar",
                            "name": "",
                            "stack": "",
                            "stackStrategy": "samesign",
                            "barWidth": null,
                            "barGap": "30%",
                            "barCategoryGap": "20%",
                            "large": false,
                            "data": [],
                            "pointSource": source.AIR_USED_GROUP?.NAME,
                            "label": source.AIR_USED_GROUP?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Bar",
            "custom": {},
            "parent": "GV8x0YMXmd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "jZk76ZW3SE": {
            "type": {
                "resolvedName": "Table"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Table",
                "size": "middle",
                "loading": false,
                "bordered": false,
                "showHeader": false,
                "source": "alarm",
                "columns": [
                    {
                        "id": "EgOb1VT58M",
                        "label": "F_LAST_TIME",
                        "title": "F_LAST_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "gJdF6Y3GrY",
                        "label": "F_NAME",
                        "title": "F_NAME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    }
                ],
                "alarm": {
                    "startDate": "",
                    "endDate": "",
                    "subSystemId": "",
                    "level": "",
                    "durationFilter": ""
                },
                "scroll": {
                    "x": 100,
                    "y": 360
                },
                "pagination": {
                    "pageSize": 10,
                    "page": 0
                },
                "isPagination": false,
                "isScroll": true
            },
            "displayName": "Table",
            "custom": {},
            "parent": "qUiD2YCRTK",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "6WtVE6_Ugs": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": contentpaddingstyle,
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Mir-d7NqAu",
            "hidden": false,
            "nodes": [
                "mRz_vpw9Sr",
                "x7pIBVfdDg"
            ],
            "linkedNodes": {}
        },
        "mRz_vpw9Sr": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "marginSide": "side",
                    "paddingSide": "side",
                    "height": "48px",
                    "heightType": "fixed",
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "llgI_hHhLl",
                            "type": "color",
                            "key": "llgI_hHhLl",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(41, 86, 192, 1)",
                    "borderSide": "side",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 2,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 8,
                    "paddingBottom": 0,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "6WtVE6_Ugs",
            "hidden": false,
            "nodes": [
                "PfLAF-QNaa"
            ],
            "linkedNodes": {}
        },
        "PfLAF-QNaa": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "今日系统能耗趋势",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "mRz_vpw9Sr",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "x7pIBVfdDg": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    ...contentpaddingstyle,
                    "paddingSide": "all",
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "78CquTosLm",
                            "type": "color",
                            "key": "78CquTosLm",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "6WtVE6_Ugs",
            "hidden": false,
            "nodes": [
                "5W3OQhMXuR",
                "DQvOrCuud4"
            ],
            "linkedNodes": {}
        },
        "5W3OQhMXuR": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 19,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "all",
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "KxJlZW0tUB",
                            "type": "color",
                            "key": "KxJlZW0tUB",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "x7pIBVfdDg",
            "hidden": false,
            "nodes": [
                "bNSDd3oA85"
            ],
            "linkedNodes": {}
        },
        "DQvOrCuud4": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 5,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "paddingSide": "all",
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "x7pIBVfdDg",
            "hidden": false,
            "nodes": [
                "m2Xjuu8SvA",
                "AjBLY0rvKQ",
            ],
            "linkedNodes": {}
        },
        "bNSDd3oA85": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "day",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "1 hour",
                "option": {
                    "tooltip": {
                        "show": true,
                        "trigger": "axis"
                    },
                    "legend": {
                        "data": [
                            "系列1",
                            "系列2",
                            "系列3"
                        ],
                        "show": false
                    },
                    "grid": {
                        "left": 7,
                        "right": 7,
                        "bottom": 10,
                        "top": 10,
                        "containLabel": true
                    },
                    "toolbox": {},
                    "xAxis": {
                        "type": "time",
                        "boundaryGap": false,
                        "data": [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                        ]
                    },
                    "yAxis": {
                        "type": "value"
                    },
                    "series": [
                        {
                            "id": "7pcKUQE7jW",
                            "label": source?.ELEC_HVAC?.NAME || source?.ELEC_CAS?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.ELEC_HVAC?.NAME || source?.ELEC_CAS?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                },
                "pointSource": source?.ELEC_HVAC?.NAME || source?.ELEC_CAS?.NAME
            },
            "displayName": "Line",
            "custom": {},
            "parent": "5W3OQhMXuR",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "m2Xjuu8SvA": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type === 'CAS' ? "系统气电比" : "系统COP",
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "DQvOrCuud4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "AjBLY0rvKQ": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "height": "220px",
                    "marginSide": "side",
                    "heightType": "fixed",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "marginTop": 50,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "heightUnit": "px"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "DQvOrCuud4",
            "hidden": false,
            "nodes": [
                "QlJgumYINx"
            ],
            "linkedNodes": {}
        },
        "QlJgumYINx": {
            "type": {
                "resolvedName": "Progress"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Progress",
                "percent": {
                    "bind": type == 'HVAC' ? source.COP_HVAC?.NAME : source.R_AIR_COMP?.NAME,
                    "type": "points"
                },
                "type": "dashboard",
                "status": "normal",
                "size": "default",
                "steps": 0,
                "strokeColor": "rgb(255, 122, 69)",
                "strokeWidth": 12,
                "gapDegree": 0,
                "gapPosition": "bottom"
            },
            "displayName": "Progress",
            "custom": {},
            "parent": "AjBLY0rvKQ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "WsmT6SXO6x": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "LogicNum",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                    "fontSize": 16,
                    "fontWeight": "bolder",
                    "fontStyle": "italic"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "QIpkor6MR9",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "R910brpIA1": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "策略",
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "QIpkor6MR9",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Kl7YYMdKZe": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "AlarmIndexNum",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "width": "93%",
                    "textAlign": "right",
                    "fontSize": 16,
                    "fontWeight": "bolder",
                    "fontStyle": "italic"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "PAbaZ4ZkWe",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "s-dtPTm6jg": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警指标",
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "PAbaZ4ZkWe",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "XZSIn6UToL": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    ...contentpaddingstyle,
                    "paddingSide": "all",
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "_sj3hQ1zik",
            "hidden": false,
            "nodes": [
                "awvoCZdNx2",
                "wOmI6uBEWy"
            ],
            "linkedNodes": {}
        },
        "awvoCZdNx2": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": contentpaddingstyle,
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "XZSIn6UToL",
            "hidden": false,
            "nodes": [
                "ovtEM9gqU-"
            ],
            "linkedNodes": {}
        },
        "wOmI6uBEWy": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": contentpaddingstyle,
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "XZSIn6UToL",
            "hidden": false,
            "nodes": [
                "8qdXN2tEKy"
            ],
            "linkedNodes": {}
        },
        "7emXePDeVh": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "温度",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "J-Ysz9Ec5j",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "8c4j1TpkbU": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "Temp",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "qJ6UJhhQiX",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "g746NJ2Q5v": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "℃",
                "events": {},
                "style": {
                    ...contentstyle,
                    "width": "10%",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "qJ6UJhhQiX",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "os9nmM-hLx": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "湿度",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "UjzWrCSDSQ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "gKmn4LmxDj": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "Hum",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "vS6Slk69W4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "gJiJbRaI3S": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "%",
                "events": {},
                "style": {
                    ...contentstyle,
                    "width": "10%",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "vS6Slk69W4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "KAwwNNBsvZ": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "天气",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "LkbVJVkflV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "BHIA2dIce6": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "Weather",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "ehYqQHscm9",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ovtEM9gqU-": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "风力",
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "awvoCZdNx2",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "8qdXN2tEKy": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "Wind",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "wOmI6uBEWy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "p_lPaNkepc": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "paddingSide": "all",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topCenter",
                    "justifyContent": "center",
                    "alignItems": "flex-start",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": ""
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "aVQlI4YA2D",
            "hidden": false,
            "nodes": [
                "x7VB1NoXX4",
                "pEEVau7PNV"
            ],
            "linkedNodes": {}
        },
        "eirCob1QJg": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "aVQlI4YA2D",
            "hidden": false,
            "nodes": [
                "wTRZIGPCwY",
                "pvR1M_GOZ6"
            ],
            "linkedNodes": {}
        },
        "pEEVau7PNV": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "设备",
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "p_lPaNkepc",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "wTRZIGPCwY": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "TagNum",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                    "fontSize": 16,
                    "fontWeight": "bolder",
                    "fontStyle": "italic"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "eirCob1QJg",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pvR1M_GOZ6": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "点位",
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "eirCob1QJg",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "x7VB1NoXX4": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "DeviceNum",
                    "type": "global"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                    "fontSize": 16,
                    "fontWeight": "bolder",
                    "fontStyle": "italic"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "p_lPaNkepc",
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
}