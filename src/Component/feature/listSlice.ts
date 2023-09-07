import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // list: listData,
    data: [],
    //listAmount:0,
    //costTotal:0,
};

const listSlice = createSlice({
    name:"list",
    initialState,
    reducers:{
        expansionYear:(state, action) => {
            switch (action.type) {
                case 'FETCH_DATA_SUCCESS':
                  return {
                    ...state,
                    data: action.payload,
                  };
                default:
                  return state;
              }
        },
        // closeModal:(state, action) => {
        //     state.isOpen = false;
        // }
    },
});

export const { expansionYear, } = listSlice.actions;
export default listSlice.reducer;