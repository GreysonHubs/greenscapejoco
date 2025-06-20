// document.getElementById('snowalertcloseicon').addEventListener('click', function() {
//     var snowAlert = document.getElementById('snowalert');
//     var navbar = document.getElementById('navbarcasing');
//     snowAlert.style.transition = 'max-height 0.5s ease-out, padding 0.5s ease-out';
//     snowAlert.style.overflow = 'hidden';
//     snowAlert.style.maxHeight = '0';
//     snowAlert.style.padding = '0';
//     setTimeout(function() {
//         snowAlert.style.display = 'none';
//         navbar.style.display = 'none';
//     }, 500);
// });

// AOS.init();



// New Site
const hamMenu = document.querySelector('.ham-menu');
const slideInMenu = document.querySelector('.nslideinmenu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    slideInMenu.classList.toggle('active');
})

function openservices() {
    window.location.href = "pages/services.html";
}

// Scheduling Page

const carriagecrossingandcobooking = document.getElementById('CCatNallBooking');
const neighborhoodpopup = document.getElementById('neighborhoodpopup');
const notreadyforservice = document.getElementById('snotreadyforservice');

function open127atnall() {
    carriagecrossingandcobooking.style.display = 'block';
    neighborhoodpopup.style.display = 'none';
}