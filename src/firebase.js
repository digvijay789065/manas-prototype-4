import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPZRnyc2ivoNROYktbnkhHORt8-_YGqs8",
  authDomain: "dr-manas.firebaseapp.com",
  projectId: "dr-manas",
  storageBucket: "dr-manas.appspot.com",
  messagingSenderId: "199841662117",
  appId: "1:199841662117:web:a47372bfdac49ce07ab94c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Function to Sign in Anonymously
const signInAnonymouslyUser = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    console.log("Signed in as Anonymous:", userCredential.user);
  } catch (error) {
    console.error("Error signing in anonymously:", error.message);
  }
};

// Function to Register with Email/Password
const registerWithEmail = async (email, password) => {
  // Trim the inputs
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    console.error("Invalid email format");
    return;
  }

  if (trimmedPassword.length < 6) {
    console.error("Password must be at least 6 characters long");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
    console.log("User registered:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

// Function to Login with Email/Password
const loginWithEmail = async (email, password) => {
  // Trim the inputs
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    console.error("Invalid email format");
    return;
  }

  if (trimmedPassword.length < 6) {
    console.error("Password must be at least 6 characters long");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

export { app, auth, db, storage, signInAnonymouslyUser, registerWithEmail, loginWithEmail };
