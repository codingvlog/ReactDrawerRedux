const initialAuthState = { 
  authenticating : false,
  authenticated : false,
  data : {},
  error : {}
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'AUTHENTICATING':
      return { 
        ...state, 
        authenticating: true 
      };
    case 'AUTHENTICATED':
      return { 
        ...state, 
        authenticating: false, 
        authenticated: true,
        data : action.payload
      };
    case 'AUTH_ERROR':
      return { 
        ...state, 
        authenticating: false, 
        authenticated: false,
        error : action.payload
      };
    default:
      return state;
  }
}

export default auth;