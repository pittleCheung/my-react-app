/**
 * 条件判断逻辑
 */
import pointDefault from "./pointDefault";
const { status } = pointDefault; // 默认 0 1 0
/**
 * 无阀门
 */

/**
 * @param {*} item 设备id映射
 * @param {*} data 当前组别内所有的设备是否全部开启 
 * @param {*} vals 阀门映射关系
 * @returns 
 */
export const checkTotal = (obj, data, mapdata, vals, pointarr, type) => {
    let str = '(';
    data.forEach((item, index) => {
        if (!vals?.[item]?.[1]) {
            str += `${'${' + obj[item][status[0]].NAME + '}'}==1`;
        } else {
            str += `${'(${' + obj[item][status[0]].NAME + '}'}==1`;
            str += `&&${'${' + vals[item][1][status[0]].NAME + '}'}==1)`;
            pointarr.push(vals[item][1][status[0]].NAME);
        }
        pointarr.push(obj[item][status[0]].NAME);
        str += index == data.length - 1 ? ')&&' : '||';
    })
    if (mapdata) {
        str += "("
        mapdata.forEach((item, index) => {
            if (!vals?.[item]?.[1]) {
                str += `${'${' + obj[item][status[0]].NAME + '}'}==1`;
            } else {
                str += `${'(${' + obj[item][status[0]].NAME + '}'}==1`;
                str += `&&${'${' + vals[item][[type ? 0 : 1]][status[0]].NAME + '}'}==1)`;
                pointarr.push(vals[item][[type ? 0 : 1]][status[0]].NAME);
            }
            pointarr.push(obj[item][status[0]].NAME);
            str += index == data.length - 1 ? '' : '||';
        })
        str += ")"
    }
    return str;
}

export const checkCHLTotal = (CHLS, valuesMaps, pointarr) => {
    let str = '';
    CHLS.forEach((item, index0) => {
        str += `${'${' + item[status[0]].NAME + '}'}==1`;
        pointarr.push(item[status[0]].NAME);
        if (valuesMaps?.[item.ID]?.[0]) {
            str = `(${str}`
            str += `&&${'${' + valuesMaps[item.ID][0][status[0]].NAME + '}'}==1)`;
            pointarr.push(valuesMaps[item.ID][0][status[0]].NAME);
        }
        str += index0 == CHLS.length - 1 ? '' : '||'
    })
    return str;
}

// 判断设备对应横管 所有情况
/**
 * 
 * @param {*} data 当前设备
 * @param {*} vals 当前设备对应阀门
 * @returns 
 */
export const deviceCheckH = (data, vals, pointarr) => {
    let str = `${'${' + data[status[0]].NAME + '}'}==1`;
    pointarr.push(data[status[0]].NAME)
    if (vals && vals?.[status[0]]) {
        str = `(${str}`;
        str += `&&${'${' + vals[status[0]].NAME + '}'}==1)`;
        pointarr.push(vals[status[0]].NAME)
    }
    return str;
}

// 判断设备对应竖管 冷冻泵流出的情况
/**
 * 
 * @param {*} data 当前设备
 * @param {Array} repv 前面所有设备状态
 * @param {*} vals 阀门
 * @param {*} dri 水里路方向
 * @returns 
 */
export const deviceCheckV = (data, repv, vals, pointarr) => {
    // let str = deviceCheckH(data, vals);
    // str += '||';
    let str = '';
    repv.forEach((item, index) => {
        str += deviceCheckH(item, vals?.[index], pointarr);
        str += index === repv.length - 1 ? '' : '||';
    })
    return str;
}
/**
 * 有阀门
 */