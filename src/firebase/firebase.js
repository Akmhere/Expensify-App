import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDE69hukRJnSThRqD_GNaBw5I4GuDX02Po",
    authDomain: "expensify-akm.firebaseapp.com",
    databaseURL: "https://expensify-akm-default-rtdb.firebaseio.com",
    projectId: "expensify-akm",
    storageBucket: "expensify-akm.appspot.com",
    messagingSenderId: "165109091839",
    appId: "1:165109091839:web:8f7ef072cd05136dea6bca",
    measurementId: "G-FDYK25SH4T"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

export {firebase , database as default};

//  database.ref('notes').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((child)=>{
//         expenses.push({
//             id : child.key,
//             ...child.val()
//         })
        
//     }) ;
//     console.log(expenses);
//  });

