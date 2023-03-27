import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC-uwpwD0Hd-yvTp0WsY--eLBbFGViU2Sw',
  authDomain: 'chamadas-c095d.firebaseapp.com',
  projectId: 'chamadas-c095d',
  storageBucket: 'chamadas-c095d.appspot.com',
  messagingSenderId: '387844018697',
  appId: '1:387844018697:web:d5da286e2d21f1d2df1ed8',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
