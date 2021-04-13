import { fromJS } from "immutable";
import {
  DELETE_VALUE,
  VALUE_CHANGED,
  HYDRATE,
  VALIDATE_EMAIL_SUCCEEDED,
  USER_REGISTRATION_SUCCEEDED,
  USER_LOGIN_SUCCEEDED,
} from "actions";

const initialState = fromJS({});

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return state.merge(action.payload);

    case VALUE_CHANGED:
      return state.setIn(
        [...action.payload.field.split(".")],
        action.payload.value
      );

    case DELETE_VALUE:
      return state.deleteIn([...action.payload.field.split(".")]);

    //User Registration
    case VALIDATE_EMAIL_SUCCEEDED:
      return state.set("isEmailValid", action.data?.result);

    case USER_REGISTRATION_SUCCEEDED:
      return state.set("isRegistered", action.data?.result);

    case USER_LOGIN_SUCCEEDED:
      return state.set("isLoggedIn", action.data?.result);

    default:
      return state;
  }
};

export default commonReducer;
