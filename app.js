// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD6G7PoBXwd46HisQmy0iC2_-kLQju34fE",
    authDomain: "contactform-test2-dbf79.firebaseapp.com",
    projectId: "contactform-test2-dbf79",
    storageBucket: "contactform-test2-dbf79.appspot.com",
    messagingSenderId: "387758895145",
    appId: "1:387758895145:web:d6f064278f40fcdd082c38"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create a reference contactInfo "collections"
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}