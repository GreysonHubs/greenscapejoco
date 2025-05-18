document.getElementById('snowalertcloseicon').addEventListener('click', function() {
    var snowAlert = document.getElementById('snowalert');
    var navbar = document.getElementById('navbarcasing');
    snowAlert.style.transition = 'max-height 0.5s ease-out, padding 0.5s ease-out';
    snowAlert.style.overflow = 'hidden';
    snowAlert.style.maxHeight = '0';
    snowAlert.style.padding = '0';
    setTimeout(function() {
        snowAlert.style.display = 'none';
        navbar.style.display = 'none';
    }, 500);
});

AOS.init();