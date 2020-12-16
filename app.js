//Need to listen for a submit
document.querySelector('.contact-form').addEventListener("submit",
 submitForm);

function submitForm (e) {
    e.preventDefaukt();
    console.log("This is working")
}