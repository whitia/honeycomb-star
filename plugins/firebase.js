import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyAiogQKGpxmkG0GQeB5j8GZ_mxx4O3BclQ",
      authDomain: "honeycomb-star.firebaseapp.com",
      databaseURL: "https://honeycomb-star.firebaseio.com",
      projectId: "honeycomb-star",
      storageBucket: "honeycomb-star.appspot.com",
      messagingSenderId: "28225965346",
      appId: "1:28225965346:web:1c6c19134b6bb6292fe97b",
      measurementId: "G-G6PQ0YSD4B"
    }
  )
}

export default firebase
