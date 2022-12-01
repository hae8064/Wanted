// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCKuaULqCT7A1HJRyxYYFF5mITQb0YXFVM',
  authDomain: 'wanted-bonghee.firebaseapp.com',
  projectId: 'wanted-bonghee',
  storageBucket: 'wanted-bonghee.appspot.com',
  messagingSenderId: '239395588074',
  appId: '1:239395588074:web:40e72580f1e6dade8c1493',
  measurementId: 'G-WT6XJ76M5L',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
