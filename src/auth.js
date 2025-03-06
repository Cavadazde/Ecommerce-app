import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Firebase-i düzgün import edirik

// **Qeydiyyat Funksiyası**
export const signUp = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // İstifadəçi adını Firebase Firestore-da saxlaya bilərsiniz
      // const db = getFirestore();
      // await setDoc(doc(db, "users", user.uid), { name });
  
      return user;
    } catch (error) {
      console.error("Qeydiyyat zamanı xəta:", error.message);
      alert(`Xəta: ${error.message}`);
      return null;
    }
  };
// **Login Funksiyası**
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Giriş zamanı xəta:", error.message);
    return null;
  }
};
