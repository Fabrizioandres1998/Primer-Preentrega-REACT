import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCGEvtcAcpIAJYwqratMyeVJgk_o9_zveQ",
    authDomain: "paninplacecommerce.firebaseapp.com",
    projectId: "paninplacecommerce",
    storageBucket: "paninplacecommerce.appspot.com",
    messagingSenderId: "697071094837",
    appId: "1:697071094837:web:c1f742fdf9fd2efa9f757c"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);