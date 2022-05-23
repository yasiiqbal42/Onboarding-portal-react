import React from "react";
import SignIn from "../SignIn";

export default function SignInHOC() {
  //From Store
//   let isLoggedIn = false;
//   const {isLoggedIn}=useSelector(state=> state.app)

  if (isLoggedIn) {
    return <SignIn />;
  } else {
    return <div>
    
    </div>;
  }
}
