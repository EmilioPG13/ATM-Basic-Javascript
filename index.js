/* window.onload: The load event is fired when the whole page has loades, inlcuding
all dependent resources such as stylesheets and images */
window.onload = function(){
document.getElementById('swithToReg').onclick=swithToReg

// Switch to register
function switchToReg() {
    document.getElementById('register-portal').style = "display:inline-block"
    document.getElementById('login-portal').style = "display:none"

    }
}