var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById('sidemenu');
var hamburgerIcon = document.querySelector('.hamburger');
var closeIcon = document.querySelector('.fa-times');

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

hamburgerIcon.addEventListener('click', openmenu);
closeIcon.addEventListener('click', closemenu);

const scriptURL = 'https://script.google.com/macros/s/AKfycbzg63jfXQPvA4KWPBWBm5Ly5KeAFP_4NlBHvIDVLjM-l7WCySFJwKGITZ9__vDClbfdPA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending the message.";
        });
});
