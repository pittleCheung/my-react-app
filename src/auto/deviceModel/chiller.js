import { pageStyle, contentstyle, statsuMap, colGrid, contentpaddingstyle, colnoflex, txtstyle } from '../pageNodeDefault';
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
                    "width": 984,
                    "height": 613,
                    "widthType": "fixed",
                    "heightType": "fixed",
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
                "projId": "1I7XFiscDakwzvXr3VMJpK",
                "points": {
                    [source.PR_COND.NAME]: 0,
                    [source.T_COND.NAME]: 0,
                    [source.T_EVAP_LEV.NAME]: 0,
                    [source.T_EVAP_ENT.NAME]: 0,
                    [source.PR_EVAP.NAME]: 0,
                    [source.T_EVAP.NAME]: 0,
                    [source.I_PCT.NAME]: 0,
                    [source.I_PCT_MAX_SP.NAME]: 0,
                    [source.DPR_OIL.NAME]: 0,
                    [source.T_OIL.NAME]: 0,
                    [source.P.NAME]: 0,
                    [source.COP.NAME]: 0,
                    [source.ONOFF.NAME]: 0,
                    [source.FAULT.NAME]: 0,
                    [source.AM.NAME]: 0,
                    [source.ONOFF_SP.NAME]: 0,
                    [source.T_CHW_S_SP.NAME]: 0,
                    [source.EB.NAME]: 0,
                    [source.T_COND_ENT.NAME]: 0,
                    [source.T_COND_LEV.NAME]: 0
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "_SgsLo3FQK"
            ],
            "linkedNodes": {}
        },
        "_SgsLo3FQK": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "width": "auto",
                    "widthType": "fit-content",
                    "display": "grid",
                    "flexDirection": "row",
                    "columnGap": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "zfFRgSDwRU",
                "it4gK3PLxR",
                "6fhAYxXPZF"
            ],
            "linkedNodes": {}
        },
        "it4gK3PLxR": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "auto",
                    "heightType": "fit-content",
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 6,
                    "paddingTop": 0,
                    "paddingRight": 8,
                    "paddingLeft": 0,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "_SgsLo3FQK",
            "hidden": false,
            "nodes": [
                "rU7h1p23Zk",
                "pjzkfNdCrx",
                "zsEW5WU5Yl"
            ],
            "linkedNodes": {}
        },
        "6fhAYxXPZF": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "auto",
                    "heightType": "fit-content",
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 6,
                    "paddingTop": 0,
                    "paddingRight": 8,
                    "paddingLeft": 0,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "_SgsLo3FQK",
            "hidden": false,
            "nodes": [
                "QAu51DZaOn",
                "oeaWjPuF4t",
                "yCX1wFT-EY"
            ],
            "linkedNodes": {}
        },
        "pjzkfNdCrx": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
                "flex": "",
                "style": {
                    ...colnoflex,
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "D9iJXFxWsV",
                            "type": "color",
                            "key": "D9iJXFxWsV",
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
            "parent": "it4gK3PLxR",
            "hidden": false,
            "nodes": [
                "T4EsfpW0kj"
            ],
            "linkedNodes": {}
        },
        "QAu51DZaOn": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
                "flex": "",
                "style": {
                    ...colnoflex,
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "hf7006FB4M",
                            "type": "color",
                            "key": "hf7006FB4M",
                            "value": "rgba(25, 25, 49, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "key": "centerCenter",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": 0,
                    "columnGap": 0,
                    "justifyItems": ""
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "6fhAYxXPZF",
            "hidden": false,
            "nodes": [
                "QlI5UcXREL",
                "ia7tptrcVO"
            ],
            "linkedNodes": {}
        },
        "oeaWjPuF4t": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
                "flex": "",
                "style": {
                    ...colnoflex,
                    "paddingSide": "all",
                    "padding": 8,
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "fEd4vuSeTk",
                            "type": "color",
                            "key": "fEd4vuSeTk",
                            "value": "rgba(25, 25, 49, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "bottomCenter",
                    "justifyContent": "center",
                    "alignItems": "flex-end",
                    "columnGap": 6
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "6fhAYxXPZF",
            "hidden": false,
            "nodes": [
                "hkMX9qJfFr",
                "0cHZIa9PHm"
            ],
            "linkedNodes": {}
        },
        "yCX1wFT-EY": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
                "flex": "",
                "style": {
                    ...colnoflex,
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "OIJd3oZwjz",
                            "type": "color",
                            "key": "OIJd3oZwjz",
                            "value": "rgba(25, 25, 49, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "row",
                    "paddingSide": "side",
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "6fhAYxXPZF",
            "hidden": false,
            "nodes": [
                "WpHpNxYIpR",
                "_o35gjFjvp"
            ],
            "linkedNodes": {}
        },
        "WpHpNxYIpR": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "48px",
                    "heightType": "fixed",
                    "padding": 8,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "Ydd74iY5hs",
                            "type": "color",
                            "key": "Ydd74iY5hs",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "px",
                    "borderWidth": 0,
                    "borderStyle": "",
                    "borderColor": "transparent",
                    "borderSide": "",
                    "display": "",
                    "flexDirection": "",
                    "key": "topCenter",
                    "justifyContent": "",
                    "alignItems": "",
                    "rowGap": "",
                    "columnGap": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": ""
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "yCX1wFT-EY",
            "hidden": false,
            "nodes": [
                "8uoOtotiVW"
            ],
            "linkedNodes": {}
        },
        "zsEW5WU5Yl": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 8,
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "m9h8bGZIof",
                            "type": "color",
                            "key": "m9h8bGZIof",
                            "value": "rgba(25, 25, 49, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "it4gK3PLxR",
            "hidden": false,
            "nodes": [
                "mmhAboiLqY",
                "4kAs_87PrJ"
            ],
            "linkedNodes": {}
        },
        "mmhAboiLqY": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 8,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "yN1gllAr6C",
                            "type": "color",
                            "key": "yN1gllAr6C",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zsEW5WU5Yl",
            "hidden": false,
            "nodes": [
                "PGbquk-K2E"
            ],
            "linkedNodes": {}
        },
        "4kAs_87PrJ": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": contentstyle,
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zsEW5WU5Yl",
            "hidden": false,
            "nodes": [
                "q4O10n_H9u",
                "rZeuDZvYab",
                "ydqPg2M7Mz",
                "bBlk_hgyjN"
            ],
            "linkedNodes": {}
        },
        "PGbquk-K2E": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                    "fontSize": 14,
                    "lineHeight": 2.5,
                    "fontWeight": "bold",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "mmhAboiLqY",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "_o35gjFjvp": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "222222222",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    "widthType": "relative",
                    "heightType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 4,
                    "marginSide": "side",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "heightUnit": "%",
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "yCX1wFT-EY",
            "hidden": false,
            "nodes": [
                "lT7vOGjDLL",
                "q5bIBhzIKU"
            ],
            "linkedNodes": {}
        },
        "QlI5UcXREL": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 8,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "rcaPerLAXM",
                            "type": "color",
                            "key": "rcaPerLAXM",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "QAu51DZaOn",
            "hidden": false,
            "nodes": [
                "b72cSkJymB"
            ],
            "linkedNodes": {}
        },
        "ia7tptrcVO": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": contentstyle,
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "QAu51DZaOn",
            "hidden": false,
            "nodes": [
                "WyjWTXCk_6",
                "GD3tEa8xaL"
            ],
            "linkedNodes": {}
        },
        "b72cSkJymB": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "压缩机",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 14,
                    "lineHeight": 2.5,
                    "fontWeight": "bold",
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "QlI5UcXREL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "hkMX9qJfFr": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "oeaWjPuF4t",
            "hidden": false,
            "nodes": [
                "3BmMVzCM9U",
                "MFw1BHq2jZ"
            ],
            "linkedNodes": {}
        },
        "0cHZIa9PHm": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "oeaWjPuF4t",
            "hidden": false,
            "nodes": [
                "UD1wHLHeD_",
                "sCP6xzX99I"
            ],
            "linkedNodes": {}
        },
        "3BmMVzCM9U": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "hkMX9qJfFr",
            "hidden": false,
            "nodes": [
                "bRie1_ZP8S"
            ],
            "linkedNodes": {}
        },
        "MFw1BHq2jZ": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "paddingSide": "side",
                    "padding": 8,
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 20,
                    "height": "47px",
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "alignItems": "center",
                    "alignItems": "flex-start",
                    "key": "topCenter",
                    "justifyContent": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "hkMX9qJfFr",
            "hidden": false,
            "nodes": [
                "OjcDcFVLy9",
            ],
            "linkedNodes": {}
        },
        "bRie1_ZP8S": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "功率",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 18,
                    "fontWeight": 400,
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "3BmMVzCM9U",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "OjcDcFVLy9": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "20px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.P.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "mark": false,
                "keyboard": false,
                "code": false,
                "isBefore": false,
                "isAfter": true,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "kW",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "MFw1BHq2jZ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "UD1wHLHeD_": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "0cHZIa9PHm",
            "hidden": false,
            "nodes": [
                "CN-IS7jnza"
            ],
            "linkedNodes": {}
        },
        "sCP6xzX99I": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "padding": 8,
                    "display": "flex",
                    "flexDirection": "row",
                    "height": "47px",
                    "heightType": "fixed",
                    "heightUnit": "px",
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "0cHZIa9PHm",
            "hidden": false,
            "nodes": [
                "mw52q7d_HO"
            ],
            "linkedNodes": {}
        },
        "CN-IS7jnza": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "效率",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 18,
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "UD1wHLHeD_",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "mw52q7d_HO": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": source.COP.NAME,
                    "type": "points"
                },
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 20,
                    "fontWeight": "bold",
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "sCP6xzX99I",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "8uoOtotiVW": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "电机",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 14,
                    "lineHeight": 2.5,
                    "fontWeight": "bold",
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "WpHpNxYIpR",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "rU7h1p23Zk": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "padding": 8,
                    "background": "linear-gradient(rgba(25, 25, 49, 1), rgba(25, 25, 49, 1))",
                    "backgroundList": [
                        {
                            "id": "J_ZHOoVo96",
                            "type": "color",
                            "key": "J_ZHOoVo96",
                            "value": "rgba(25, 25, 49, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "it4gK3PLxR",
            "hidden": false,
            "nodes": [
                "Cfi1j_zImi",
                "NGMu7m_QWg"
            ],
            "linkedNodes": {}
        },
        "Cfi1j_zImi": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "padding": 8,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "tsOi9gPM1k",
                            "type": "color",
                            "key": "tsOi9gPM1k",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "rU7h1p23Zk",
            "hidden": false,
            "nodes": [
                "pU9XH9v2Dx"
            ],
            "linkedNodes": {}
        },
        "NGMu7m_QWg": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
                "flex": "",
                "style": colGrid,
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "rU7h1p23Zk",
            "hidden": false,
            "nodes": [
                "SZgvDGP3KQ",
                "LrboFeqgLj",
                "Kclmev0xbm",
                "GGR_A64N9k"
            ],
            "linkedNodes": {}
        },
        "pU9XH9v2Dx": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                    "fontSize": 14,
                    "lineHeight": 2.5,
                    "fontWeight": "bold",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Cfi1j_zImi",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "zfFRgSDwRU": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 6,
                "align": "top",
                "gutter": 16,
                "justify": "start",
                "wrap": false,
                "style": {
                    ...contentstyle,
                    "width": "auto",
                    "widthType": "fit-content",
                    "display": "flex",
                    "flexDirection": "row",
                    "padding": 8,
                    "columnGap": 6,
                    "paddingTop": 8,
                    "paddingRight": 28,
                    "paddingLeft": 5,
                    "paddingBottom": 8
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "_SgsLo3FQK",
            "hidden": false,
            "nodes": [
                "KICMrVR6BL",
                "qUOM71KYXN",
                "goACR736hO",
                "p6wongDS8q",
                "0xw6OlJDXs",
                "wa9xCvcX6N"
            ],
            "linkedNodes": {}
        },
        "KICMrVR6BL": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 4,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "100%",
                    "heightType": "relative",
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "nvGUxXUfls",
                            "type": "color",
                            "key": "nvGUxXUfls",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "column",
                    "padding": 14,
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "heightUnit": "%"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zfFRgSDwRU",
            "hidden": false,
            "nodes": [
                "T0rGr4J5E5",
                "1-EoVYZs0e"
            ],
            "linkedNodes": {}
        },
        "qUOM71KYXN": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 4,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "100%",
                    "heightType": "relative",
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "BB039FIwCL",
                            "type": "color",
                            "key": "BB039FIwCL",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "column",
                    "padding": 14,
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "heightUnit": "%"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zfFRgSDwRU",
            "hidden": false,
            "nodes": [
                "un03U5nDKk",
                "WT2armGOhA"
            ],
            "linkedNodes": {}
        },
        "goACR736hO": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 4,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "100%",
                    "heightType": "relative",
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "HuvSBGTNF5",
                            "type": "color",
                            "key": "HuvSBGTNF5",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "padding": 14,
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "heightUnit": "%"
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zfFRgSDwRU",
            "hidden": false,
            "nodes": [
                "5YQw_9rmDK",
                "k7gxvKDh-8"
            ],
            "linkedNodes": {}
        },
        "p6wongDS8q": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 4,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "100%",
                    "heightType": "relative",
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "3RZXqREbBk",
                            "type": "color",
                            "key": "3RZXqREbBk",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "grid",
                    "flexDirection": "column",
                    "padding": 14,
                    "rowGap": 10,
                    "columnGap": 0,
                    "heightUnit": "%",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "id": "col-3"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zfFRgSDwRU",
            "hidden": false,
            "nodes": [
                "dWvTYLgAwv",
                "0_6XV1qhH1"
            ],
            "linkedNodes": {}
        },
        "0xw6OlJDXs": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 4,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "height": "100%",
                    "heightType": "relative",
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "t2ByIOyowy",
                            "type": "color",
                            "key": "t2ByIOyowy",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "%",
                    "display": "grid",
                    "flexDirection": "column",
                    "padding": 14,
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 12,
                    "paddingBottom": 8
                },
                "id": "col-4"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zfFRgSDwRU",
            "hidden": false,
            "nodes": [
                "yhZrIj18Ra",
                "lC0LBFTekM"
            ],
            "linkedNodes": {}
        },
        "wa9xCvcX6N": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 4,
                "flex": "",
                "style": {
                    ...contentstyle,
                    "fontSize": 12,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(44, 46, 70, 1), rgba(44, 46, 70, 1))",
                    "backgroundList": [
                        {
                            "id": "ryw6MWGBcN",
                            "type": "color",
                            "key": "ryw6MWGBcN",
                            "value": "rgba(44, 46, 70, 1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "%",
                    "display": "flex",
                    "flexDirection": "column",
                    "padding": 14,
                    "rowGap": 10,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "id": "col-5"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zfFRgSDwRU",
            "hidden": false,
            "nodes": [
                "AQNJPXr51P",
                "ZJMSsCBiV7"
            ],
            "linkedNodes": {}
        },
        "un03U5nDKk": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    ...contentstyle,
                    "width": "auto",
                    "widthType": "fit-content",
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qUOM71KYXN",
            "hidden": false,
            "nodes": [
                "V1gGsigstN"
            ],
            "linkedNodes": {}
        },
        "V1gGsigstN": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "远程/就地",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 12,
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "un03U5nDKk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "WT2armGOhA": {
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
                    ...contentstyle,
                    "fontSize": 16,
                    "lineHeight": 2.5,
                    "fontWeight": "bold",
                    "textAlign": "center"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "qUOM71KYXN",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "5YQw_9rmDK": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "启用/禁用",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 12,
                    "lineHeight": 2.5,
                    "textAlign": "center"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "goACR736hO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "k7gxvKDh-8": {
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
                    "fontSize": 16,
                    "textAlign": "center",
                    "heightType": "fit-content",
                    "height": "auto",
                    "display": "flex",
                    "flexDirection": "column",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 0,
                    "padding": null,
                    "width": "85px",
                    "rowGap": 0,
                    "alignContent": "",
                    "flexWrap": "nowrap",
                    "gap": "",
                    "justifyItems": "",
                    "lineHeight": 2,
                    "widthType": "fixed",
                    "widthUnit": "px"
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "goACR736hO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "dWvTYLgAwv": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器出水温度（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                    "fontSize": 12,
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "p6wongDS8q",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "0_6XV1qhH1": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": 174,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 5,
                    "widthUnit": "px",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "p6wongDS8q",
            "hidden": false,
            "nodes": [
                "2GJC_7URHX"
            ],
            "linkedNodes": {}
        },
        "2GJC_7URHX": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP_LEV.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
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
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "0_6XV1qhH1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "yhZrIj18Ra": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器出水温度设置",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                    "fontSize": 12,
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "0xw6OlJDXs",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lC0LBFTekM": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": 192,
                    "height": 30,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "paddingTop": 0,
                    "paddingRight": 40,
                    "paddingLeft": 40,
                    "paddingBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "0xw6OlJDXs",
            "hidden": false,
            "nodes": [
                "dae1Mw6Tqp"
            ],
            "linkedNodes": {}
        },
        "dae1Mw6Tqp": {
            "type": {
                "resolvedName": "Input"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Input",
                "size": "middle",
                "type": "text",
                "placeholder": "",
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "showCount": false,
                "isPush": true,
                "events": {
                    "onPressEnter": {
                        "action": "pushData",
                        "link": {
                            "component": source.T_EVAP_LEV.NAME
                        }
                    },
                    "onPush": {
                        "action": "pushData",
                        "link": {
                            "component": source.T_EVAP_LEV.NAME
                        }
                    }
                },
                "value": {
                    "bind": source.T_EVAP_LEV.NAME,
                    "type": "points"
                },
            },
            "displayName": "Input",
            "custom": {},
            "parent": "lC0LBFTekM",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "AQNJPXr51P": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "启动",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "",
                "htmlType": "button",
                "status": statsuMap,
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
                    ...contentstyle,
                    "fontSize": 14,
                    "padding": 4,
                    "paddingSide": "side",
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "wa9xCvcX6N",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ZJMSsCBiV7": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "停止",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "",
                "htmlType": "button",
                "status": statsuMap,
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
                    ...contentstyle,
                    "paddingSide": "side",
                    "fontSize": 14,
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "wa9xCvcX6N",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "T0rGr4J5E5": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "运行状态",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "textAlign": "center",
                    "fontSize": 12,
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "KICMrVR6BL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1-EoVYZs0e": {
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
                            "bind": source.ONOFF.NAME,
                            "type": "points",
                        }
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d",
                        "expression": {
                            "bind": source.ONOFF.NAME,
                            "type": "points",
                        }
                    }
                ],
                "events": {},
                "style": {
                    ...contentstyle,
                    "fontSize": 16,
                    "lineHeight": 2.5,
                    "fontWeight": "bold",
                    "color": "rgba(0, 251, 40, 1)",
                    "textAlign": "center"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "KICMrVR6BL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "T4EsfpW0kj": {
            "type": {
                "resolvedName": "SvgMaterial"
            },
            "isCanvas": false,
            "props": {
                "displayName": "SvgMaterial",
                "component": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"4 -8 190 114\"><path d=\"M20 20h163v66h-163v-66Zm31 0v56h-31v2h31v8h2v-8h31v8h2v-8h31v8h2v-8h31v8h2v-8h31v-2h-31v-56h-2v56h-31v-56h-2v56h-31v-56h-2v56h-31v-56ZM18 14v89h4v1h-11v-1h4v-89ZM185 14h3v89h4v1h-11v-1h4ZM99 86v17h-4v1h11v-1h-4v-17ZM13 27v15h-4v-15ZM8 25v20h-2v-20ZM13 54v24h-4v-24ZM8 52v31h-2v-31ZM119 19h7v-25h-7ZM118-3v19h-3v-19ZM127-3h15v-3h1v3h15v19h-15v2h-1v-2h-15ZM159-6h1v25h-1ZM114 1a25 25 0 00-20 18h14a10 10 0 016-6Z\"/></svg>",
                "style": {
                    "translateX": 0,
                    "translateY": 0,
                    "scale": 1,
                    "width": 186,
                    "height": 110,
                    "fill": "rgba(89, 138, 186, 1)",
                    "opacity": 1,
                    "borderRadius": 0
                }
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "pjzkfNdCrx",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "SZgvDGP3KQ": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "NGMu7m_QWg",
            "hidden": false,
            "nodes": [
                "ywXnwHjJHf",
                "VxqVFeGrl4"
            ],
            "linkedNodes": {}
        },
        "ywXnwHjJHf": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "SZgvDGP3KQ",
            "hidden": false,
            "nodes": [
                "BYFzizUL2i"
            ],
            "linkedNodes": {}
        },
        "VxqVFeGrl4": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "SZgvDGP3KQ",
            "hidden": false,
            "nodes": [
                "bsg_xcQ7Gz"
            ],
            "linkedNodes": {}
        },
        "BYFzizUL2i": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器出水温度（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "ywXnwHjJHf",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "bsg_xcQ7Gz": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_COND_LEV.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "VxqVFeGrl4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "LrboFeqgLj": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "NGMu7m_QWg",
            "hidden": false,
            "nodes": [
                "Mw6LQRXD4M",
                "n0vKrh06Ok"
            ],
            "linkedNodes": {}
        },
        "Mw6LQRXD4M": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LrboFeqgLj",
            "hidden": false,
            "nodes": [
                "_Z14jxrZq5"
            ],
            "linkedNodes": {}
        },
        "_Z14jxrZq5": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器进水温度（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Mw6LQRXD4M",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "n0vKrh06Ok": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "LrboFeqgLj",
            "hidden": false,
            "nodes": [
                "W6hV4cVvxU"
            ],
            "linkedNodes": {}
        },
        "W6hV4cVvxU": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_COND_ENT.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "n0vKrh06Ok",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Kclmev0xbm": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "NGMu7m_QWg",
            "hidden": false,
            "nodes": [
                "a03Mrux_Q3",
                "3gR_8QTnou"
            ],
            "linkedNodes": {}
        },
        "a03Mrux_Q3": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 14,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Kclmev0xbm",
            "hidden": false,
            "nodes": [
                "0dk2XbmWCd"
            ],
            "linkedNodes": {}
        },
        "0dk2XbmWCd": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器冷媒压力（kPa）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "a03Mrux_Q3",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "3gR_8QTnou": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 10,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "Kclmev0xbm",
            "hidden": false,
            "nodes": [
                "VwSD03IyTG"
            ],
            "linkedNodes": {}
        },
        "VwSD03IyTG": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.PR_COND.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "kPa",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "3gR_8QTnou",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GGR_A64N9k": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "NGMu7m_QWg",
            "hidden": false,
            "nodes": [
                "S1ZojjsJlU",
                "8qKUJ2DToG"
            ],
            "linkedNodes": {}
        },
        "S1ZojjsJlU": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "GGR_A64N9k",
            "hidden": false,
            "nodes": [
                "VEPxDXkZqp"
            ],
            "linkedNodes": {}
        },
        "VEPxDXkZqp": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器冷媒温度（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "S1ZojjsJlU",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "8qKUJ2DToG": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "GGR_A64N9k",
            "hidden": false,
            "nodes": [
                "036fXgI2jt"
            ],
            "linkedNodes": {}
        },
        "036fXgI2jt": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_COND.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "8qKUJ2DToG",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "q4O10n_H9u": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "4kAs_87PrJ",
            "hidden": false,
            "nodes": [
                "CL69zhsfBV",
                "fQJQDSdYL4"
            ],
            "linkedNodes": {}
        },
        "CL69zhsfBV": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "q4O10n_H9u",
            "hidden": false,
            "nodes": [
                "6iurMpOaaK"
            ],
            "linkedNodes": {}
        },
        "6iurMpOaaK": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器出水温度（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "CL69zhsfBV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fQJQDSdYL4": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "q4O10n_H9u",
            "hidden": false,
            "nodes": [
                "6VxsZz7Z2W"
            ],
            "linkedNodes": {}
        },
        "6VxsZz7Z2W": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP_LEV.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "fQJQDSdYL4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "rZeuDZvYab": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "4kAs_87PrJ",
            "hidden": false,
            "nodes": [
                "S3h07RL2Rp",
                "rlWFJ8wIUr"
            ],
            "linkedNodes": {}
        },
        "S3h07RL2Rp": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "rZeuDZvYab",
            "hidden": false,
            "nodes": [
                "zCvXBDD1hC"
            ],
            "linkedNodes": {}
        },
        "zCvXBDD1hC": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器进水温度（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "S3h07RL2Rp",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "rlWFJ8wIUr": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "rZeuDZvYab",
            "hidden": false,
            "nodes": [
                "n_uj3t_gwo"
            ],
            "linkedNodes": {}
        },
        "n_uj3t_gwo": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP_ENT.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "rlWFJ8wIUr",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ydqPg2M7Mz": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "4kAs_87PrJ",
            "hidden": false,
            "nodes": [
                "EWYt3SAIiv",
                "hMKPC3k0MU"
            ],
            "linkedNodes": {}
        },
        "EWYt3SAIiv": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 14,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "ydqPg2M7Mz",
            "hidden": false,
            "nodes": [
                "hf1zdHZlOz"
            ],
            "linkedNodes": {}
        },
        "hf1zdHZlOz": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器冷媒压力（kPa）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "EWYt3SAIiv",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "hMKPC3k0MU": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 10,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "ydqPg2M7Mz",
            "hidden": false,
            "nodes": [
                "qDWutGgr_1"
            ],
            "linkedNodes": {}
        },
        "qDWutGgr_1": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.PR_EVAP.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "kPa",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "hMKPC3k0MU",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "bBlk_hgyjN": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "4kAs_87PrJ",
            "hidden": false,
            "nodes": [
                "QPPno3tjhv",
                "CCD2q1ok7G"
            ],
            "linkedNodes": {}
        },
        "QPPno3tjhv": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "bBlk_hgyjN",
            "hidden": false,
            "nodes": [
                "t9DlrV44kA"
            ],
            "linkedNodes": {}
        },
        "t9DlrV44kA": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器冷媒温度（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "QPPno3tjhv",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "CCD2q1ok7G": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "bBlk_hgyjN",
            "hidden": false,
            "nodes": [
                "JWGcziBUJf"
            ],
            "linkedNodes": {}
        },
        "JWGcziBUJf": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "CCD2q1ok7G",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "WyjWTXCk_6": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ia7tptrcVO",
            "hidden": false,
            "nodes": [
                "d5htM4kVyk",
                "uoTiCcAxil"
            ],
            "linkedNodes": {}
        },
        "d5htM4kVyk": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "WyjWTXCk_6",
            "hidden": false,
            "nodes": [
                "Je2FYuMD9N"
            ],
            "linkedNodes": {}
        },
        "Je2FYuMD9N": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "油压（kPa）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "d5htM4kVyk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "uoTiCcAxil": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "WyjWTXCk_6",
            "hidden": false,
            "nodes": [
                "WZj4t32mkS"
            ],
            "linkedNodes": {}
        },
        "WZj4t32mkS": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.DPR_OIL.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "kPa",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "uoTiCcAxil",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GD3tEa8xaL": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ia7tptrcVO",
            "hidden": false,
            "nodes": [
                "VN83YFe2ch",
                "TtpriNtUTl"
            ],
            "linkedNodes": {}
        },
        "VN83YFe2ch": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "GD3tEa8xaL",
            "hidden": false,
            "nodes": [
                "JQLCLI5jT9"
            ],
            "linkedNodes": {}
        },
        "JQLCLI5jT9": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "油温（℃）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "VN83YFe2ch",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "TtpriNtUTl": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "GD3tEa8xaL",
            "hidden": false,
            "nodes": [
                "8DlIjs7BSr"
            ],
            "linkedNodes": {}
        },
        "8DlIjs7BSr": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_OIL.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "TtpriNtUTl",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lT7vOGjDLL": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "_o35gjFjvp",
            "hidden": false,
            "nodes": [
                "drcRFA4by-",
                "3qcj811FMP"
            ],
            "linkedNodes": {}
        },
        "drcRFA4by-": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "lT7vOGjDLL",
            "hidden": false,
            "nodes": [
                "tf8z73X4Vh"
            ],
            "linkedNodes": {}
        },
        "tf8z73X4Vh": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "电流百分比（%）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "drcRFA4by-",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "3qcj811FMP": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "lT7vOGjDLL",
            "hidden": false,
            "nodes": [
                "yEeAC2i9kU"
            ],
            "linkedNodes": {}
        },
        "yEeAC2i9kU": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.I_PCT.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "%",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "3qcj811FMP",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "q5bIBhzIKU": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "_o35gjFjvp",
            "hidden": false,
            "nodes": [
                "AZGZtncvTE",
                "hJqEs-pgPm"
            ],
            "linkedNodes": {}
        },
        "AZGZtncvTE": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 14,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "q5bIBhzIKU",
            "hidden": false,
            "nodes": [
                "8cCFsrzZ20"
            ],
            "linkedNodes": {}
        },
        "8cCFsrzZ20": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "电流百分比设定值（%）",
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    fontSize: 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "AZGZtncvTE",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "hJqEs-pgPm": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 10,
                "flex": "",
                "style": {
                    ...contentpaddingstyle,
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
            "parent": "q5bIBhzIKU",
            "hidden": false,
            "nodes": [
                "ej4llV1h93"
            ],
            "linkedNodes": {}
        },
        "ej4llV1h93": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.I_PCT_MAX_SP.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "%",
                    "type": "secondary"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "hJqEs-pgPm",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
}