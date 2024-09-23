import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getHomeGoodPriceData } from "@/api";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
    const res = await getHomeGoodPriceData();

    return res;
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {}
    },
    reducers: { 
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload;
        }
    },

    extraReducers: (builder) => {
        /* payload是fetchHomeDataAction函数的返回值 */
        builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
            state.goodPriceInfo = payload;
        })
    }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer