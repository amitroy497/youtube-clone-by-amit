import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBAtAgp_3XaBYw9kyzd1mUMWTCSnGk75ZA',
  authDomain: 'yt-clone-by-amit.firebaseapp.com',
  projectId: 'yt-clone-by-amit',
  storageBucket: 'yt-clone-by-amit.appspot.com',
  messagingSenderId: '487525967718',
  appId: '1:487525967718:web:51e6d7df5553bfdbac4aa7',
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
