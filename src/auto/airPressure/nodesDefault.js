/**
 * 空压
 */
import { styleMap, commonTextStyle } from '../stylesDefault'
import { pipe, device, statusText, text } from '../nodesDefault';

export const pipevHeight = 150;
export const pipehWidth = 150;
/**
 * 最大高度
 */

export const getMaxHieght = (ACOPS, ARWTS, RDRYS, DDRYS, ARDTS) => {
    return Math.max(
        Object.keys(ACOPS).length * (styleMap.Acop.height + 80),
        Object.keys(ARWTS).length * (styleMap.WetTank.height + 10 + 80),
        Object.keys(RDRYS).length * (styleMap.RefDryer.height + 10 + 80),
        Object.keys(DDRYS).length * (styleMap.DesDryer.height + 10 + 80),
        Object.keys(ARDTS).length * (styleMap.Tank.height + 10 + 80)
    )
}
/**
 * 设备位置
 */
export const position = (index, initTop, prev, laststyle) => {
    return {
        translateY: (index + 1) * (styleMap.Acop.height + 80) + initTop,
        translateX: (laststyle ? (prev + styleMap.h.width) : 160) + (laststyle ? laststyle.props.style.width : 0)
    };
}
const deviceMap = {
    'D0C1A': ['Acop', null, ['PR_DISCHARGE', 'Mpa'], ['T_DISCHARGE', '℃']],
    'D0C1D': ['WetTank', null, ['PR', 'Mpa']],
    'D0C1B': ['RefDryer', 'RDRYS'],
    'D0C1C': ['DesDryer', 'DDRYS'],
    'D0C1E': ['Tank', null, ['PR', 'Mpa']]
}
/**
   * 保留一位小数
   */
