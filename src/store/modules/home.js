import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
    getHomeGoodPriceData,
    getHomeHighScoreData,
    getHomeDiscountData,
    getHomeHotRecommendData,
    getHomeLongforData,
    getHomePlusData
} from "@/api/modules/home";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (_, { dispatch }) => {
    // 发送网络请求 这里不使用async/await，是因为下面请求不需要等上一个请求完才执行的
    getHomeGoodPriceData().then(res => {
        // 把数据派发到createSlice函数里
        dispatch(changeGoodPriceInfoAction(res));
    })

    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res));
    })

    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res));
    })

    getHomeHotRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res));
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res));
    })
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res));
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },
    reducers: {
        // 接收createAsyncThunk派发的数据
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload;
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload;
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload;
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
        }
    },

    extraReducers: (builder) => {
        /* payload是fetchHomeDataAction函数的返回值 */
        builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
            state.goodPriceInfo = payload;
        })
    }
})

// 还要在这里定义让上面的createAsyncThunk能使用
export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction
} = homeSlice.actions;

export default homeSlice.reducer