import defaultState from '../defaultState';
import {
  INIT_AUTH,
  LOGIN_REQUEST,
  GET_AUTH_CONFIGS,
  RECEIVE_TOKEN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RECEIVE_FORMS,
  LOGOUT_SUCCESS,
  FETCH_FORMS_ERROR,
} from '../constants/actionTypes';

export default function AUTH(state = defaultState.AUTH, action) {
  switch (action.type) {
    case INIT_AUTH: {
      return {
        ...state,
        ...action.config,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      };
    }

    case GET_AUTH_CONFIGS: {
      return {
        ...state,
        authConfigs: {
          ...action.config,
        },
      };
    }

    case RECEIVE_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        userInfo: {
          ...action.user,
        },
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        userInfo: null,
      };
    }

    case RECEIVE_FORMS: {
      return {
        ...state,
        forms: [...action.forms],
      };
    }

    case FETCH_FORMS_ERROR: {
      return {
        ...state,
        formsError: action.message,
      };
    }

    default:
      return state;
  }
}
