
//Function to scroll page back to the top
function backToTop(){
    window.scrollTo({top: 0, behavior: "smooth"});
}

function passwordStrength() {
    let password = document.getElementById("password").value; //retreives the password
    let strength_points=0

//below uses regex to scan the password input
    if(/[a-z]/.test(password) == true){// checks for lowercase letters
        strength_points += 1;
    }

    if(/[A-Z]/.test(password) == true){// checks for uppcase letters
        strength_points += 1;
    }

    if (/[0-9]/.test(password) == true) {//checks for numbers
        strength_points += 1;
    }

    if (/[$@#&!?%*()-+=/£]/.test(password) == true) {//checks for special characters
        strength_points += 1;
    }

//below displays the strength of the password depending on how many points it gained above
    if (strength_points === 0){
        document.getElementById('strength').innerHTML = 'Password is very weak'
        document.getElementById('strength').style.color = "red"
        document.getElementById('strengthDivBar').style.background = "red"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.width = "33%"

    }else if (strength_points == 1){
        document.getElementById('strength').innerHTML = 'Password is very weak'
        document.getElementById('strength').style.color = "red"
        document.getElementById('strengthDivBar').style.background = "red"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.width = "33%"

    }else if (strength_points == 2){
        document.getElementById('strength').innerHTML = 'Password is medium strength'
        document.getElementById('strength').style.color = "orange"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.background = "orange"
        document.getElementById('strengthDivBar').style.width = "66%"
    }else if (strength_points == 3){
        document.getElementById('strength').innerHTML = 'Password is strong'
        document.getElementById('strength').style.color = "green"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.background = "green"
        document.getElementById('strengthDivBar').style.width = "100%"

    }else if (strength_points == 4){
        document.getElementById('strength').innerHTML = 'Password is very strong'
        document.getElementById('strength').style.color = "green"
        document.getElementById('strengthDivBar').style.background = "green"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.width = "100%"

    }
}

let pop = document.getElementById("itemPopup");

function itemPopup(buttonID){

    if(buttonID === "b1"){
        document.getElementById("popImg").src = "../images/case2.png";
        document.getElementById("popH2").innerHTML = "Grey case";
    }else if(buttonID === "b2"){
        document.getElementById("popImg").src = "../images/duckCaseClear.png";
        document.getElementById("popH2").innerHTML = "Duck case";
    }else if(buttonID === "b3"){
        document.getElementById("popImg").src = "../images/greenCaseClear.png";
        document.getElementById("popH2").innerHTML = "Green wave case";
    }else if(buttonID === "b4"){
        document.getElementById("popImg").src = "../images/dogCaseClear.png";
        document.getElementById("popImg").style.width = "380px"
        document.getElementById("popImg").style.height = "580px"
        document.getElementById("popH2").innerHTML = "Kinda chill dude dog case";
    }else if(buttonID === "b5"){
        document.getElementById("popImg").src = "../images/case2.png";
        document.getElementById("popH2").innerHTML = "Grey case";
    }else if(buttonID === "b6"){
        document.getElementById("popImg").src = "../images/dogCase2clear.png";
        document.getElementById("popH2").innerHTML = "German shepherd case";
    }else if(buttonID === "b7"){
        document.getElementById("popImg").src = "../images/case2.png";
        document.getElementById("popH2").innerHTML = "Grey case";
    }else if(buttonID === "b8"){
        document.getElementById("popImg").src = "../images/case2.png";
        document.getElementById("popH2").innerHTML = "Grey case";
    }else if(buttonID === "b9"){
        document.getElementById("popImg").src = "../images/case2.png";
        document.getElementById("popH2").innerHTML = "Grey case";
    }


    else if(buttonID === "s1"){
        document.getElementById("popImg").src = "../images/privacyScreenClear.png";
        document.getElementById("popH2").innerHTML = "Privacy protector";
        document.getElementById("popH3").innerHTML = "$16.99";
    }else if(buttonID === "s2"){
        document.getElementById("popImg").src = "../images/3packClear.png";
        document.getElementById("popH2").innerHTML = "Save money with the 3 pack!";
        document.getElementById("popH3").innerHTML = "$24.99";
    }else if(buttonID === "s3"){
        document.getElementById("popImg").src = "../images/glassProtectorClear.png";
        document.getElementById("popH2").innerHTML = "Our strongest glass protector";
        document.getElementById("popH3").innerHTML = "$14.99";
    }else if(buttonID === "s4"){
        document.getElementById("popImg").src = "../images/plasticClear.png";
        document.getElementById("popH2").innerHTML = "Back to basics. The plastic protector.";
        document.getElementById("popH3").innerHTML = "$7.99";
    }else if(buttonID === "s5" || buttonID === "s6") {
        document.getElementById("popImg").src = "../images/hammerprotectorclear.png";
        document.getElementById("popH2").innerHTML = "Smash proof protector";
        document.getElementById("popH3").innerHTML = "$9.99";
    }

    window.scrollTo({top: 0, behavior: "smooth"});

    document.getElementById("quantity").value = 1;
    pop.classList.add("openPopup")
}


function registerPopup(){
    window.scrollTo({top: 0, behavior: "smooth"});
    pop.classList.add("openPopup")
}

function closePopup(){
    pop.classList.remove("openPopup")
}

