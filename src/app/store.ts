import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../Component/feature/listSlice";

export const store = configureStore({
    reducer: {
        list:listReducer,
    },
},);



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;