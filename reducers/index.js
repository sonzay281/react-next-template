import { combineReducers } from "redux";

import user from "./userReducer";
import auth from "./authReducer";
import common from "./commonReducer";

export default combineReducers({
  user,
  auth,
  common,
});
