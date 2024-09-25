import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEntireRoomList } from '@/api/modules/entire.js'

// 这块相当于pinia的state模块
const entireSlice = createSlice({
    name: "entire",
    // initialState表示状态变量的意思
    initialState: {
        // 当前页码
        currentPage: 0,
        // 房间列表
        roomList: [],
        // 总数据个数
        totalCount: 0,
        // 加载开关
        isLoading: false
    },

    // 这块就是接收action模块传递过来的而数据
    reducers: {
        // 其中state是用来获取上面的值，payload则是获取action的值
        changeRoomList(state, { payload }) {
            state.roomList = payload.list;
            state.totalCount = payload.totalCount
        },
        changeCurrentPage(state, { payload }) {
            state.currentPage = payload
        },
        changeIsLoading(state, { payload }) {
            state.isLoading = payload
        }
    },
})

// 发起网络请求，这里会在组件整体父组件被调用的时候触发
// dispatch获取下面的方法的
// 相当于pinia里的 action模块 param接收外传参 getState参数是拿state上的数据
export const fetchEntireDataAction = createAsyncThunk("fetchdata", async (param = 0, { dispatch, getState }) => {
    // 更新最新的页面: redux => currentPage
    dispatch(changeCurrentPage(param));

    // 发起网络请求就表示加载中
    dispatch(changeIsLoading(true));

    // 这种分页是偏移的思想，
    await getEntireRoomList(param * 20).then(res => {
        // 这里请求发送后，就把数据发送到redux中
        dispatch(changeRoomList(res));
    })

    dispatch(changeIsLoading(false));
})

// 这里需要暴露给action，不然action模块调用不到方法
export const {
    changeCurrentPage,
    changeRoomList,
    changeIsLoading
} = entireSlice.actions;

export default entireSlice.reducer;