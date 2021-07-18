// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "firebase/app"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

  apiKey: "AIzaSyBK5ptTk-aOKvTccn6DesGo176lB_0kxag",
  authDomain: "services-analytics.firebaseapp.com",
  databaseURL: "https://services-analytics-default-rtdb.firebaseio.com",
  projectId: "services-analytics",
  storageBucket: "services-analytics.appspot.com",
  messagingSenderId: "993581797807",
  appId: "1:993581797807:web:3a2f210e028768887f5f5a",
  measurementId: "G-TZ704KW2W5"
}

const firebaseApp = initializeApp(firebaseConfig);