import {
  USER_REGISTRATION,
  USER_REGISTRATION_FAILED,
  USER_REGISTRATION_SUCCEEDED,
  VALIDATE_EMAIL,
  VALIDATE_EMAIL_SUCCEEDED,
  VALIDATE_EMAIL_FAILED,
  USER_LOGIN,
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
} from "actions";

export const validateEmail = (email) => ({
  type: VALIDATE_EMAIL,
  payload: {
    data: { Email: email },
    url: "/customer/check-email",
    onSuccess: VALIDATE_EMAIL_SUCCEEDED,
    onFailure: VALIDATE_EMAIL_FAILED,
  },
});

export const registerUser = (data) => ({
  type: USER_REGISTRATION,
  payload: {
    data,
    url: "customer/register",
    onSuccess: USER_REGISTRATION_SUCCEEDED,
    onFailure: USER_REGISTRATION_FAILED,
  },
});

export const loginUser = (data, url = "customer/login") => ({
  type: USER_LOGIN,
  payload: {
    data,
    url,
    onSuccess: USER_LOGIN_SUCCEEDED,
    onFailure: USER_LOGIN_FAILED,
  },
});
