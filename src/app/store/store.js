import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/user/userSlice";
import themeReducer from "../../features/theme/themeSlice";
import sideMenuReducer from "../../features/sideMenu/sideMenuSlice";
import mealUserReducer from "../../features/mealUser/mealUserSlice";
import doorPassesReducer from "../../features/doorPasses/doorPassesSlice";
import appsReducer from "../../features/apps/appsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    sideMenu: sideMenuReducer,
    mealUser: mealUserReducer,
    doorPasses: doorPassesReducer,
    apps: appsReducer,
  },
});
