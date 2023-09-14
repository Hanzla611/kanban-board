import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    task: taskReducer,
    user: userReducer,
  },
});

export default appStore;
