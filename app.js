

// pre loader start
 function loader() {
     document.querySelector('.loader-container').classList.add('fade-out');
 }
 function fadeOut() {
     setInterval(loader, 500);
 }
 window.onload = fadeOut;
// pre loader end



// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Bug 🐛", "Student🧑", "Hustler  🚵", "", ""],
    loop: true,
    typeSpeed: 40,
    backSpeed: 15,
    backDelay: 500,
});
// <!-- typed js effect ends -->



