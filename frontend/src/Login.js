// src/Login.js
import { signInWithPopup } from 'firebase/auth'; // Import signInWithPopup
import React from 'react';
import { auth, googleAuthProvider } from './firebase'; // Import auth and provider

const Login = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider); // Use signInWithPopup correctly
      // User is signed in
      console.log(result.user);
      // You can handle the result (e.g., redirect to a different page or store user information)
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
