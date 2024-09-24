// 用于判断初始值渲染的数据是否为空
export function isEmptyObject(obj) {
    return !!Object.keys(obj).length;
}