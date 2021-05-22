import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmiw5avqgJ1s2ksbFp2ZkiD5ai03u7aw8",
    authDomain: "disney-plus-clone-53dc6.firebaseapp.com",
    projectId: "disney-plus-clone-53dc6",
    storageBucket: "disney-plus-clone-53dc6.appspot.com",
    messagingSenderId: "886951580650",
    appId: "1:886951580650:web:a4cd11eb4a92b285701893"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;