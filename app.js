// pre loader start
 function loader() {
     document.querySelector('.loader-container').classList.add('fade-out');
 }
 function fadeOut() {
     setInterval(loader, 500);
 }
 window.onload = fadeOut;
// pre loader end