// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTrODjeqc8IyPyjkYYp82oHjx7xwaqVLY",
  authDomain: "contactform-test2-6a491.firebaseapp.com",
  projectId: "contactform-test2-6a491",
  storageBucket: "contactform-test2-6a491.appspot.com",
  messagingSenderId: "732527493678",
  appId: "1:732527493678:web:4d2c058c9f5218843315bf"
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