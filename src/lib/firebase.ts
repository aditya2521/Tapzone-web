import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7FRJuPGkg0Q79MVbSOFxFJBXttDLxvps",
  authDomain: "tapzone-5b583.firebaseapp.com",
  projectId: "tapzone-5b583",
  storageBucket: "tapzone-5b583.firebasestorage.app",
  messagingSenderId: "543033546348",
  appId: "1:543033546348:web:6a7c6f352b23260982ea49",
  measurementId: "G-NVY9C2S0TJ"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics (client-side only)
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

export default app;
