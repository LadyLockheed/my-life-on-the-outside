import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';
// import "firebase/analytics";


// let firebaseConfig = {
//     apiKey: process.env.firebaseApiKey,
//     authDomain: process.env.firebaseAuthDomain,
//     projectId: process.env.firebaseProjectId,
//     storageBucket: process.env.firebaseStorageBucket,
//     messagingSenderId: process.env.firebaseMessagingSenderId,
//     appId: process.env.firebaseAppId,
//     measurementId: process.env.firebaseMeasurementId
// };

let firebaseConfig = {
    apiKey: 'AIzaSyCvPzvZXC_HLGLX5hDC-QLKuB6JAuYQPpI',
    authDomain: 'mylifeontheoutside.firebaseapp.com',
    projectId: 'mylifeontheoutside',
    storageBucket: 'mylifeontheoutside.appspot.com',
    messagingSenderId: '84667438147',
    appId: '1:846674381479:web:35d3ef23d34fd8e2f2a982',
    measurementId: 'G-MWD0D6YBVZ'
};


if(firebase.apps.length === 0){
    //initialiserar firebase
    firebase.initializeApp(firebaseConfig);
}
else{
    //returnerar appen by default
    firebase.app();
}


const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();
const projectImageStorage = firebase.storage();

export { projectFireStore, projectAuth, projectImageStorage };