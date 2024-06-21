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
                "events": {
                    "onLoad": null
                },
                "style": {
                    ...contentstyle,
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
                    ...contentstyle,
                    "height": "68px",
                    "heightType": "fixed",
                    "marginSide": "side",
                    "paddingSide": "side",
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
                    ...contentstyle,
                    "fontSize": 18,
                    "fontWeight": "bolder",
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
                    "background": "transparent",
                    "width": "300px",
                    "borderBottomWidth": 0,
                    "widthType": "fixed",
                    "lineHeight": "46px",
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
                "style": contentstyle,
                "children": "内容1"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "o8Ij-dnf83",
            "hidden": false,
            "nodes": [
                "wqLS6yzteL"
            ],
            "linkedNodes": {}
        },
        "M8tyVBAl6h": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": contentstyle,
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
        "wqLS6yzteL": {
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
                    "columnGap": 4
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "0lmlk0dwOg",
            "hidden": false,
            "nodes": [
                "eN23TSa6Zk",
                "kQGfSOf4wp"
            ],
            "linkedNodes": {}
        },
        "eN23TSa6Zk": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 21,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "height": "80vh",
                    "heightType": "viewport",
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
            "parent": "wqLS6yzteL",
            "hidden": false,
            "nodes": [
                "gk-fUoUOzT"
            ],
            "linkedNodes": {}
        },
        "kQGfSOf4wp": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 3,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "height": "80vh",
                    "heightType": "viewport",
                    "background": "linear-gradient(rgba(35, 38, 59, 1), rgba(35, 38, 59, 1))",
                    "backgroundList": [
                        {
                            "id": "LEDmV67cke",
                            "type": "color",
                            "key": "LEDmV67cke",
                            "value": "rgba(35, 38, 59, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 20,
                    "columnGap": 0,
                    "heightUnit": "vh"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "wqLS6yzteL",
            "hidden": false,
            "nodes": [
                "bB7JadGZNF",
                "czHP9zjn3L",
                "HzHyF2LNnV",
                "cRcBBq6KVg",
                "CsEli8W5dI"
            ],
            "linkedNodes": {}
        },
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
                    "Count": 1490,
                    "PrevCount": 1490,
                    "YOY": 0,
                    "AvgResponseSecond": 0,
                    "LevelMap": {
                        "LEVEL_HIGH": 994,
                        "LEVEL_MIDDLE": 0,
                        "LEVEL_LOW": 496
                    },
                    "FaultSubSystemMap": {
                        "BaaUrCRc6JhbIIOplNOq1s": {
                            "Name": "暖通空调1",
                            "Count": 512,
                            "HandledCount": 0
                        }
                    }
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
                "isScroll": true,
            },
            "displayName": "Table",
            "custom": {},
            "parent": "eN23TSa6Zk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "bB7JadGZNF": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 20,
                    "columnGap": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "kQGfSOf4wp",
            "hidden": false,
            "nodes": [
                "c3n4zCGzo7",
                "vgU1nvXAVM"
            ],
            "linkedNodes": {}
        },
        "vgU1nvXAVM": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "gk-fUoUOzT.extra.Count",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 18,
                    "fontWeight": "bolder",
                    "textAlign": "right"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "bB7JadGZNF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "7l_eADcJzE": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警等级汇总",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "czHP9zjn3L",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "HzHyF2LNnV": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
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
            "parent": "kQGfSOf4wp",
            "hidden": false,
            "nodes": [
                "u-rMPplgmd",
                "NE9iKgr304"
            ],
            "linkedNodes": {}
        },
        "u-rMPplgmd": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "紧急",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "HzHyF2LNnV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "NE9iKgr304": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "gk-fUoUOzT.extra.LevelMap.LEVEL_HIGH",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 16,
                    "fontWeight": "bold",
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "HzHyF2LNnV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "cRcBBq6KVg": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
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
            "parent": "kQGfSOf4wp",
            "hidden": false,
            "nodes": [
                "FoXA1NW5i-",
                "rloLb8RTsj"
            ],
            "linkedNodes": {}
        },
        "CsEli8W5dI": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
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
            "parent": "kQGfSOf4wp",
            "hidden": false,
            "nodes": [
                "-7ZUccL89o",
                "pK0JFiX0h7"
            ],
            "linkedNodes": {}
        },
        "rloLb8RTsj": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "gk-fUoUOzT.extra.LevelMap.LEVEL_MIDDLE",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 16,
                    "fontWeight": "bold",
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "cRcBBq6KVg",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "FoXA1NW5i-": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "警告",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "cRcBBq6KVg",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pK0JFiX0h7": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "gk-fUoUOzT.extra.LevelMap.LEVEL_LOW",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "CsEli8W5dI",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "-7ZUccL89o": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "普通",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "CsEli8W5dI",
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
                    ...contentpaddingstyle,
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
                    ...contentpaddingstyle,
                    "height": "80vh",
                    "heightType": "viewport",
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
                    ...contentpaddingstyle,
                    "height": "80vh",
                    "heightType": "viewport",
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
                "VAaoo4Hrm7",
                "62ss37cOvh",
                "_IFzbvVIEY"
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
                    "Count": 1490,
                    "PrevCount": 1490,
                    "YOY": 0,
                    "AvgResponseSecond": 0,
                    "LevelMap": {
                        "LEVEL_MIDDLE": 994,
                        "LEVEL_LOW": 496,
                        "LEVEL_HIGH": 0
                    },
                    "FaultSubSystemMap": {
                        "BaaUrCRc6JhbIIOplNOq1s": {
                            "Name": "暖通空调1",
                            "Count": 512,
                            "HandledCount": 0
                        }
                    }
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
                    ...contentstyle,
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
        "62ss37cOvh": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "column",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "rowGap": 20,
                    "columnGap": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "pNd1yib3kT",
            "hidden": false,
            "nodes": [
                "qkF_4WPcCt",
                "K8qgPyQL5U"
            ],
            "linkedNodes": {}
        },
        "_IFzbvVIEY": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 10,
                    "columnGap": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "pNd1yib3kT",
            "hidden": false,
            "nodes": [
                "Mw-MF_Bhgp",
                "0ojbHgO-9D",
                "vOp0jI3XF2",
                "qrMTxukUlY"
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
                "status": statsuMap,
                "events": {},
                "style": contentstyle
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
                        "name": "keyword"
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
                "textAlign": "right",
                "spacing": 0,
                "paddingSide": "all",
                "padding": 0,
                "marginSide": "all",
                "margin": 0,
                "background": null,
                "backgroundList": [],
                "widthUnit": "px"
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
                        "name": "begin"
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
                    "paddingLeft": '8px',
                    "paddingRight": '8px'
                },
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
                        "name": "end"
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
                    "paddingLeft": '8px',
                    "paddingRight": '8px'
                },
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
                    ...contentstyle,
                    "width": "150px",
                    "widthType": "fixed",
                    "widthUnit": "px"
                },
                "displayName": "Select",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": "alarmType"
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
                    ...contentstyle,
                    "widthType": "fixed",
                    "width": "150px",
                    "widthUnit": "px"
                },
                "displayName": "Select",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": "level"
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
        "f76vRU0G6B": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警数量",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "qkF_4WPcCt",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "K8qgPyQL5U": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "4oTGQgI3xA.extra.Count",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 18,
                    "fontWeight": "bolder",
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "62ss37cOvh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "qN0eWk7wX3": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警等级汇总",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Mw-MF_Bhgp",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "0ojbHgO-9D": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
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
            "parent": "_IFzbvVIEY",
            "hidden": false,
            "nodes": [
                "o3fTcaRPMM",
                "9bbtnNjDQ1"
            ],
            "linkedNodes": {}
        },
        "vOp0jI3XF2": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "height": 44,
                    "heightType": "fixed",
                    "widthUnit": "%",
                    "heightUnit": "px",
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
            "parent": "_IFzbvVIEY",
            "hidden": false,
            "nodes": [
                "S0Z_kMp6xo",
                "4jCoHRLSfs"
            ],
            "linkedNodes": {}
        },
        "qrMTxukUlY": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
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
            "parent": "_IFzbvVIEY",
            "hidden": false,
            "nodes": [
                "lputkjAubp",
                "D-foU_1PBq"
            ],
            "linkedNodes": {}
        },
        "9bbtnNjDQ1": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "4oTGQgI3xA.extra.LevelMap.LEVEL_HIGH",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                    "fontSize": 16,
                    "fontWeight": "bold",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "0ojbHgO-9D",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "o3fTcaRPMM": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "紧急",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "0ojbHgO-9D",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "S0Z_kMp6xo": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "警告",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "vOp0jI3XF2",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "4jCoHRLSfs": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "4oTGQgI3xA.extra.LevelMap.LEVEL_MIDDLE",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "right",
                    "fontSize": 16,
                    "fontWeight": "bold",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "vOp0jI3XF2",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "D-foU_1PBq": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "4oTGQgI3xA.extra.LevelMap.LEVEL_LOW",
                    "type": "components"
                },
                "status": [
                    {
                        "label": "",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 16,
                    "fontWeight": "bold",
                    "textAlign": "right",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "qrMTxukUlY",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lputkjAubp": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "普通",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "qrMTxukUlY",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "c3n4zCGzo7": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
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
            "parent": "bB7JadGZNF",
            "hidden": false,
            "nodes": [
                "pdya5lKIRe"
            ],
            "linkedNodes": {}
        },
        "pdya5lKIRe": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警数量",
                "status": statsuMap,
                "events": {},
                "style": contentstyle
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "c3n4zCGzo7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "czHP9zjn3L": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
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
            "parent": "kQGfSOf4wp",
            "hidden": false,
            "nodes": [
                "7l_eADcJzE"
            ],
            "linkedNodes": {}
        },
        "GE-qN4BHDS": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "marginBottom": 10,
                    "paddingSide": "side",
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
        "qkF_4WPcCt": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "marginBottom": 10,
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
            "parent": "62ss37cOvh",
            "hidden": false,
            "nodes": [
                "f76vRU0G6B"
            ],
            "linkedNodes": {}
        },
        "Mw-MF_Bhgp": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
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
            "parent": "_IFzbvVIEY",
            "hidden": false,
            "nodes": [
                "qN0eWk7wX3"
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
                    ...contentstyle,
                    "height": "100%",
                    "heightType": "relative",
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
                    ...contentstyle,
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
                    ...contentstyle,
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
                "style": contentstyle
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
                "style": contentstyle
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
                "style": contentstyle
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
                "style": contentstyle
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "yCj6Z0CfRv",
            "hidden": false,
            "nodes": [
                "2CogS9fH5c"
            ],
            "linkedNodes": {}
        }
    }
} 
