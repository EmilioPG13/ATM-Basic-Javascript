/* window.onload: The load event is fired when the whole page has loades, inlcuding
all dependent resources such as stylesheets and images */
window.onload = function(){
document.getElementById('switchToReg').onclick=switchToReg
document.getElementById('switchToLogin').onclick=switchToLogin


// Switch to register
function switchToReg() {
    document.getElementById('register-portal').style = "display:inline-block"
    document.getElementById('login-portal').style = "display:none"
    }

// Switch to login
    function switchToLogin() {
        document.getElementById('register-portal').style = "display:none"
        document.getElementById('login-portal').style = "display:inline-block"
        }

    
}