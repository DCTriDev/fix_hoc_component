import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// import httpService from "../../Services/http.service";  //Không có dòng này thì chạy bình thường

const initialState = {
    courseList: null,
};

export const fetchCourseList = createAsyncThunk('courseSlice/fetchCourseList', async () => {
    // const response = await httpService.getCoursesList();
    // console.log(response.data.content);
    // return response.data.content;
});

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        // setCourseList: (state, action) => {
        //     state.courseList = action.payload;
        // },
    },
    extraReducers:(builder) => {
        builder.addCase(
            fetchCourseList.fulfilled, (state, action) => {
                state.courseList = action.payload
            })
    }
});

export const {setCourseList} = courseSlice.actions;

export default courseSlice.reducer;