import { USER_LOGIN_SUCCEEDED, FETCH_USER_DETAIL_SUCCEEDED } from "actions";
import { fromJS } from "immutable";

import { set } from "js-cookie";

const initialState = fromJS({
  token: null,
  user: null,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCEEDED:
      set(process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME, action.data?.data);
      return state.set("token", action.data?.data);

    default:
      return state;
  }
};

export default authReducer;
