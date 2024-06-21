/**
 * 吸干机
 */
export default (source) => {
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
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 16,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "borderRadius": 0,
                    "backgroundList": [],
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "minHeight": "100%"
                },
                "events": {
                    "onLoad": null
                },
                "projId": "V7HJLzshX0WW5cjlQhsTbs",
                "points": {
                    [source.ONOFF.NAME]: 0,
                    [source.AM.NAME]: 0,
                    [source.EB.NAME]: 0,
                    [source.ONOFF_SP.NAME]: 0,
                    [source.T_AIR_ENT.NAME]: 0,
                    [source.T_AIR_LEV.NAME]: 0,
                    [source.T_DEW.NAME]: 0
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "xxYw5l8gMx"
            ],
            "linkedNodes": {}
        },
        "xxYw5l8gMx": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "fit-content",
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
                    "display": "grid",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "QLxSLykaOd",
                "ZbXgZol9I0"
            ],
            "linkedNodes": {}
        },
        "QLxSLykaOd": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 6,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "paddingTop": 8,
                    "paddingRight": 20,
                    "paddingLeft": 0,
                    "paddingBottom": 8,
                    "heightUnit": "px"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "xxYw5l8gMx",
            "hidden": false,
            "nodes": [
                "DIfICqxGer",
                "ELeyFREOys",
                "UVbncEeGb_",
                "Cpwe48U7q1"
            ],
            "linkedNodes": {}
        },
        "ZbXgZol9I0": {
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
                    "columnGap": 6,
                    "paddingTop": 0,
                    "paddingRight": 10,
                    "paddingLeft": 4,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "xxYw5l8gMx",
            "hidden": false,
            "nodes": [
                "sIQ95iOFyi",
                "hSvKRbLFqf"
            ],
            "linkedNodes": {}
        },
        "DIfICqxGer": {
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
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 14,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "LtgS2rTj_L",
                            "type": "color",
                            "key": "LtgS2rTj_L",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "QLxSLykaOd",
            "hidden": false,
            "nodes": [
                "CXO98ty0IH",
                "qR5quNTUUj"
            ],
            "linkedNodes": {}
        },
        "Cpwe48U7q1": {
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
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 14,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "Zdk_plPUWW",
                            "type": "color",
                            "key": "Zdk_plPUWW",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "column",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "rowGap": 10,
                    "columnGap": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "QLxSLykaOd",
            "hidden": false,
            "nodes": [
                "1THpHAdGEb",
                "slkc64jQNb"
            ],
            "linkedNodes": {}
        },
        "ELeyFREOys": {
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
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 14,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "E3A-fIO32U",
                            "type": "color",
                            "key": "E3A-fIO32U",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "QLxSLykaOd",
            "hidden": false,
            "nodes": [
                "qHzJCOyMkB",
                "-FuylO7csn"
            ],
            "linkedNodes": {}
        },
        "UVbncEeGb_": {
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
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 14,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "xywehFofh_",
                            "type": "color",
                            "key": "xywehFofh_",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "rowGap": 10,
                    "columnGap": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "QLxSLykaOd",
            "hidden": false,
            "nodes": [
                "4o2bF9todC",
                "QgWssij-kL"
            ],
            "linkedNodes": {}
        },
        "hSvKRbLFqf": {
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
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "sr1jLnhvd1",
                            "type": "color",
                            "key": "sr1jLnhvd1",
                            "value": "rgba(25, 25, 49, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "ZbXgZol9I0",
            "hidden": false,
            "nodes": [
                "pZ3F_KJtH_"
            ],
            "linkedNodes": {}
        },
        "sIQ95iOFyi": {
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
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "2CukbYxdbN",
                            "type": "color",
                            "key": "2CukbYxdbN",
                            "value": "rgba(25, 25, 49, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": ""
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "ZbXgZol9I0",
            "hidden": false,
            "nodes": [
                "lV-EaFlA1v",
                "fTOCrRK__X"
            ],
            "linkedNodes": {}
        },
        "CXO98ty0IH": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "运行状态",
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
                    "fontSize": 12,
                    "fontWeight": 400,
                    "lineHeight": 2.5,
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
            "parent": "DIfICqxGer",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "qR5quNTUUj": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": source.ONOFF.NAME,
                    "type": "points"
                },
                "status": [
                    {
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c",
                        "expression": {
                            "bind": "${" + source.ONOFF.NAME + "}==0",
                            "type": "expressions",
                            "point": [
                                source.ONOFF.NAME
                            ],
                        }
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d",
                        "expression": {
                            "bind": "${" + source.ONOFF.NAME + "}==1",
                            "type": "expressions",
                            "point": [
                                source.ONOFF.NAME
                            ],
                        }
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
                    "fontSize": 16,
                    "fontWeight": "bold",
                    "lineHeight": 2.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "color": "rgba(0, 251, 40, 1)"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "DIfICqxGer",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "qHzJCOyMkB": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "远程/就地",
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
                    "fontSize": 12,
                    "fontWeight": 400,
                    "lineHeight": 2.5,
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
            "parent": "ELeyFREOys",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "-FuylO7csn": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": source.AM.NAME,
                    "type": "points"
                },
                "status": [
                    {
                        "label": "远程",
                        "value": "1",
                        "key": "1",
                        "color": "#73d13d",
                        "expression": {
                            "bind": source.AM.NAME,
                            "type": "points",
                        }
                    },
                    {
                        "label": "就地",
                        "value": "0",
                        "key": "2",
                        "color": "#8c8c8c",
                        "expression": {
                            "bind": source.AM.NAME,
                            "type": "points",
                        }
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
                    "fontSize": 16,
                    "fontWeight": "bold",
                    "lineHeight": 2.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "ELeyFREOys",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "4o2bF9todC": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "启用/禁用",
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
                    "fontSize": 12,
                    "fontWeight": 400,
                    "lineHeight": 2.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "UVbncEeGb_",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lV-EaFlA1v": {
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
                    "height": "auto",
                    "heightType": "fixed",
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
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "rWV3wAkW2U",
                            "type": "color",
                            "key": "rWV3wAkW2U",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "px"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "sIQ95iOFyi",
            "hidden": false,
            "nodes": [
                "7zOPQcmfWY"
            ],
            "linkedNodes": {}
        },
        "fTOCrRK__X": {
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
                    "display": "grid",
                    "flexDirection": "row",
                    "rowGap": "",
                    "columnGap": "",
                    "key": "centerCenter",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": "",
                    "heightUnit": "px"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "sIQ95iOFyi",
            "hidden": false,
            "nodes": [
                "zKlKYzzLNP",
                "_0EQ0R6C0i",
                "GqgFpYIlQg"
            ],
            "linkedNodes": {}
        },
        "7zOPQcmfWY": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "参数",
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
                    "fontWeight": "bold",
                    "lineHeight": 2.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "lV-EaFlA1v",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pZ3F_KJtH_": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": 160,
                    "height": 133,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "widthUnit": "px",
                    "heightUnit": "px"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "hSvKRbLFqf",
            "hidden": false,
            "nodes": [
                "qJU5TNeZd1"
            ],
            "linkedNodes": {}
        },
        "QgWssij-kL": {
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
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "UVbncEeGb_",
            "hidden": false,
            "nodes": [
                "LHkjS3ImU7"
            ],
            "linkedNodes": {}
        },
        "LHkjS3ImU7": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "请选择",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "options": [
                    {
                        "id": "oUN7ebnELU",
                        "label": "启用",
                        "value": "1",
                        "name": "启用",
                        "title": "启用"
                    },
                    {
                        "id": "POFnaWlLKZ",
                        "label": "禁用",
                        "value": "0",
                        "name": "禁用",
                        "title": "禁用"
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "pushData",
                        "link": {
                            "component": source.EB.NAME,
                        }
                    }
                },
                "displayName": "Select",
                "style": {
                    "fontSize": 16
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "QgWssij-kL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1THpHAdGEb": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "开启",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "",
                "htmlType": "button",
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
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.ONOFF_SP.NAME,
                            "value": "1"
                        }
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
                    "fontWeight": "bold",
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
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
            "parent": "Cpwe48U7q1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "slkc64jQNb": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "关闭",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "",
                "htmlType": "button",
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
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.ONOFF_SP.NAME,
                            "value": "0"
                        }
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
                    "fontWeight": "bold",
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
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
            "parent": "Cpwe48U7q1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "zKlKYzzLNP": {
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
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "fTOCrRK__X",
            "hidden": false,
            "nodes": [
                "Jv1YhyEEAp",
                "SFFgzym71y"
            ],
            "linkedNodes": {}
        },
        "_0EQ0R6C0i": {
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
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "fTOCrRK__X",
            "hidden": false,
            "nodes": [
                "fUXXWE1MZq",
                "QT_WhTGqvY"
            ],
            "linkedNodes": {}
        },
        "GqgFpYIlQg": {
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
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "fTOCrRK__X",
            "hidden": false,
            "nodes": [
                "EQSg5QBmW4",
                "jRchGoeu7Q"
            ],
            "linkedNodes": {}
        },
        "SFFgzym71y": {
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
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zKlKYzzLNP",
            "hidden": false,
            "nodes": [
                "LYGmwQkcYH"
            ],
            "linkedNodes": {}
        },
        "Jv1YhyEEAp": {
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
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zKlKYzzLNP",
            "hidden": false,
            "nodes": [
                "CDIiaMGbT0"
            ],
            "linkedNodes": {}
        },
        "CDIiaMGbT0": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "进口温度（℃）",
                "status": [],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 12,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "center"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Jv1YhyEEAp",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "LYGmwQkcYH": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": source.T_AIR_ENT.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": false,
                "italic": false,
                "underline": false,
                "mark": false,
                "keyboard": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "SFFgzym71y",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fUXXWE1MZq": {
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
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "_0EQ0R6C0i",
            "hidden": false,
            "nodes": [
                "NuPwQ1XBGQ"
            ],
            "linkedNodes": {}
        },
        "QT_WhTGqvY": {
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
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "_0EQ0R6C0i",
            "hidden": false,
            "nodes": [
                "evNEwQQj6T"
            ],
            "linkedNodes": {}
        },
        "EQSg5QBmW4": {
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
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "GqgFpYIlQg",
            "hidden": false,
            "nodes": [
                "f11gM6GPLR"
            ],
            "linkedNodes": {}
        },
        "jRchGoeu7Q": {
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
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "GqgFpYIlQg",
            "hidden": false,
            "nodes": [
                "wO3CkinZhT"
            ],
            "linkedNodes": {}
        },
        "NuPwQ1XBGQ": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "出口温度（℃）",
                "status": [],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 12,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "alignItems": "center",
                    "display": "flex",
                    "flexDirection": "row",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "fUXXWE1MZq",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "f11gM6GPLR": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "露点温度（℃）",
                "status": [],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 12,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "EQSg5QBmW4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "evNEwQQj6T": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": source.T_AIR_LEV.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": false,
                "italic": false,
                "underline": false,
                "mark": false,
                "keyboard": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "QT_WhTGqvY",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "wO3CkinZhT": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": source.T_DEW.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": false,
                "italic": false,
                "underline": false,
                "mark": false,
                "keyboard": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "jRchGoeu7Q",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "qJU5TNeZd1": {
            "type": {
                "resolvedName": "SvgMaterial"
            },
            "isCanvas": false,
            "props": {
                "displayName": "SvgMaterial",
                "component": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 66 77\"><path d=\"M0 0h66v8h-66v-8zM0 10h32v60h-32zM34 10h32v60h-32zM4 72h58v5h-58zM11 74v1h17v-1zM38 74v1h17v-1zM4 16v16h24v-16zM5 17h22v14h-22zM9 20v2h8v-2zM9 26v2h8v-2zM21 20v3h3v-3zM21 25v3h3v-3zM56 19a1 1 0 004 0 1 1 0 00-4 0M56 27a1 1 0 004 0 1 1 0 00-4 0z\"/></svg>",
                "style": {
                    "translateX": 0,
                    "translateY": 0,
                    "scale": 1,
                    "width": 66,
                    "height": 77,
                    "fill": "rgba(89, 138, 186, 1)",
                    "opacity": 1,
                    "borderRadius": 0
                }
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "pZ3F_KJtH_",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
}