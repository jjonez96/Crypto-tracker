import React, { useState } from "react";
import { auth } from "../../config/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Div, Input, Button, HR } from "./LoginStyles";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
  };

  return (
    <>
      <Div>
        <p>logged in as:</p>
        {user?.email}
        <form>
          <p>Email:</p>
          <Input
            type="text"
            value={email}
            placeholder="Your email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>Password:</p>
          <Input
            type="password"
            value={password}
            placeholder="Your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={login}>Sign In</Button>
          <br />
          <br />
          <p>
            No account? <br />
            Click Create Account instead of Sign In.
          </p>
          <Button onClick={register}>Create Account</Button>
          <br />
          <br />
          <br />
          <HR />
          <Button onClick={logout}>Sign Out</Button>
        </form>
      </Div>
    </>
  );
}

export default LoginPage;
