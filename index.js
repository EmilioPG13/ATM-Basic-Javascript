/* window.onload: The load event is fired when the whole page has loades, including
all dependent resources such as stylesheets and images */
window.onload = function(){
document.getElementById('switchToReg').onclick=switchToReg
document.getElementById('switchToLogin').onclick=switchToLogin
document.getElementById('login-btn').onclick = loginValidation
document.getElementById('register-btn').onclick = registerValidation



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

    //Account Number and Pin pattern
    let AccNoPat = "^[0-9]{6}$"  //I only allow an account with a 6 digit number
    let accPinPat = "^[0-9]{4}$" //I only allow a pin with a 4 digit number

    // Login validation
        function loginValidation(){
            let lAccNo = document.getElementById('lAccNo').value
            let lAccPin = document.getElementById('lAccPin').value
            if(lAccNo.match(AccNoPat) && lAccPin.match(accPinPat)){
                alert("welcome")
                portal(lAccNo,lAccPin)
            } else {
                document.getElementById('errMsg').innerHTML = 'Enter a valid account or pin'
            }
        }

    //Register validation
    function registerValidation(){
    let rAccName = document.getElementById('rAccName').value
    let rAccNo = document.getElementById('rAccNo').value
    let rAccPin = document.getElementById('rAccPin').value
    let rConAccPin = document.getElementById('rConAccPin').value
    if(rAccName!==null && rAccNo.match(AccNoPat) && rAccPin.match(accPinPat) && rAccPin == rConAccPin) {
        alert("Registered")
    } else {
        alert("Please enter valid details")
        }
    }
}

//Portal
function portal(accNo, accPin){
    document.getElementById('login-portal').style = 'display:none'
    document.getElementById('register-portal').style = 'display:none'
    document.getElementById('portal').style = 'display:inline-block'

    let name, avalBal, totalBal, recievedAmt
}