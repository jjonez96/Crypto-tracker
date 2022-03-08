import React, { useState } from "react";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import NavBar from "../../components/Navbar/NavBar";
import { Div, Input, Button, HR } from "./AuthStyles";

function Authentication() {
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
      <NavBar />
      <Div>
        <h1>Login</h1>
        <p>logged in as:</p>
        {user?.email}
        <form>
          <p>Email:</p>
          <Input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>Password:</p>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={login}>Log In</Button>
          <br />
          <br />
          <p>
            No account? <br />
            Click Create Account instead of login.
          </p>
          <Button onClick={register}>Create Account</Button>
          <br />
          <br />
          <br />
          <HR />
          <Button onClick={logout}>Log Out</Button>
        </form>
      </Div>
    </>
  );
}

export default Authentication;
