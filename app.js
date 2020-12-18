//Need to listen for a submit
document.querySelector('.contact-form').addEventListener("submit",
 submitForm);

function submitForm (e) {
    e.preventDefaukt();
    // console.log("This is working")

    //Now I need to get all of the elements
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;

    console.log(name, email, message);

    saveContactInfo(name, email, message); //aspirational code 
}