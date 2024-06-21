import {contentstyle, statsuMap, contentpaddingstyle} from '../pageNodeDefault';
/**
 * 报表
 */

export default (source, links, global) => {
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
                    "margin": 0,
                    "backgroundList": [
                        {
                            "id": "lKTSbkwQeN",
                            "type": "color",
                            "key": "lKTSbkwQeN",
                            "value": "rgba(16, 18, 32, 1)",
                            "disabled": false
                        }
                    ],
                    "borderRadius": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "background": "linear-gradient(rgba(16, 18, 32, 1), rgba(16, 18, 32, 1))",
                    "minHeight": '100vh'
                },
                "projId": global.ProjectId,
                "global": {
                    "ProjectId": global.ProjectId,
                    "ProjectName": global.ProjectName
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "3GQM1xL3jA",
                "Fb2DFwvVuH"
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
                            "id": "lKTSbkwQeN",
                            "type": "color",
                            "key": "lKTSbkwQeN",
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
                    "heightUnit": "px",
                    "color": "rgba(25, 28, 44, 1)"
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
                    "width": "300px",
                    "widthType": "fixed",
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
                "6sMAEekVGW"
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
                "value": "5",
                "selectedKeys": "5",
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
                    "lineHeight": "46px",
                    "width": "300px",
                    "widthType": "fixed",
                    "borderBottomWidth": 0,
                    "background": "transparent",
                    "backgroundList": [],
                    "widthUnit": "px"
                },
                "displayName": "Menu"
            },
            "displayName": "Menu",
            "custom": {},
            "parent": "3GQM1xL3jA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Fb2DFwvVuH": {
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
                    "width": "auto",
                    "height": "100%",
                    "widthType": "fit-content",
                    "heightType": "relative",
                    "paddingSide": "all",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 8,
                    "background": "linear-gradient(rgba(16, 18, 32, 1), rgba(16, 18, 32, 1))",
                    "backgroundList": [
                        {
                            "id": "oPlYcbsgLR",
                            "type": "color",
                            "key": "oPlYcbsgLR",
                            "value": "rgba(16, 18, 32, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "flex-start",
                    "columnGap": 10,
                    "heightUnit": "%",
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "FDePaj6gOr",
                "CHQ8xSJm_7"
            ],
            "linkedNodes": {}
        },
        "FDePaj6gOr": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "height": "85vh",
                    "heightType": "viewport",
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "IdG4iWKAOI",
                            "type": "color",
                            "key": "IdG4iWKAOI",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "vh"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Fb2DFwvVuH",
            "hidden": false,
            "nodes": [
                "pzj5uKqSuI",
                "fZa7Ojv67u"
            ],
            "linkedNodes": {}
        },
        "CHQ8xSJm_7": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 18,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "height": "85vh",
                    "heightType": "viewport",
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "Qt_x2_pLQB",
                            "type": "color",
                            "key": "Qt_x2_pLQB",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "vh"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Fb2DFwvVuH",
            "hidden": false,
            "nodes": [
                "n8eQp9Er8L",
            ],
            "linkedNodes": {}
        },
        "pzj5uKqSuI": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "设备指标",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "FDePaj6gOr",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fZa7Ojv67u": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "background": null,
                    "backgroundList": [],
                    "marginTop": 20,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "FDePaj6gOr",
            "hidden": false,
            "nodes": [
                "4dAn851s9H"
            ],
            "linkedNodes": {}
        },
        "4dAn851s9H": {
            "type": {
                "resolvedName": "Tree"
            },
            "isCanvas": false,
            "props": {
                "autoExpandParent": false,
                "checkable": true,
                "defaultExpandAll": false,
                "showLine": false,
                "disabled": false,
                "style": {
                    ...contentstyle,
                    "height": "75vh",
                    "heightType": "viewport",
                },
                "displayName": "Tree",
                "events": {
                    "onCheck": {
                        "action": "linkTo",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "tags"
                        }
                    }
                },
                "type": "DEVICE_TAG"
            },
            "displayName": "Tree",
            "custom": {},
            "parent": "fZa7Ojv67u",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "MoON_GghnY": {
            "type": {
                "resolvedName": "Form"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Form",
                "name": "",
                "colon": true,
                "disabled": false,
                "labelWrap": false,
                "labelAlign": "right",
                "layout": "horizontal",
                "size": "middle",
                "labelCol": {},
                "wrapperCol": {
                    "offset": null
                },
                "events": {
                    "onFinish": {
                        "action": "formLinkage",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ]
                        }
                    }
                },
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "columnGap": 8
                }
            },
            "displayName": "Form",
            "custom": {},
            "parent": "CHQ8xSJm_7",
            "hidden": false,
            "nodes": [
                "a3SFPZo46R",
                "a3SFPZo40R",
                "TX7GTFzHun",
                "RDNSkI9jio",
                "aQWondwmK9"
            ],
            "linkedNodes": {}
        },
        "TX7GTFzHun": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "aggregate",
                "label": "聚合",
                "wrapperCol": {},
                "rules": [],
                "style": contentstyle
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "MoON_GghnY",
            "hidden": false,
            "nodes": [
                "i-sDUgPAGP"
            ],
            "linkedNodes": {}
        },
        "RDNSkI9jio": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "timeType",
                "label": "聚合粒度",
                "wrapperCol": {},
                "rules": [],
                "style": contentstyle
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "MoON_GghnY",
            "hidden": false,
            "nodes": [
                "mIOWLuRlNz"
            ],
            "linkedNodes": {}
        },
        "aQWondwmK9": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "",
                "label": "",
                "wrapperCol": {},
                "rules": [],
                "style": contentstyle
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "MoON_GghnY",
            "hidden": false,
            "nodes": [
                "0KyAAFjlgK"
            ],
            "linkedNodes": {}
        },
        "a3SFPZo46R": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "begin",
                "label": "开始时间",
                "wrapperCol": {},
                "rules": [],
                "style": contentstyle
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "MoON_GghnY",
            "hidden": false,
            "nodes": [
                "hlVX2h4z18"
            ],
            "linkedNodes": {}
        },
        "a3SFPZo40R": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "end",
                "label": "结束时间",
                "wrapperCol": {},
                "rules": [],
                "style": contentstyle
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "MoON_GghnY",
            "hidden": false,
            "nodes": [
                "hlVX2h4z19"
            ],
            "linkedNodes": {}
        },
        "hlVX2h4z18": {
            "type": {
                "resolvedName": "DatePicker"
            },
            "isCanvas": false,
            "props": {
                "displayName": "DatePicker",
                "placeholder": "",
                "picker": "date",
                "size": "default",
                "format": "YYYY-MM-DD",
                "placement": "bottomLeft",
                "showNow": false,
                "showTime": false,
                "showToday": true,
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "begin"
                        }
                    }
                },
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": "begin"
                    }
                },
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "a3SFPZo46R",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {},
        },
        "hlVX2h4z19": {
            "type": {
                "resolvedName": "DatePicker"
            },
            "isCanvas": false,
            "props": {
                "displayName": "DatePicker",
                "placeholder": "",
                "picker": "date",
                "size": "default",
                "format": "YYYY-MM-DD",
                "placement": "bottomLeft",
                "showNow": false,
                "showTime": false,
                "showToday": true,
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "end"
                        }
                    }
                },
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": "end"
                    }
                },
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "a3SFPZo40R",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {},
        },
        "i-sDUgPAGP": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "请选择聚合方式",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": true,
                "bordered": true,
                "defaultValue": 'sum',
                "options": [
                    {
                        "id": "2OMAGByevk",
                        "label": "首",
                        "value": "first",
                        "disabled": false
                    },
                    {
                        "id": "tpY-DxggRc",
                        "label": "尾",
                        "value": "last",
                        "disabled": false
                    },
                    {
                        "id": "jB-jKLRnnq",
                        "label": "平均值",
                        "value": "average",
                        "disabled": false
                    },
                    {
                        "id": "cNZp5JAGZW",
                        "label": "最小值",
                        "value": "minimum",
                        "disabled": false
                    },
                    {
                        "id": "gmBTxxwNCV",
                        "value": "maximum",
                        "label": "最大值",
                        "disabled": false
                    },
                    {
                        "id": "104zwp-y97",
                        "value": "sum",
                        "label": "求和",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "aggregate"
                        }
                    }
                },
                "style": {
                    ...contentstyle,
                    "width": "150px",
                    "widthType": "fixed",
                    "widthUnit": "px"
                },
                "displayName": "Select",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "TX7GTFzHun",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "mIOWLuRlNz": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "请选择聚合粒度",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": true,
                "bordered": true,
                "defaultValue": '1 hour',
                "options": [
                    {
                        "id": "0T_B04fY4r",
                        "label": "时",
                        "value": "1 hour",
                        "disabled": false
                    },
                    {
                        "id": "vuF1qFYDH5",
                        "label": "天",
                        "value": "1 day",
                        "disabled": false
                    },
                    {
                        "id": "nN3loYpjWT",
                        "label": "周",
                        "value": "1 week",
                        "disabled": false
                    },
                    {
                        "id": "cf2K9CAG62",
                        "label": "月",
                        "value": "1 month",
                        "disabled": false
                    },
                    {
                        "id": "zBURoEIgYB",
                        "value": "1 year",
                        "label": "年",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "timeType"
                        }
                    }
                },
                "style": {
                    ...contentstyle,
                    "width": "150px",
                    "widthType": "fixed",
                    "widthUnit": "px"
                },
                "displayName": "Select",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "RDNSkI9jio",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "0KyAAFjlgK": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "查询",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "",
                "htmlType": "submit",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 4,
                    "marginSide": "all",
                    "margin": 0,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "aQWondwmK9",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "nYxFSEucY_": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "day",
                "ranges": Date(),
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
                        ]
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
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": []
                        },
                        {
                            "name": "系列2",
                            "type": "line",
                            "stack": "总量",
                            "data": []
                        },
                        {
                            "name": "系列3",
                            "type": "line",
                            "stack": "总量",
                            "data": []
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "75vh",
                    "heightType": "viewport",
                    "heightUnit": "vh",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "sQJ8PQ8vO7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "3ZupCvWlw7": {
            "type": {
                "resolvedName": "Table"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Table",
                "source": "point",
                "size": "middle",
                "loading": false,
                "bordered": false,
                "showHeader": true,
                "isPagination": true,
                "columns": [],
                "alarm": {
                    "startDate": "",
                    "endDate": "",
                    "subSystemId": "",
                    "level": "",
                    "durationFilter": ""
                },
                "scroll": {
                    "x": 1000,
                    "y": 600
                },
                "pagination": {
                    "pageSize": 20,
                    "page": 0
                },
                "point": {
                    "aggregate": "sum",
                    "timeType": "1 hour",
                    "begin": "",
                    "end": ""
                },
                "isScroll": true
            },
            "displayName": "Table",
            "custom": {},
            "parent": "2nhr8t4JSj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "n8eQp9Er8L": {
            "type": {
                "resolvedName": "SegmentedTabs"
            },
            "isCanvas": true,
            "props": {
                "displayName": "SegmentedTabs",
                "position": "right",
                "isTitle": true,
                "segmented": {
                    "value": "1",
                    "options": [
                        {
                            "id": "C9k9UEiPVi",
                            "label": "",
                            "value": "1",
                            "disabled": false,
                            "icon": "LineChartOutlined"
                        },
                        {
                            "id": "ncAlVjbbw5",
                            "label": "",
                            "value": "2",
                            "disabled": false,
                            "icon": "TableOutlined"
                        }
                    ]
                },
                "style": contentstyle
            },
            "displayName": "SegmentedTabs",
            "custom": {},
            "parent": "CHQ8xSJm_7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "sQJ8PQ8vO7",
                "container-2": "2nhr8t4JSj",
                "title": "jptJTFex--"
            }
        },
        "sQJ8PQ8vO7": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": contentstyle
            },
            "displayName": "Container",
            "custom": {},
            "parent": "n8eQp9Er8L",
            "hidden": false,
            "nodes": [
                "nYxFSEucY_"
            ],
            "linkedNodes": {}
        },
        "2nhr8t4JSj": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": contentstyle
            },
            "displayName": "Container",
            "custom": {},
            "parent": "n8eQp9Er8L",
            "hidden": false,
            "nodes": [
                "3ZupCvWlw7"
            ],
            "linkedNodes": {}
        },
        "jptJTFex--": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": contentstyle
            },
            "displayName": "Container",
            "custom": {},
            "parent": "n8eQp9Er8L",
            "hidden": false,
            "nodes": [
                "MoON_GghnY"
            ],
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
