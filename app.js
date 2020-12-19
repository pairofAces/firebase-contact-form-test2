// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA70K6dU1ucHUwQ4dHYw-ZxbXEC3WONFtI",
    authDomain: "contactform-test2-71f0c.firebaseapp.com",
    databaseURL: "https://contactform-test2-71f0c-default-rtdb.firebaseio.com",
    projectId: "contactform-test2-71f0c",
    storageBucket: "contactform-test2-71f0c.appspot.com",
    messagingSenderId: "307141251802",
    appId: "1:307141251802:web:44124312ae0da4b8000be3"
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
  // console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();

  //invoke the sendEmail function (aspirational code)
  sendEmail(name, email, message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });

  retrieveInfos();
}

// Now I need to grab the information ("infos") from firebase

function retrieveInfos() {
  let ref = firebase.database().ref("infos");
  ref.on("value", fetchedData);
}


function fetchedData(data) {
  let info = data.val();
  let keys = Object.keys(info);

  //now I need to loop through every value I get from above
  for (let i = 0; i < keys.length; i++) {
    let infoData = keys[i]
    let name = info[infoData].name
    let email = info[infoData].email
    let message = info[infoData].message
    console.log(name, email, message)

    let infosResults = document.querySelector('.infosResults');

    infosResults.innerHTML += `
    <div>
      <p>
        <strong>Name: </strong>${name} <br>
        <a> <strong>Email: </strong>${email}</a><br>
        <a> <strong>Message: </strong>${message}</a>
      </p>
    </div>
    `;
  }
}

//create the sendEmail function
function sendEmail (name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'karanchauhan16@gmail.com',
    Password: "hwowubtfvpbijmdb",
    To: "karanchauhan16@gmail.com",
    From: "karanchauhan16@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
  })
}