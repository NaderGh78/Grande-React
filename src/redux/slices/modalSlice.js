import { createSlice } from "@reduxjs/toolkit";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const modalSlice = createSlice({

    name: "overlay",
    initialState: {
        showOverlay: false,
        imageUrl: "" // Add a field to store the image URL
    },
    reducers: {

        setShowOverlay(state, action) {

            state.showOverlay = true;

            // Store the clicked image URL 
            state.imageUrl = action.payload;

        },

        setHideOverlay(state) {

            state.showOverlay = false;

            // Clear the image URL when the overlay is hidden
            state.imageUrl = "";

        }
    }
});

const modalReducer = modalSlice.reducer;
const modalActions = modalSlice.actions;
export const { setShowOverlay, setHideOverlay } = modalSlice.actions;
export { modalActions, modalReducer }; 