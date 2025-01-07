// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../utils/Firebase/firebase";
// import { AVATAR_LOGO } from "../utils/constant";

//  export const useUserSignUpAuthentication=(email,password,fullName)=>{
//         //Sign Up Logic
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userData) => {
//         // console.log(userData);
//         const user = userData.user;

//         updateProfile(user, {
//             displayName: fullName,
//             photoURL:AVATAR_LOGO,
//         })
//             .then(() => {
//             const { uid, email, displayName, photoURL } = auth.currentUser;
//             return { uid, email, displayName, photoURL };
//         })  
//     })
// }

// export const useUserSignInAuthentication=(email,password)=>{
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userData) => {
//         const user = userData.user;
//     })
// }