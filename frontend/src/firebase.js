import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBj2Q25dUVTIDe75uDSyzFUQE8RX8et_ng",
  authDomain: "slido-clone-571f5.firebaseapp.com",
  projectId: "slido-clone-571f5",
  storageBucket: "slido-clone-571f5.appspot.com",
  messagingSenderId: "159263009101",
  appId: "1:159263009101:web:99f548c54dc6578e426f04"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)