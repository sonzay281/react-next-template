import { fromJS } from "immutable";
import {
  FETCH_USER_DETAIL_SUCCEEDED,
  FETCH_PRODUCT_CATEGORY_SUCCEEDED,
  FETCH_LATEST_PRODUCTS_SUCCEEDED,
  FETCH_SHIPPING_DETAIL_SUCCEEDED,
  FETCH_BANNERS_SUCCEEDED,
  VALUE_CHANGED,
  DELETE_VALUE,
  SET_CATEGORIES,
} from "actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = fromJS({});

const userReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default userReducer;
