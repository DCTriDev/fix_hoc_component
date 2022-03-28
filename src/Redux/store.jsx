import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import loadingAnimSlice from "./Slice/loadingAnimSlice";
import courseSlice from "./Slice/courseSlice";

const store = configureStore({
    reducer: {
        loadingAnimSlice,
        userSlice,
        courseSlice,
    },
    devTools: true
});

export default store;