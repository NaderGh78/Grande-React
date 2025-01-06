import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modalSlice";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const store = configureStore({
    reducer: {
        overlay: modalReducer
    }
});

export default store;