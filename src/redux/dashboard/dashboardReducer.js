const initState = {
  isloggedIn: false,
  login: [],
  accessToken: sessionStorage.getItem("access_token")
    ? sessionStorage.getItem("access_token")
    : "",
  courses: [],
  wishlist: [],
  cart: [],
  errors: "",
  profile: [],
  documents: [],
  laptop_delivery: [],
  kit_delivery: [],
  events: [],
  POC: [],
};

const coursesReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("Inside Reducer", action.payload);
      const { isloggedIn } = state;
      return {
        ...state,
        login: [...state.login, { ...action.payload }],
        isloggedIn: true,
      };
    case "GET_ALL_COURSES":
      return { ...state, courses: action.payload };

    case "ADD_TO_WISHLIST":
      const wishlist = [...state.wishlist];
      if (wishlist.find((w) => w.id === action.payload.id))
        return { ...state, errors: "Already added in Wishlist" };
      else
        return {
          ...state,
          wishlist: [...state.wishlist, { ...action.payload }],
          errors: "",
        };

    case "REMOVE_FROM_WISHLIST":
      console.log("Inside remove wishlist reducer");
      return {
        ...state,
        wishlist: [
          ...state.wishlist.filter((item) => item.id !== action.payload),
        ],
      };

    case "ADD_TO_CART":
      const cart = [...state.cart];
      if (cart.find((w) => w.id === action.payload.id))
        return { ...state, errors: "Already added in cart" };
      else
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
          errors: "",
        };
    case "DELETE_FROM_CART":
      console.log("Inside remove cart reducer");
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload)],
      };
    // case "PERFORM_LOGIN":
    //   console.log("Inside Login Reducer");
    //   return {
    //     ...state,
    //     login: action.payload,
    //   };

    default:
      return state;
  }
};

export default coursesReducer;
