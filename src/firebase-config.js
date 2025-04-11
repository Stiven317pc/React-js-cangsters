import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjKCE84EHu1Oh2oAlkTg8radf0IMD3aDM",
  authDomain: "ecommerce-cangsters.firebaseapp.com",
  projectId: "ecommerce-cangsters",
  storageBucket: "ecommerce-cangsters.appspot.com",
  messagingSenderId: "539726744051",
  appId: "1:539726744051:web:0dbd09cd71426b90eb6a86"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
