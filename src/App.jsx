
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { auth } from "./Config/firebase";
import { useState } from "react";

function App() {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [photo, setphoto] = useState("");
  
  const AuthWithGoogle = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {


        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        setName(user.displayName)
        setEmail(user.email)
        setphoto(user.photoURL)

        // arr.push({
        //   Name: user.displayName,
        //   Email: user.email,
        //   photoURL: user.photoURL,
        // })


        console.log("Google user", user);
        console.log("Google user arr", arr);


      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        console.log("Google error", errorCode);
        // ...
      });
  };

  const AuthWithGithub = () => {

    const provider = new GithubAuthProvider();
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("GitHub user",user )
      })

      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        
        console.log("GitHub error",errorCode)
        // ...
      });
  };

  return (
    <>
      <button onClick={AuthWithGoogle}>Google</button>

      <button  onClick={AuthWithGithub}>GitHub</button>

    <div style={{margin: '20px'}}>
      <img src={photo} alt="" />
      <p>{name}</p>
      <p>{email}</p>
    </div>
    </>
  );
}

export default App;
