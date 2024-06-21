import { contentstyle, statsuMap, contentpaddingstyle } from '../pageNodeDefault';
/**
 * 自动生成报警页面
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
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "minHeight": "100vh"
                },
                "events": {
                    "onLoad": null
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
                "o8Ij-dnf83"
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
                    "heightType": "fixed",
                    "widthType": "relative",
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
                            "id": "q0j9tFJq0G",
                            "type": "color",
                            "key": "q0j9tFJq0G",
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
                    "heightType": "fit-content",
                    "widthType": "relative",
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
                    "heightType": "fit-content",
                    "widthType": "fixed",
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
                "value": "4",
                "selectedKeys": "4",
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
                            "link":links[2]
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
                    "heightType": "fit-content",
                    "widthType": "fixed",
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
                    "background": "transparent",
                    "borderBottomWidth": 0,
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
        "o8Ij-dnf83": {
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
                        "label": "实时报警",
                        "key": "1",
                        "children": "内容1",
                        "name": "实时报警",
                        "title": "实时报警"
                    },
                    {
                        "id": "2",
                        "label": "历史报警",
                        "key": "2",
                        "children": "内容2",
                        "name": "历史报警",
                        "title": "历史报警"
                    }
                ]
            },
            "displayName": "Tabs",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "0lmlk0dwOg",
                "container-2": "M8tyVBAl6h"
            }
        },
        "0lmlk0dwOg": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                },
                "children": "内容1"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "o8Ij-dnf83",
            "hidden": false,
            "nodes": [
                "eN23TSa6Zk"
            ],
            "linkedNodes": {}
        },
        "M8tyVBAl6h": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                },
                "children": "内容2"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "o8Ij-dnf83",
            "hidden": false,
            "nodes": [
                "lnr0UFNiqx"
            ],
            "linkedNodes": {}
        },
        // "wqLS6yzteL": {
        //     "type": {
        //         "resolvedName": "Columns"
        //     },
        //     "isCanvas": true,
        //     "props": {
        //         "columns": 2,
        //         "align": "top",
        //         "gutter": 12,
        //         "justify": "start",
        //         "wrap": false,
        //         "style": {
        //             "position": "relative",
        //             "width": "100%",
        //             "height": "auto",
        //             "heightType": "fit-content",
        //             "widthType": "relative",
        //             "fontFamily": "PingFang SC",
        //             "fontSize": 14,
        //             "fontWeight": 400,
        //             "lineHeight": 1.5,
        //             "textAlign": "left",
        //             "spacing": 0,
        //             "paddingSide": "all",
        //             "padding": 8,
        //             "marginSide": "all",
        //             "margin": 0,
        //             "display": "flex",
        //             "flexDirection": "row",
        //             "columnGap": 4
        //         },
        //         "displayName": "Columns"
        //     },
        //     "displayName": "Columns",
        //     "custom": {},
        //     "parent": "0lmlk0dwOg",
        //     "hidden": false,
        //     "nodes": [
        //         "eN23TSa6Zk",
        //         // "kQGfSOf4wp"
        //     ],
        //     "linkedNodes": {}
        // },
        "eN23TSa6Zk": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "80vh",
                    "heightType": "viewport",
                    "widthType": "relative",
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
                            "id": "jGKcciltY3",
                            "type": "color",
                            "key": "jGKcciltY3",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "vh"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "0lmlk0dwOg",
            "hidden": false,
            "nodes": [
                "gk-fUoUOzT"
            ],
            "linkedNodes": {}
        },
        // "kQGfSOf4wp": {
        //     "type": {
        //         "resolvedName": "Col"
        //     },
        //     "isCanvas": true,
        //     "props": {
        //         "type": "span",
        //         "span": 3,
        //         "flex": "",
        //         "style": {
        //             "position": "relative",
        //             "width": "100%",
        //             "height": "80vh",
        //             "heightType": "viewport",
        //             "widthType": "relative",
        //             "fontFamily": "PingFang SC",
        //             "fontSize": 14,
        //             "fontWeight": 400,
        //             "lineHeight": 1.5,
        //             "textAlign": "left",
        //             "spacing": 0,
        //             "paddingSide": "all",
        //             "padding": 8,
        //             "marginSide": "all",
        //             "margin": 0,
        //             "background": "linear-gradient(rgba(35, 38, 59, 1), rgba(35, 38, 59, 1))",
        //             "backgroundList": [
        //                 {
        //                     "id": "LEDmV67cke",
        //                     "type": "color",
        //                     "key": "LEDmV67cke",
        //                     "value": "rgba(35, 38, 59, 1)",
        //                     "disabled": false
        //                 }
        //             ],
        //             "display": "flex",
        //             "flexDirection": "column",
        //             "rowGap": 20,
        //             "columnGap": 0,
        //             "heightUnit": "vh"
        //         },
        //         "id": "col-1"
        //     },
        //     "displayName": "Col",
        //     "custom": {},
        //     "parent": "wqLS6yzteL",
        //     "hidden": false,
        //     "nodes": [],
        //     "linkedNodes": {}
        // },
        "gk-fUoUOzT": {
            "type": {
                "resolvedName": "Table"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Table",
                "size": "middle",
                "loading": false,
                "bordered": false,
                "showHeader": true,
                "source": "alarm",
                "columns": [
                    {
                        "id": "y6905yavcu",
                        "label": "F_TYPE",
                        "title": "F_TYPE",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "fnUAjBDF9s",
                        "label": "F_NAME",
                        "title": "F_NAME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "wmO6rSsZfr",
                        "label": "F_FIRST_TIME",
                        "title": "F_FIRST_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "FWF6Tl7OOe",
                        "label": "F_LAST_TIME",
                        "title": "F_LAST_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "B4jIRQwJni",
                        "label": "F_NOTIFY_TIME",
                        "title": "F_NOTIFY_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "sJxtyve3ON",
                        "title": "F_DESC",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left",
                        "label": "F_DESC"
                    }
                ],
                "alarm": {
                    "startDate": "",
                    "endDate": "",
                    "subSystemId": "",
                    "level": "",
                    "date": "",
                    "key": "",
                    "type": "",
                    "needData": true
                },
                "extra": {
                    "Count": 1460,
                    "PrevCount": 1460,
                    "YOY": 0,
                    "AvgResponseSecond": 0,
                    "LevelMap": {
                        "LEVEL_HIGH": 0,
                        "LEVEL_MIDDLE": 964,
                        "LEVEL_LOW": 496
                    },
                    "FaultSubSystemMap": {
                        "BaaUrCRc6JhbIIOplNOq1s": {
                            "Name": "暖通空调1",
                            "Count": 512,
                            "HandledCount": 0
                        }
                    },
                    "total": 1460
                },
                "scroll": {
                    "x": 1000,
                    "y": 600
                },
                "pagination": {
                    "pageSize": 20,
                    "page": 0
                },
                "isPagination": true,
                "isScroll": true
            },
            "displayName": "Table",
            "custom": {},
            "parent": "eN23TSa6Zk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lnr0UFNiqx": {
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
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "relative",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "flex-start",
                    "columnGap": 4
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "M8tyVBAl6h",
            "hidden": false,
            "nodes": [
                "B4hpNh6TkR",
                "pNd1yib3kT"
            ],
            "linkedNodes": {}
        },
        "B4hpNh6TkR": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 21,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "80vh",
                    "heightType": "viewport",
                    "widthType": "relative",
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
                            "id": "WaGarL3QzW",
                            "type": "color",
                            "key": "WaGarL3QzW",
                            "value": "rgba(23, 26, 44, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "vh"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "lnr0UFNiqx",
            "hidden": false,
            "nodes": [
                "4oTGQgI3xA"
            ],
            "linkedNodes": {}
        },
        "pNd1yib3kT": {
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
                    "height": "80vh",
                    "heightType": "viewport",
                    "widthType": "relative",
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
                    "background": "linear-gradient(rgba(35, 38, 59, 1), rgba(35, 38, 59, 1))",
                    "backgroundList": [
                        {
                            "id": "c_nNcx_hCg",
                            "type": "color",
                            "key": "c_nNcx_hCg",
                            "value": "rgba(35, 38, 59, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "vh"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "lnr0UFNiqx",
            "hidden": false,
            "nodes": [
                "VAaoo4Hrm7"
            ],
            "linkedNodes": {}
        },
        "4oTGQgI3xA": {
            "type": {
                "resolvedName": "Table"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Table",
                "size": "middle",
                "loading": false,
                "bordered": false,
                "showHeader": true,
                "source": "alarm",
                "columns": [
                    {
                        "id": "Zzh-NWXyuU",
                        "label": "F_TYPE",
                        "title": "F_TYPE",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "kd_gXuyVk-",
                        "label": "F_LEVEL",
                        "title": "F_LEVEL",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "fnUAjBDF9p",
                        "label": "F_NAME",
                        "title": "F_NAME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "h7UiEZv97o",
                        "label": "F_FIRST_TIME",
                        "title": "F_FIRST_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "fgy9rYlTMa",
                        "label": "F_LAST_TIME",
                        "title": "F_LAST_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "p1_4inHjKU",
                        "label": "F_NOTIFY_TIME",
                        "title": "F_NOTIFY_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "dcF0hqktyd",
                        "title": "F_NOTIFY_METHOD",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left",
                        "label": "F_NOTIFY_METHOD"
                    }
                ],
                "alarm": {
                    "startDate": "",
                    "endDate": "",
                    "subSystemId": "",
                    "level": "",
                    "date": "",
                    "key": "",
                    "type": "",
                    "needData": true
                },
                "extra": {
                    "Count": 1460,
                    "PrevCount": 1460,
                    "YOY": 0,
                    "AvgResponseSecond": 0,
                    "LevelMap": {
                        "LEVEL_MIDDLE": 964,
                        "LEVEL_LOW": 496,
                        "LEVEL_HIGH": 0
                    },
                    "FaultSubSystemMap": {
                        "BaaUrCRc6JhbIIOplNOq1s": {
                            "Name": "暖通空调1",
                            "Count": 512,
                            "HandledCount": 0
                        }
                    },
                    "total": 1460
                },
                "scroll": {
                    "x": 1000,
                    "y": 600
                },
                "pagination": {
                    "pageSize": 20,
                    "page": 0
                },
                "isPagination": true,
                "isScroll": true
            },
            "displayName": "Table",
            "custom": {},
            "parent": "B4hpNh6TkR",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "VAaoo4Hrm7": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "pNd1yib3kT",
            "hidden": false,
            "nodes": [
                "GE-qN4BHDS",
                "yCj6Z0CfRv"
            ],
            "linkedNodes": {}
        },
        "R9VAvR91G5": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警查询",
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
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "GE-qN4BHDS",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "a4iz-fG-uj": {
            "type": {
                "resolvedName": "Input"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Input",
                "size": "middle",
                "type": "text",
                "placeholder": "关键字",
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "showCount": false,
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                },
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "4oTGQgI3xA",
                            "props": "keyword"
                        }
                    }
                }
            },
            "displayName": "Input",
            "custom": {},
            "parent": "aZmeAFNPBX",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "TxL_DMsg6f": {
            "type": {
                "resolvedName": "DatePicker"
            },
            "isCanvas": false,
            "props": {
                "displayName": "DatePicker",
                "placeholder": "选择开始时间",
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
                        "action": "linkTo",
                        "link": {
                            "component": "4oTGQgI3xA",
                            "props": "begin"
                        }
                    }
                },
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
                    "height": "32px",
                    "widthType": "fixed",
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
                    "widthUnit": "px",
                    "paddingLeft": "8px",
                    "paddingRight": "8px"
                }
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "Eqs18QNPkJ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "TxL_DMsgs6f": {
            "type": {
                "resolvedName": "DatePicker"
            },
            "isCanvas": false,
            "props": {
                "displayName": "DatePicker",
                "placeholder": "选择结束时间",
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
                        "action": "linkTo",
                        "link": {
                            "component": "4oTGQgI3xA",
                            "props": "end"
                        }
                    }
                },
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
                    "height": "32px",
                    "widthType": "fixed",
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
                    "widthUnit": "px",
                    "paddingLeft": "8px",
                    "paddingRight": "8px"
                }
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "Eqs18QNPpJ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2CogS9fH5c": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "请选择报警类型",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": true,
                "bordered": true,
                "defaultValue": 'ALARM_OTHER',
                "options": [
                    {
                        "value": "ALARM_COMM",
                        "label": "通讯故障"
                    },
                    {
                        "value": "ALARM_DEVICE",
                        "label": "设备故障"
                    },
                    {
                        "value": "ALARM_LIMIT",
                        "label": "参数超限"
                    },
                    {
                        "value": "ALARM_PARAM",
                        "label": "参数校核"
                    },
                    {
                        "value": "ALARM_RUNNING",
                        "label": "运行报警"
                    },
                    {
                        "value": "ALARM_ENERGY",
                        "label": "能耗报警"
                    },
                    {
                        "value": "ALARM_COP",
                        "label": "能效报警"
                    },
                    {
                        "value": "ALARM_OTHER",
                        "label": "其它"
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "4oTGQgI3xA",
                            "props": "alarmType"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "fixed",
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
            "parent": "XWZ5s-4J-0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "z0w3uxByMO": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "请选择报警等级",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": true,
                "bordered": true,
                "defaultValue": 'LEVEL_HIGH',
                "options": [
                    {
                        "value": "LEVEL_HIGH",
                        "label": "紧急"
                    },
                    {
                        "value": "LEVEL_MIDDLE",
                        "label": "警告"
                    },
                    {
                        "value": "LEVEL_LOW",
                        "label": "普通"
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "4oTGQgI3xA",
                            "props": "level"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "fixed",
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
            "parent": "b9YiFWA2ic",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GE-qN4BHDS": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "relative",
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
                    "marginBottom": 10,
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
            "parent": "VAaoo4Hrm7",
            "hidden": false,
            "nodes": [
                "R9VAvR91G5"
            ],
            "linkedNodes": {}
        },
        "yKhXSskbSh": {
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
                    "heightType": "fit-content",
                    "widthType": "relative",
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
            "parent": "AYTBj3ZJw5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "yCj6Z0CfRv": {
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
                "wrapperCol": {},
                "events": {
                    "onFinish": {
                        "action": "formLinkage",
                        "link": {
                            "component": [
                                "4oTGQgI3xA"
                            ],
                            "props": "begin"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    "heightType": "relative",
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
                    "heightUnit": "%",
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
            "parent": "VAaoo4Hrm7",
            "hidden": false,
            "nodes": [
                "aZmeAFNPBX",
                "Eqs18QNPkJ",
                "Eqs18QNPpJ",
                "XWZ5s-4J-0",
                "b9YiFWA2ic",
                "AYTBj3ZJw5"
            ],
            "linkedNodes": {}
        },
        "aZmeAFNPBX": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "keyword",
                "label": "",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "yCj6Z0CfRv",
            "hidden": false,
            "nodes": [
                "a4iz-fG-uj"
            ],
            "linkedNodes": {}
        },
        "AYTBj3ZJw5": {
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
                    "heightType": "fit-content",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "yCj6Z0CfRv",
            "hidden": false,
            "nodes": [
                "yKhXSskbSh"
            ],
            "linkedNodes": {}
        },
        "b9YiFWA2ic": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "level",
                "label": "",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "yCj6Z0CfRv",
            "hidden": false,
            "nodes": [
                "z0w3uxByMO"
            ],
            "linkedNodes": {}
        },
        "Eqs18QNPkJ": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "begin",
                "label": "",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "yCj6Z0CfRv",
            "hidden": false,
            "nodes": [
                "TxL_DMsg6f"
            ],
            "linkedNodes": {}
        },
        "Eqs18QNPpJ": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "end",
                "label": "",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "yCj6Z0CfRv",
            "hidden": false,
            "nodes": [
                "TxL_DMsgs6f"
            ],
            "linkedNodes": {}
        },
        "XWZ5s-4J-0": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "alarmType",
                "label": "",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "yCj6Z0CfRv",
            "hidden": false,
            "nodes": [
                "2CogS9fH5c"
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
