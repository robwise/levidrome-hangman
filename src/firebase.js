import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCYHpPaKj9jWemYyvUtJf8Su5pb-iwCskk',
  authDomain: 'levidrome-hangman.firebaseapp.com',
  databaseURL: 'https://levidrome-hangman.firebaseio.com',
  projectId: 'levidrome-hangman',
  storageBucket: 'levidrome-hangman.appspot.com',
  messagingSenderId: '628545490370',
};

firebase.initializeApp(config);

export default firebase;
