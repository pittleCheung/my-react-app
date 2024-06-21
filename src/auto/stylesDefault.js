/**
 * 默认样式
 * 根据索引和类型画出对应的样式
 */
const ConHeight = document.documentElement.clientHeight - 144 - 168; // 容器默认高度
const commonStyle = {
    translateX: 0,
    translateY: 0,
    scale: 1,
    fill: '#7D8B9A',
    stroke: '#000',
    strokeWidth: 1,
    opacity: 1,
    borderRadius: 0,
    zIndex: 1,
    rotate: 0
}
export const commonTextStyle = {
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
}
const chlWH = { width: 105, height: 69, };
const pumpWH = { width: 25, height: 40, };
const ctWH = { width: 60, height: 57, };
const hWH = { width: 150, height: 5, fill: '' };
const vWH = { width: 5, height: 150, fill: '' };
const ACOPStyle = { ...commonStyle, width: 90, height: 70 };
const DDRYStyle = { ...commonStyle, width: 65, height: 60 }; // margin 10
const RDRYStyle = { ...commonStyle, width: 55, height: 60 }; // margin 10
const ARWTStyle = { ...commonStyle, width: 30, height: 60 }; // margin 10
const ARDTStyle = { ...commonStyle, width: 30, height: 60 }; // margin 10
const chlStyle = { ...commonStyle, ...chlWH }; // 冷机默认样式
const pumpStyle = { ...commonStyle, ...pumpWH }; // 水泵默认样式
const ctStyle = { ...commonStyle, ...ctWH }; // 冷却塔默认样式
const pipeHStyle1 = { ...commonStyle, ...hWH }; // 横管
const pipeVStyle = { ...commonStyle, ...vWH }; // 竖管
const pipeWStyle = { ...commonStyle, width: 12, height: 12, zIndex: 5 }; // 弯头
const pipeTStyle = { ...commonStyle, width: 16, height: 12, zIndex: 5 }; // 三头
const pipeCStyle = { ...commonStyle, width: 16, height: 16, zIndex: 5 }; // 十字头
const valveStyle = { ...commonStyle, width: 15, height: 19, zIndex: 10 }
export const styleMap = {
    CHLS: chlStyle,
    CHWPS: pumpStyle,
    CWPS: pumpStyle,
    CTS: ctStyle,
    v: pipeVStyle,
    w: pipeWStyle,
    c: pipeCStyle,
    h: pipeHStyle1,
    t: pipeTStyle,
    Valve: valveStyle,
    Acop: ACOPStyle,
    DesDryer: DDRYStyle,
    RefDryer: RDRYStyle,
    WetTank: ARWTStyle,
    Tank: ARDTStyle,
    ConHeight
};
export const deviceMargin = {
    CHLS: 34,
    Pump: 63,
    CTS: 46,
    CHWPS: 63,
    CWPS: 63
}; // 设备垂直边距
const deviceTranformX = {}; // 设备水平位移
let deviceTotalTransformY = 0; // 设备总的最大垂直位移
export const deviceNumToole = (obj) => {
    const { CHLS, CHWPS, CWPS, CTS } = obj; // 设备数量
    const newobj = {
        CHLS: (deviceMargin.CHLS + chlStyle.height) * CHLS,
        CHWPS: (deviceMargin.CHWPS + pumpStyle.height) * CHWPS,
        CWPS: (deviceMargin.CWPS + pumpStyle.height) * CWPS,
        CTS: (deviceMargin.CTS + ctStyle.height) * CTS
    };
    deviceTotalTransformY = ConHeight - Math.max(...Object.values(newobj));
    deviceTotalTransformY = deviceTotalTransformY > 150 ? 150 : deviceTotalTransformY;
    deviceTranformX.CTS = hWH.width / 3 + pipeTStyle.width + 100;
    deviceTranformX.CWPS = ctStyle.width + hWH.width + pipeTStyle.width * 2 + deviceTranformX.CTS;
    deviceTranformX.CHLS = pumpStyle.width + hWH.width + pipeTStyle.width * 2 + deviceTranformX.CWPS;
    deviceTranformX.CHWPS = chlStyle.width + hWH.width + pipeTStyle.width * 2 + deviceTranformX.CHLS;
}
/**
 * 设备位移
 * @param index 设备索引
 * @param type 设备类型
 */
export const deviceTranform = (index, type, tag) => {
    const translateY = deviceTotalTransformY + deviceMargin[type] * index + styleMap[type].height * index + tag;
    return {
        translateY,
        translateX: deviceTranformX[type]
    }
}
/**
 * 文本框位置
 */
export const textTransform = (data, tag, other) => {
    return {
        translateX: data.props.style.translateX + (tag ? 0 : data.props.style.width) + (other || 0),
        translateY: data.props.style.translateY + data.props.style.height
    }
}
/**
 * 系统文本框位置
 */
export const textSystemTransform = (data, tag, other) => {
    return {
        translateX: data.props.style.translateX + data.props.style.width * 0.5 - (tag ? 8 : 3) + (other || 0),
        translateY: data.props.style.translateY + (tag ? 7 : 25 * -1)
    }
}