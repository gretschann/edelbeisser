import Firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = Firebase.initializeApp(
  {
    apiKey: 'AIzaSyD9prfWHcSNBpp5gBR7zoaREFM2bz8hcYs',
    authDomain: 'edelbeisser-be307.firebaseapp.com',
    databaseURL: 'https://edelbeisser-be307.firebaseio.com',
    projectId: 'edelbeisser-be307',
    storageBucket: 'edelbeisser-be307.appspot.com',
    messagingSenderId: '124725596371'
  }
)

const firestore = firebaseApp.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

// Export the database for components to use.
export const db = firebaseApp.firestore()
