// 公共数据，比如用户的基本信息
import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        // 这个对象是控制各个页面的app-header组件
        headerConfig: {
            // 固定定位
            isFixed: false,
            // 透明度
            topAlpha: false
        }
    },

    reducers: {
        changeHeaderConfigAction(state, { payload }) {
            state.headerConfig = payload
        }
    }
})

export const { changeHeaderConfigAction } = mainSlice.actions

export default mainSlice.reducer