const fix = (num) => {
    return Number(Number(num).toFixed(1));
};
const childMap = new Map();
export const helpFunction = (arr, result, tag, prevX, initTop, lastdevice, idsList, deviceModelMap, lastLen, pointsObject) => {
    if (!arr || !arr.length) return;
    let len = arr.length - 1;
    let str = ''
    const obj = {};
    arr.forEach(t0 => {
        const curName = JSON.stringify(t0?.NEXT_NODE?.map(t => t?.ID));
        if (!obj[curName]) {
            obj[curName] = [t0.ID];
        } else {
            obj[curName].push(t0.ID);
        }
        if (idsList[t0.ID]?.ONOFF) {
            pointsObject[idsList[t0.ID].ONOFF.NAME] = 0;
            str += `${'${' + idsList[t0.ID].ONOFF.NAME + '}'}==1&&`
        }
    });

    Object.values(obj).forEach((t, i) => {
        if (Array.isArray(t)) {
            t.forEach((item, index) => {
                const current = { ...idsList[item], ...arr.find(t => t?.ID === item) };
                const deviceItem = device(deviceMap[current.TYPE][0], current, pointsObject, deviceModelMap?.[deviceMap[current.TYPE]?.[1]]?.[item]); // 创建设备
                result[deviceItem.id] = deviceItem;
                result[deviceItem.id].props.style = { ...styleMap[deviceMap[current.TYPE][0]], ...position(t.length > 1 ? index : i, initTop, prevX, lastdevice) };
                result[deviceItem.id].props.style.translateY = result[deviceItem.id].props.style.translateY + 10;
                const newprevX = result[deviceItem.id].props.style.translateX;
                const target = result[deviceItem.id].props.style;
                const nameText = text();
                nameText.props.value = current.NAME
                nameText.props.style = {
                    ...nameText.props.style,
                    translateX: target.translateX,
                    translateY: target.translateY + target.height + 10
                }
                result[nameText.id] = nameText;
                deviceMap[current.TYPE].slice(2).forEach((textItem, textIndex) => {
                    pointsObject[textItem[0]] = 0;
                    generateText(result, textItem, textIndex, target);
                })
                // 左侧管
                const pipeh1 = pipe('h', '0');
                pipeh1.props.waterstyle = '1';
                pipeh1.props.style = { ...styleMap['h'], fill: '#407FCB', };
                pipeh1.props.style.width = fix(pipeh1.props.style.width * 0.33);
                pipeh1.props.style.translateX = target.translateX - pipeh1.props.style.width;
                pipeh1.props.style.translateY = target.translateY + target.height * 0.7;
                if (current?.ONOFF) {
                    pipeh1.props.status = {
                        bind: `${'${' + current.ONOFF.NAME + '}'}==1`,
                        type: "expressions",
                    };
                } else {
                    pipeh1.props.status = {
                        bind: current?.preStates,
                        type: "expressions",
                    };
                }
                result[pipeh1.id] = pipeh1;
                const pipeh2 = pipe('h', '0');
                let vheight = len % 2 == 0 ? pipevHeight : pipevHeight * 0.5;
                if ((len == 0 && current.NEXT_NODE?.length > 1)) {
                    vheight = vheight * 0.5;
                }
                const objle = Object.values(obj).length;
                if ((tag === 'R' && index === ((t.length - 1) >> 1) && (objle > 1 ? i === ((objle - 1) >> 1) : 1)) || (tag === 'L' && lastLen === 1 && index === ((t.length - 1) >> 1))) { // 生成总管
                    pipeh2.props.waterstyle = '1';
                    pipeh2.props.style = { ...styleMap['h'], fill: '#407FCB', };
                    pipeh2.props.style.width = fix(pipeh2.props.style.width * 0.33) + 2;
                    pipeh2.props.style.translateX = pipeh1.props.style.translateX - pipeh1.props.style.width - 1;
                    pipeh2.props.style.translateY = pipeh1.props.style.translateY + (len % 2 == 0 ? 0 : vheight);
                    if (str.length > 0) {
                        pipeh2.props.status = {
                            bind: str.slice(0, -2),
                            type: "expressions",
                        };
                    } else {
                        pipeh2.props.status = {
                            bind: current?.preStates,
                            type: "expressions",
                        };
                    }
                    result[pipeh2.id] = pipeh2;
                }
                if ((lastLen > 1 && (index != t.length - 1 || t.length === 1)) || (t.length > 1 && index != t.length - 1)) {
                    if (current.NO === ((current.LEN - 1) >> 1) || (current.LEN == 2 && current.NO === 1)) {
                        const pipev1 = pipe('v', '1');
                        pipev1.props.waterstyle = '1';
                        pipev1.props.style = { ...styleMap['v'], fill: '#407FCB', };
                        pipev1.props.style.height = vheight;
                        pipev1.props.style.translateX = pipeh1.props.style.translateX;
                        pipev1.props.style.translateY = pipeh1.props.style.translateY;
                        pipev1.props.status = {
                            bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
                            type: "expressions",
                        };
                        result[pipev1.id] = pipev1;
                        if (len % 2 == 1) {
                            // 生成总管的地方要生成两个竖管
                            const pipev2 = pipe('v', '0');
                            pipev2.props.waterstyle = '1';
                            pipev2.props.style = { ...styleMap['v'], fill: '#407FCB', };
                            pipev2.props.style.height = vheight;
                            pipev2.props.style.translateX = pipeh1.props.style.translateX;
                            pipev2.props.style.translateY = pipev1.props.style.translateY + vheight;
                            pipev2.props.status = {
                                bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
                                type: "expressions",
                            };
                            result[pipev2.id] = pipev2;
                        }
                    } else if (i !== len) {
                        const pipev = pipe('v', current.NO > ((current.LEN - 1) >> 1) ? '0' : '1');
                        pipev.props.waterstyle = '1';
                        pipev.props.style = { ...styleMap['v'], fill: '#407FCB' };
                        pipev.props.style.height = pipevHeight;
                        pipev.props.style.translateX = pipeh1.props.style.translateX;
                        pipev.props.style.translateY = pipeh1.props.style.translateY;
                        if (idsList[arr[i + 1].ID]?.ONOFF) {
                            pipev.props.status = {
                                bind: `${'${' + idsList[arr[i + 1].ID].ONOFF.NAME + '}'}==1`,
                                type: "expressions",
                            };
                        } else {
                            pipev.props.status = {
                                bind: current?.preStates,
                                type: "expressions",
                            };
                        }
                        result[pipev.id] = pipev;
                    }
                }
                let newtag = 'L';
                const curlen = current.LEN || 0;
                if (i == 0 && arr?.[0]?.NEXT_NODE?.length > 1 && arr?.[0]?.NEXT_NODE?.some(t => !childMap.get(t.ID))) {
                    if (arr.length >= current?.NEXT_NODE.length) {
                        newtag = 'R'
                    }
                    const nextlen = arr?.[0]?.NEXT_NODE?.length;
                    const obj = [];
                    arr?.[0]?.NEXT_NODE.map((t, i0) => {
                        childMap.set(t.ID, true);
                        obj.push({
                            ...t,
                            LEN: Object.values(idsList).filter(t0 => t0.TYPE === t.TYPE).length,
                            isMin: i0 > ((arr?.[0]?.NEXT_NODE.length - 1) >> 1) ? 'donw' : 'up'
                        })
                    })
                    helpFunction(obj, result, newtag, newprevX, initTop + Math.abs(curlen - nextlen) * pipevHeight * 0.5, result[deviceItem.id], idsList, deviceModelMap, t.length, pointsObject);
                } else if (arr?.[i]?.NEXT_NODE?.length == 1) {
                    const obj = [];
                    arr?.[i]?.NEXT_NODE.forEach((t, i0) => {
                        obj.push({
                            ...t,
                            LEN: Object.values(idsList).filter(t0 => t0.TYPE === t.TYPE).length,
                            isMin: i0 > ((arr?.[i]?.NEXT_NODE.length - 1) >> 1) ? 'donw' : 'up',
                        })
                    })
                    helpFunction(obj, result, 'R', newprevX, initTop + (t.length > 1 ? index : i) * pipevHeight, result[deviceItem.id], idsList, deviceModelMap, t.length, pointsObject);
                }

                //  右侧管
                if (current.TYPE) {
                    const pipehr1 = pipe('h', '0');
                    pipehr1.props.waterstyle = '1';
                    pipehr1.props.style = { ...styleMap['h'], fill: '#407FCB', };
                    pipehr1.props.style.width = fix(pipehr1.props.style.width * 0.33);
                    pipehr1.props.style.translateX = target.translateX + target.width;
                    pipehr1.props.style.translateY = target.translateY + target.height * 0.7;
                    if (current?.ONOFF) {
                        pipehr1.props.status = {
                            bind: `${'${' + current.ONOFF.NAME + '}'}==1`,
                            type: "expressions",
                        };
                    } else {
                        pipehr1.props.status = {
                            bind: current?.preStates,
                            type: "expressions",
                        };
                    }
                    result[pipehr1.id] = pipehr1;
                    const rX = pipehr1.props.style.translateX + pipehr1.props.style.width;
                    if (tag === 'L' && index === ((t.length - 1) >> 1) && index !== 0) { // 生成总管
                        const pipehr2 = pipe('h', '0');
                        pipehr2.props.waterstyle = '1';
                        pipehr2.props.style = { ...styleMap['h'], fill: '#407FCB', };
                        pipehr2.props.style.width = fix(pipehr2.props.style.width * 0.33) + 2;
                        pipehr2.props.style.translateX = rX - 1;
                        pipehr2.props.style.translateY = pipehr1.props.style.translateY + + (len % 2 == 0 ? 0 : vheight);
                        if (str.length > 0) {
                            pipehr2.props.status = {
                                bind: str.slice(0, -2),
                                type: "expressions",
                            };
                        } else {
                            pipehr2.props.status = {
                                bind: current?.preStates,
                                type: "expressions",
                            };
                        }
                        result[pipehr2.id] = pipehr2;
                    }
                    if (current.TYPE === 'D0C1E' && (current.NO !== current.LEN)) {
                        if ((current.NO == ((current.LEN - 1) >> 1)) || (current.NO == 1 && current.LEN == 2)) {
                            const pipehr2 = pipe('h', '0');
                            pipehr2.props.waterstyle = '1';
                            pipehr2.props.style = { ...styleMap['h'], fill: '#407FCB', };
                            pipehr2.props.style.width = fix(pipehr2.props.style.width * 0.33);
                            pipehr2.props.style.translateX = rX;
                            pipehr2.props.style.translateY = pipehr1.props.style.translateY + vheight;
                            pipehr2.props.status = {
                                bind: current?.preStates,
                                type: "expressions",
                            };
                            result[pipehr2.id] = pipehr2;
                        }
                    }
                    if ((current.TYPE === 'D0C1E' || ((arr?.[i]?.NEXT_NODE?.length > 1 && (index != t.length - 1 || t.length === 1)))) && (current.NO !== current.LEN)) {
                        if (i === (len >> 1)) {
                            const pipev1 = pipe('v', current.NO > ((current.LEN - 1) >> 1) ? '0' : '1');
                            pipev1.props.waterstyle = '1';
                            pipev1.props.style = { ...styleMap['v'], fill: '#407FCB', };
                            pipev1.props.style.height = vheight;
                            pipev1.props.style.translateX = rX;
                            pipev1.props.style.translateY = pipehr1.props.style.translateY;
                            pipev1.props.status = {
                                bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
                                type: "expressions",
                            };
                            result[pipev1.id] = pipev1;
                            if (len % 2 == 1 || (curlen > 0 && len == 0)) {
                                // 生成总管的地方要生成两个竖管
                                const pipev2 = pipe('v', current.NO > ((current.LEN - 1) >> 1) ? '1' : '0');
                                pipev2.props.waterstyle = '1';
                                pipev2.props.style = { ...styleMap['v'], fill: '#407FCB', };
                                pipev2.props.style.height = vheight;
                                pipev2.props.style.translateX = rX;
                                pipev2.props.style.translateY = pipev1.props.style.translateY + vheight;
                                pipev2.props.status = {
                                    bind: str.length > 0 ? str.slice(0, -2) : current?.preStates,
                                    type: "expressions",
                                };
                                result[pipev2.id] = pipev2;
                            }
                        } else if (i !== len && i !== (len >> 1)) {
                            const piperv = pipe('v', (i > len >> 1) ? '1' : '0');
                            piperv.props.waterstyle = '1';
                            piperv.props.style = { ...styleMap['v'], fill: '#407FCB', };
                            piperv.props.style.height = pipevHeight;
                            piperv.props.style.translateX = rX;
                            piperv.props.style.translateY = pipehr1.props.style.translateY;
                            if (idsList[arr[i + 1].ID]?.ONOFF) {
                                piperv.props.status = {
                                    bind: `${'${' + idsList[arr[i + 1].ID].ONOFF.NAME + '}'}==1`,
                                    type: "expressions",
                                };
                            } else {
                                piperv.props.status = {
                                    bind: current?.preStates,
                                    type: "expressions",
                                };
                            }
                            result[piperv.id] = piperv;
                        }
                    }
                }
            })
        }

    })
}
export const generateText = (result, item, index, parentStyle) => {
    const poc = statusText(null, item[1]);
    poc.props.style = {
        ...commonTextStyle,
        translateX: parentStyle.translateX - 40,
        translateY: (index) * 50 + parentStyle.translateY,
    }
    poc.props.value = {
        "bind": item[0],
        "type": "points"
    }
    result[poc.id] = poc;
}

export default {
    helpFunction,
    getMaxHieght,
    position,
    pipe,
    generateText
}

