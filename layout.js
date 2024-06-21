{
  "ROOT": {
    "type": {
      "resolvedName": "Page"
    },
    "isCanvas": true,
    "props": {
      "title": "页面标题",
      "theme": {
        "algorithm": "defaultAlgorithm",
        "token": {
          "colorPrimary": "#1677ff"
        }
      },
      "style": {
        "position": "relative",
        "width": "100%",
        "height": "auto",
        "widthType": "relative",
        "heightType": "fit-content",
        "fontFamily": "Microsoft YaHei",
        "fontSize": 14,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "textAlign": "left",
        "spacing": 0,
        "paddingSide": "all",
        "marginSide": "all",
        "background": "linear-gradient(rgba(255, 255, 255,1), rgba(255, 255, 255,1))",
        "padding": null,
        "borderRadius": 0,
        "backgroundList": [
          {
            "id": "0jwdLiamD5",
            "key": "0jwdLiamD5",
            "disabled": false,
            "value": "rgba(255, 255, 255,1)"
          }
        ]
      },
      "projId": "1mTMvirNab18SqxPeiTIKA"
    },
    "displayName": "Page",
    "custom": {},
    "hidden": false,
    "nodes": ["nIlD89X7T2"],
    "linkedNodes": {}
  },
  "nIlD89X7T2": {
    "type": {
      "resolvedName": "Columns"
    },
    "isCanvas": true,
    "props": {
      "displayName": "Columns",
      "columns": 3,
      "wrap": false,
      "style": {
        "position": "relative",
        "width": "100%",
        "height": "100vh",
        "widthType": "relative",
        "heightType": "viewport",
        "fontFamily": "Microsoft YaHei",
        "fontSize": 14,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "textAlign": "left",
        "spacing": 0,
        "paddingSide": "all",
        "marginSide": "all",
        "padding": null,
        "display": "flex",
        "flexDirection": "column",
        "rowGap": 0,
        "columnGap": 0,
        "heightUnit": "vh"
      }
    },
    "displayName": "Columns",
    "custom": {},
    "parent": "ROOT",
    "hidden": false,
    "nodes": ["f8aJwz8fVk", "AmQ25CxoFQ", "b2-mJavExG"],
    "linkedNodes": {}
  },
  "f8aJwz8fVk": {
    "type": {
      "resolvedName": "CustomNode"
    },
    "isCanvas": false,
    "props": {},
    "displayName": "CustomNode",
    "custom": {},
    "parent": "nIlD89X7T2",
    "hidden": false,
    "nodes": ["ajDPGISxZj"],
    "linkedNodes": {}
  },
  "ajDPGISxZj": {
    "type": {
      "resolvedName": "Col"
    },
    "isCanvas": true,
    "props": {
      "id": "col-0",
      "span": 8,
      "type": "flex",
      "style": {
        "heightType": "fixed",
        "height": "100px",
        "heightUnit": "px"
      }
    },
    "displayName": "Col",
    "custom": {},
    "parent": "f8aJwz8fVk",
    "hidden": false,
    "nodes": [],
    "linkedNodes": {}
  },
  "AmQ25CxoFQ": {
    "type": {
      "resolvedName": "CustomNode"
    },
    "isCanvas": false,
    "props": {},
    "displayName": "CustomNode",
    "custom": {},
    "parent": "nIlD89X7T2",
    "hidden": false,
    "nodes": ["wfY-vzbQQD"],
    "linkedNodes": {}
  },
  "wfY-vzbQQD": {
    "type": {
      "resolvedName": "Col"
    },
    "isCanvas": true,
    "props": {
      "id": "col-1",
      "span": 8,
      "type": "flex",
      "flex": "auto",
      "style": {
        "heightType": "relative",
        "height": "100%",
        "heightUnit": "%",
        "overflow": "auto"
      }
    },
    "displayName": "Col",
    "custom": {},
    "parent": "AmQ25CxoFQ",
    "hidden": false,
    "nodes": [],
    "linkedNodes": {}
  },
  "b2-mJavExG": {
    "type": {
      "resolvedName": "CustomNode"
    },
    "isCanvas": false,
    "props": {},
    "displayName": "CustomNode",
    "custom": {},
    "parent": "nIlD89X7T2",
    "hidden": false,
    "nodes": ["9N7wy0LAWt"],
    "linkedNodes": {}
  },
  "9N7wy0LAWt": {
    "type": {
      "resolvedName": "Col"
    },
    "isCanvas": true,
    "props": {
      "id": "col-2",
      "span": 8,
      "type": "flex",
      "style": {
        "heightType": "fixed",
        "height": "100px",
        "heightUnit": "px"
      }
    },
    "displayName": "Col",
    "custom": {},
    "parent": "b2-mJavExG",
    "hidden": false,
    "nodes": [],
    "linkedNodes": {}
  }
}