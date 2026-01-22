import React from "react";
import NavBar from "./firebase/NavBar";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


export default function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const email = "email@email.com";
  const password = "test123";

  const register = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Success! You're registered.");
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      alert("Success! You're logged in.");
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
      alert("Logged out");
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <NavBar
        user={user}
        loading={loading}
        login={login}
        register={register}
        logout={logout}
      />
    </div>
  );
}
