// Toggle icon


    let html = document.querySelector('html')

    let menuIcon = document.querySelector('#menu-icon')

    let navBar = document.querySelector('.navbar')

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.toggle('bx-x')
        navBar.classList.toggle('active')
        html.classList.toggle('no-scroll')
    })



// Scroll and Click section

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


    // Close menu after oneClick

for (let i = 0; i < navLinks.length; i++) {

    const elt = navLinks[i]
    elt.addEventListener("click", function () {
        menuIcon.classList.remove('bx-x')
        navBar.classList.remove('active')
        html.classList.remove('no-scroll')

    })
}

window.addEventListener("scroll", function() {

        sections.forEach( sec => {
            let top = window.scrollY
            let offset = sec.offsetTop - 100
            let height = sec.offsetHeight
            let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        }

    });

    // sticky header

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100) 

 })


//  Contact me !

const form = document.querySelector('form#form')
const sendBtn = form.querySelector('button')
console.log(sendBtn)
const serviceID = "service_9k45lqb"
const templateID = "template_rdctaoo"

sendBtn.addEventListener("click", function(e) {
    // e.preventDefault();
    var params ={
        name : form.querySelector('#name').value,
        tel : form.querySelector('#tel').value,
        mail : form.querySelector('#mail').value,
        message : form.querySelector('#message').value
    }

    emailjs.send(serviceID, templateID, params)
    .then(function(response) {
       console.log('SUCCESS!', response.status);
    }, function(error) {
       console.log('FAILED...', error);
    });

    console.log(form.querySelector('#name').value);
})
