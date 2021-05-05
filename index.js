function load() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("home").style.height = window.screen.availHeight + "px";
        document.body.style.fontFamily = "Arial";
    }
    document.body.removeAttribute("style");
}

function navigate(val) {
    $('html,body').animate({ scrollTop: $('#' + val).offset().top }, 'slow');
}

function tolinkedin() {
    location.replace('https://www.linkedin.com/in/ron-yitzhak1990');
}
