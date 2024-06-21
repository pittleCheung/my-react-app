import dayjs from 'dayjs';

/**
 * 能耗
 */
export default (source, links, global, type) => {
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
                    "height": "100vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                    "background": "linear-gradient(rgba(16, 18, 32, 1), rgba(16, 18, 32, 1))",
                    "borderRadius": 0,
                    "backgroundList": [
                        {
                            "id": "eKkhZRY8yy",
                            "type": "color",
                            "key": "eKkhZRY8yy",
                            "value": "rgba(16, 18, 32, 1)",
                            "disabled": false
                        }
                    ],
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "heightUnit": "vh",
                    "minHeight": '100vh'
                },
                "projId": global.ProjectId,
                "global": {
                    "ProjectName": global.ProjectName,
                    "ProjectId": global.ProjectId,
                },
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "3GQM1xL3jA",
                "--H2x2MscR"
            ],
            "linkedNodes": {}
        },
        "--H2x2MscR": {
            "type": {
                "resolvedName": "Tabs"
            },
            "isCanvas": true,
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
                        "label": "能耗分项",
                        "key": "1",
                        "children": "内容1",
                        "name": "能耗分项",
                        "title": "能耗分项"
                    },
                    {
                        "id": "2",
                        "label": "能耗指标",
                        "key": "2",
                        "children": "内容2",
                        "name": "能耗指标",
                        "title": "能耗指标"
                    }
                ]
            },
            "displayName": "Tabs",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "PjDpXr1X0O",
                "container-2": "xQ1iQpcN9O"
            }
        },
        "PjDpXr1X0O": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 4
                },
                "children": "内容1"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "--H2x2MscR",
            "hidden": false,
            "nodes": [
                "QK9lkpEH3-",
                "61NvSwUPP4",
                "QufelVxkM1"
            ],
            "linkedNodes": {}
        },
        "xQ1iQpcN9O": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "display": "",
                    "flexDirection": "",
                    "rowGap": "",
                    "columnGap": "",
                    "key": "topRight",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": ""
                },
                "children": "内容2"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "--H2x2MscR",
            "hidden": false,
            "nodes": [
                "Vd5qjG7Ztq",
                "z5zwY2XaHc"
            ],
            "linkedNodes": {}
        },
        "QufelVxkM1": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 3,
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
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "pySOgJtjn4",
                            "type": "color",
                            "key": "pySOgJtjn4",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "PjDpXr1X0O",
            "hidden": false,
            "nodes": [
                "odWBz2l8zw"
            ],
            "linkedNodes": {}
        },
        "61NvSwUPP4": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 18,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "80vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "pkT69nYrEW",
                            "type": "color",
                            "key": "pkT69nYrEW",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "vh"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "PjDpXr1X0O",
            "hidden": false,
            "nodes": [
                "A_jl1r1fv6",

            ],
            "linkedNodes": {}
        },
        "A_jl1r1fv6": {
            "type": {
                "resolvedName": "SegmentedTabs"
            },
            "isCanvas": true,
            "props": {
                "displayName": "SegmentedTabs",
                "position": "right",
                "segmented": {
                    "value": "1",
                    "options": [
                        {
                            "id": "PJPA1lPAuO",
                            "label": "",
                            "value": "1",
                            "disabled": false,
                            "icon": "LineChartOutlined",
                            "name": "",
                            "title": ""
                        },
                        {
                            "id": "LQi_5f0Yv8",
                            "label": "",
                            "value": "2",
                            "disabled": false,
                            "icon": "TableOutlined"
                        }
                    ]
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
                    "margin": 0
                },
                "isTitle": true
            },
            "displayName": "SegmentedTabs",
            "custom": {},
            "parent": "61NvSwUPP4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "c6GnwLljc2",
                "container-2": "8VL8eD17N0",
                "title": "AfwOPR7VAi"
            }
        },
        "c6GnwLljc2": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": []
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "A_jl1r1fv6",
            "hidden": false,
            "nodes": [
                "GePZT1PvVz"
            ],
            "linkedNodes": {}
        },
        "8VL8eD17N0": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": []
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "A_jl1r1fv6",
            "hidden": false,
            "nodes": [
                "3ZupCvWlw7"
            ],
            "linkedNodes": {}
        },
        "AfwOPR7VAi": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(41, 86, 192, 1)",
                    "borderSide": "side",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 3,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 10,
                    "paddingBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "A_jl1r1fv6",
            "hidden": false,
            "nodes": [
                "-529QXSuCt"
            ],
            "linkedNodes": {}
        },
        "-529QXSuCt": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "查询能耗",
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
            "parent": "AfwOPR7VAi",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "QK9lkpEH3-": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 3,
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
                    "background": "linear-gradient(rgba(34, 38, 60, 1), rgba(34, 38, 60, 1))",
                    "backgroundList": [
                        {
                            "id": "d2wq_kiOuC",
                            "type": "color",
                            "key": "d2wq_kiOuC",
                            "value": "rgba(34, 38, 60, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "PjDpXr1X0O",
            "hidden": false,
            "nodes": [
                "uO_cJBlElJ",
                "fSAOXWitLz"
            ],
            "linkedNodes": {}
        },
        "YQH06lBltD": {
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
                // "defaultValue": dayjs(),
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
                                "GePZT1PvVz",
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
                "style": {
                    "background": null,
                    "backgroundList": [],
                    "widthType": "fixed",
                    "width": "150px",
                    "widthUnit": "px"
                },
                "range": false
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "TRsjLIAPVA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {},
            
        },
        "YQH06lBltc": {
            "type": {
                "resolvedName": "DatePicker"
            },
            "isCanvas": false,
            "props": {
                "displayName": "DatePicker",
                "placeholder": "",
                "picker": "date",
                "size": "default",
                // "defaultValue": dayjs('2000-01-01'),
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
                                "GePZT1PvVz",
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
                "style": {
                    "background": null,
                    "backgroundList": [],
                    "widthType": "fixed",
                    "width": "150px",
                    "widthUnit": "px"
                },
                "range": false
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "TRsjLIAPVb",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {},
        },
        "mtnVfhoABq": {
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
            "parent": "dz27mrIgXB",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GePZT1PvVz": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": '',
                "aggregate": "",
                "timeType": "",
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
                    "series":[
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
                    ],
                    "title": {
                        "show": false
                    }
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "70vh",
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
            "parent": "c6GnwLljc2",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "uO_cJBlElJ": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(48, 84, 188, 1)",
                    "borderSide": "side",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 2,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 4,
                    "paddingBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "QK9lkpEH3-",
            "hidden": false,
            "nodes": [
                "U3PlNKmbAU"
            ],
            "linkedNodes": {}
        },
        "U3PlNKmbAU": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "分项选择",
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
            "parent": "uO_cJBlElJ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fSAOXWitLz": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "marginSide": "side",
                    "margin": 0,
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
            "parent": "QK9lkpEH3-",
            "hidden": false,
            "nodes": [
                "Xs2pFseOVx"
            ],
            "linkedNodes": {}
        },
        "Xs2pFseOVx": {
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
                "type": "SUBENTRY",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "70vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                },
                "displayName": "Tree",
                "events": {
                    "onCheck": {
                        "action": "linkTo",
                        "link": {
                            "component": [
                                "GePZT1PvVz",
                                "3ZupCvWlw7"
                            ],
                            "props": "tags"
                        }
                    }
                }
            },
            "displayName": "Tree",
            "custom": {},
            "parent": "fSAOXWitLz",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "z5zwY2XaHc": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 4,
                    "flexWrap": "nowrap",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "xQ1iQpcN9O",
            "hidden": false,
            "nodes": [
                "t8vsHBDIxb",
                "B2-jq_HOH_",
                "BMrG_4jvtS"
            ],
            "linkedNodes": {}
        },
        "BMrG_4jvtS": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "4XnXw2XkyJ",
                            "type": "color",
                            "key": "4XnXw2XkyJ",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "z5zwY2XaHc",
            "hidden": false,
            "nodes": [
                "9_CjmlTzcF",
                "VKdwtFtNGd"
            ],
            "linkedNodes": {}
        },
        "B2-jq_HOH_": {
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
                    "paddingSide": "side",
                    "padding": 8,
                    "marginSide": "side",
                    "margin": 0,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "75hDBkAAg1",
                            "type": "color",
                            "key": "75hDBkAAg1",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "",
                    "flexDirection": "",
                    "key": "topLeft",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": "",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "z5zwY2XaHc",
            "hidden": false,
            "nodes": [
                "RmR_5i18J7",
                "sRATK-Rncm"
            ],
            "linkedNodes": {}
        },
        "t8vsHBDIxb": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "mWZtMhXpDT",
                            "type": "color",
                            "key": "mWZtMhXpDT",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "",
                    "borderColor": "transparent",
                    "borderSide": "",
                    "display": "",
                    "flexDirection": "",
                    "key": "topLeft",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": ""
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "z5zwY2XaHc",
            "hidden": false,
            "nodes": [
                "fEdBVyRKwA",
                "NflcY3IgzK"
            ],
            "linkedNodes": {}
        },
        "fEdBVyRKwA": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": 35,
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
                    "widthUnit": "%",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topRight",
                    "justifyContent": "flex-end",
                    "alignItems": "flex-start"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "t8vsHBDIxb",
            "hidden": false,
            "nodes": [
                "eLUG_zEFVV",
                "tdKxHlM0Vl"
            ],
            "linkedNodes": {}
        },
        "eLUG_zEFVV": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "加载压力" : "系统总能耗",
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
            "parent": "fEdBVyRKwA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "NflcY3IgzK": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "t8vsHBDIxb",
            "hidden": false,
            "nodes": [
                "wiWA5P8_TX"
            ],
            "linkedNodes": {}
        },
        "wiWA5P8_TX": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "R5P9pj8D3H",
                            "label": type == 'CAS' ? source?.PR_LOAD?.NAME : source?.ELEC_HVAC?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": type == 'CAS' ? source?.PR_LOAD?.NAME : source?.ELEC_HVAC?.NAME
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
            "displayName": "Line",
            "custom": {},
            "parent": "NflcY3IgzK",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "RmR_5i18J7": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "B2-jq_HOH_",
            "hidden": false,
            "nodes": [
                "SCQ8adzTBS",
                "CzsBQo2Stm"
            ],
            "linkedNodes": {}
        },
        "SCQ8adzTBS": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "卸载压力" :"冷机出水温度",
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
            "parent": "RmR_5i18J7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "sRATK-Rncm": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "B2-jq_HOH_",
            "hidden": false,
            "nodes": [
                "6olka0Jdty"
            ],
            "linkedNodes": {}
        },
        "6olka0Jdty": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "RHwYOdAsdF",
                            "label": source?.[type ? 'PR_UNLOAD' : 'T_CHW_S']?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.[type ? 'PR_UNLOAD' : 'T_CHW_S']?.NAME
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
            "displayName": "Line",
            "custom": {},
            "parent": "sRATK-Rncm",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "9_CjmlTzcF": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "BMrG_4jvtS",
            "hidden": false,
            "nodes": [
                "H879TUuMFK",
                "4S6bHgtuep"
            ],
            "linkedNodes": {}
        },
        "H879TUuMFK": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "排气压力" : "冷却回水温度",
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
            "parent": "9_CjmlTzcF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "VKdwtFtNGd": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "BMrG_4jvtS",
            "hidden": false,
            "nodes": [
                "daBaxrXtx8"
            ],
            "linkedNodes": {}
        },
        "daBaxrXtx8": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "UiBKiST1y3",
                            "label": source?.[type ? 'PR_DISCHARGE' : 'T_CW_R']?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.[type ? 'PR_DISCHARGE' : 'T_CW_R']?.NAME
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
            "displayName": "Line",
            "custom": {},
            "parent": "VKdwtFtNGd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Vd5qjG7Ztq": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "marginSide": "side",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 4,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 20
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "xQ1iQpcN9O",
            "hidden": false,
            "nodes": [
                "DIQvXT3IXn",
                "f4UNXaihDx",
                "Dn2P-hWS1a"
            ],
            "linkedNodes": {}
        },
        "DIQvXT3IXn": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "mPpSvI89Pw",
                            "type": "color",
                            "key": "mPpSvI89Pw",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Vd5qjG7Ztq",
            "hidden": false,
            "nodes": [
                "sWTmKFNsJT",
                "gCAM82N8zQ"
            ],
            "linkedNodes": {}
        },
        "f4UNXaihDx": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "_L1oP77nKE",
                            "type": "color",
                            "key": "_L1oP77nKE",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Vd5qjG7Ztq",
            "hidden": false,
            "nodes": [
                "0ZV5ahuzb0",
                "H8829OnrE9"
            ],
            "linkedNodes": {}
        },
        "Dn2P-hWS1a": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(23, 26, 44, 1), rgba(23, 26, 44, 1))",
                    "backgroundList": [
                        {
                            "id": "FHZvWXoNFB",
                            "type": "color",
                            "key": "FHZvWXoNFB",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Vd5qjG7Ztq",
            "hidden": false,
            "nodes": [
                "7WqSBYmd1X",
                "_hQzubLJt6"
            ],
            "linkedNodes": {}
        },
        "sWTmKFNsJT": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "DIQvXT3IXn",
            "hidden": false,
            "nodes": [
                "6LLjsgCKV9",
                "1cN797grwb"
            ],
            "linkedNodes": {}
        },
        "6LLjsgCKV9": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "系统总功率" :"系统COP",
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
            "parent": "sWTmKFNsJT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "gCAM82N8zQ": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "DIQvXT3IXn",
            "hidden": false,
            "nodes": [
                "YzAi7ZD9W6"
            ],
            "linkedNodes": {}
        },
        "YzAi7ZD9W6": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "FehDVpavZK",
                            "label": type ? source?.P_CAS?.NAME : source?.COP_HVAC?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.COP_HVAC?.NAME
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "gCAM82N8zQ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "0ZV5ahuzb0": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "f4UNXaihDx",
            "hidden": false,
            "nodes": [
                "u0BWfFnUCf",
                "l63ymrdeIu"
            ],
            "linkedNodes": {}
        },
        "u0BWfFnUCf": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type? "系统气电比" : "系统总功率",
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
            "parent": "0ZV5ahuzb0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "H8829OnrE9": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "f4UNXaihDx",
            "hidden": false,
            "nodes": [
                "b3ApJq_4qk"
            ],
            "linkedNodes": {}
        },
        "b3ApJq_4qk": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "6Q_0e5XKui",
                            "label": type === 'CAS' ? source?.R_AIR_COMP?.NAME : source?.P_HVAC?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": type === 'CAS' ? source?.R_AIR_COMP?.NAME : source?.P_HVAC?.NAME
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
            "displayName": "Line",
            "custom": {},
            "parent": "H8829OnrE9",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "7WqSBYmd1X": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "Dn2P-hWS1a",
            "hidden": false,
            "nodes": [
                "7frVmBaAi9",
                "1ukyhHuyik"
            ],
            "linkedNodes": {}
        },
        "7frVmBaAi9": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type? "供需平衡比" : "系统制冷量",
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
            "parent": "7WqSBYmd1X",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "_hQzubLJt6": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "Dn2P-hWS1a",
            "hidden": false,
            "nodes": [
                "Z-X0pDzlxQ"
            ],
            "linkedNodes": {}
        },
        "Z-X0pDzlxQ": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "PT4ctFc21M",
                            "label": source?.[type? 'AIR_DU_RATIO' : 'LOAD']?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.LOAD?.NAME
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
            "displayName": "Line",
            "custom": {},
            "parent": "_hQzubLJt6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "zj9SYSRyAq": {
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
                                "GePZT1PvVz",
                                "3ZupCvWlw7"
                            ],
                            "props": "aggregate"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
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
            "parent": "tx3HyzA5Hv",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Bb5C5MPmlz": {
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
                "defaultValue": '5 seconds',
                "options": [
                    {
                        "id": "0T_B04fYhr",
                        "label": "5秒",
                        "value": "5 seconds",
                        "disabled": false
                    },
                    {
                        "id": "0T_B04fY3r",
                        "label": "1分钟",
                        "value": "1 minute",
                        "disabled": false
                    },
                    {
                        "id": "0T_B04jY4r",
                        "label": "5分钟",
                        "value": "5 minutes",
                        "disabled": false
                    },
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
                                "GePZT1PvVz",
                                "3ZupCvWlw7"
                            ],
                            "props": "timeType"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
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
            "parent": "SO5QpE-5dp",
            "hidden": false,
            "nodes": [],
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
                            "id": "FLI-s6sCA9",
                            "type": "color",
                            "key": "FLI-s6sCA9",
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
                "value": "3",
                "selectedKeys": "3",
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
                "displayName": "Menu"
            },
            "displayName": "Menu",
            "custom": {},
            "parent": "3GQM1xL3jA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "odWBz2l8zw": {
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
                "layout": "vertical",
                "size": "middle",
                "labelCol": {},
                "wrapperCol": {},
                "events": {
                    "onFinish": {
                        "action": "formLinkage",
                        "link": {
                            "component": [
                                "GePZT1PvVz",
                                "3ZupCvWlw7"
                            ]
                        }
                    }
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
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Form",
            "custom": {},
            "parent": "QufelVxkM1",
            "hidden": false,
            "nodes": [
                "TRsjLIAPVA",
                "TRsjLIAPVb",
                "tx3HyzA5Hv",
                "SO5QpE-5dp",
                "dz27mrIgXB",
            ],
            "linkedNodes": {}
        },
        "TRsjLIAPVA": {
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
            "displayName": "FormItem",
            "custom": {},
            "parent": "odWBz2l8zw",
            "hidden": false,
            "nodes": [
                "YQH06lBltD"
            ],
            "linkedNodes": {}
        },
        "TRsjLIAPVb": {
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
            "displayName": "FormItem",
            "custom": {},
            "parent": "odWBz2l8zw",
            "hidden": false,
            "nodes": [
                "YQH06lBltc"
            ],
            "linkedNodes": {}
        },
        "tx3HyzA5Hv": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "aggregate",
                "label": "聚合方式",
                "wrapperCol": {},
                "rules": [],
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
            "displayName": "FormItem",
            "custom": {},
            "parent": "odWBz2l8zw",
            "hidden": false,
            "nodes": [
                "zj9SYSRyAq"
            ],
            "linkedNodes": {}
        },
        "SO5QpE-5dp": {
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
            "displayName": "FormItem",
            "custom": {},
            "parent": "odWBz2l8zw",
            "hidden": false,
            "nodes": [
                "Bb5C5MPmlz"
            ],
            "linkedNodes": {}
        },
        "dz27mrIgXB": {
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "odWBz2l8zw",
            "hidden": false,
            "nodes": [
                "mtnVfhoABq"
            ],
            "linkedNodes": {}
        },
        "1cN797grwb": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "YzAi7ZD9W6",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "sWTmKFNsJT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "l63ymrdeIu": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "b3ApJq_4qk",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "0ZV5ahuzb0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1ukyhHuyik": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "Z-X0pDzlxQ",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "7WqSBYmd1X",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "tdKxHlM0Vl": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "wiWA5P8_TX",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "fEdBVyRKwA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "CzsBQo2Stm": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "6olka0Jdty",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "RmR_5i18J7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "4S6bHgtuep": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "daBaxrXtx8",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "9_CjmlTzcF",
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
            "parent": "8VL8eD17N0",
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