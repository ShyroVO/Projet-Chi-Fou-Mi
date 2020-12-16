let chiFouMiScreen = document.getElementById('chiFouMiScreen');

// Points:
let userPts = 0;
let ordiPts = 0;
document.getElementById('userPts').innerHTML = userPts;
document.getElementById('ordiPts').innerHTML = ordiPts;

// Chi Fou Mi Icônes:
let chi = document.createElement('img');
chi.src = "chi.png";
chi.style.width = 10+"rem";
chi.style.height = 13+"rem";

let fou = document.createElement('img');
fou.src = "fou.png";
fou.style.width = 10+"rem";
fou.style.height = 13+"rem";

let mi = document.createElement('img');
mi.src = "mi.png";
mi.style.width = 10+"rem";
mi.style.height = 13+"rem";

// Chi Fou Mi IcônesPc:
let chiPc = document.createElement('img');
chiPc.src = "chi.png";
chiPc.style.width = 10+"rem";
chiPc.style.height = 13+"rem";

let fouPc = document.createElement('img');
fouPc.src = "fou.png";
fouPc.style.width = 10+"rem";
fouPc.style.height = 13+"rem";

let miPc = document.createElement('img');
miPc.src = "mi.png";
miPc.style.width = 10+"rem";
miPc.style.height = 13+"rem";

// Start:
let buttonStart = document.createElement('button');
buttonStart.innerHTML = "Start !";
buttonStart.classList.add('startButton');
chiFouMiScreen.appendChild(buttonStart);

buttonStart.addEventListener('click', startGame );

function startGame(){
    chiFouMiScreen.removeChild(buttonStart);
    carteUser();

}

function carteUser (){
    chiFouMiScreen.appendChild(chi);
    chi.style.border = "none";
    chiFouMiScreen.appendChild(fou);
    fou.style.border = "none";
    chiFouMiScreen.appendChild(mi);
    mi.style.border = "none";
}

//ORDI:
let ordiChoixChiFouMi;

function getRandom () {
    return Math.floor(Math.random()* 3);
}

let ordiChoix;

function choixOrdi () {
    console.log("random vaut: " + getRandom());
    console.log(ordiChoix);

    if (ordiChoix === 0) {
        ordiChoixChiFouMi = "Chi";
        chiFouMiScreen.appendChild(chiPc);
        chiPc.style.border = "solid red 0.5rem";
    }
    else if (ordiChoix === 1) {
        ordiChoixChiFouMi = "Fou";
        chiFouMiScreen.appendChild(fouPc);
        fouPc.style.border = "solid red 0.5rem";
    }
    else if (ordiChoix === 2) {
        ordiChoixChiFouMi = "Mi";
        chiFouMiScreen.appendChild(miPc);
        miPc.style.border = "solid red 0.5rem";
    }

    results();
}

// USER:
let userChoix = 0;
let userChoixChiFouMi;

chi.addEventListener('click', function choixChi(){
    chi.style.border = "solid darkseagreen 0.5rem";
    userChoix = 0;
    userChoixChiFouMi = "Chi";
    ordiChoix = getRandom();

    chiFouMiScreen.removeChild(fou);
    chiFouMiScreen.removeChild(mi);
    choixOrdi()

});

fou.addEventListener('click', function choixFou(){
    fou.style.border = "solid darkseagreen 0.5rem";
    userChoix = 1;
    userChoixChiFouMi = "Fou";
    ordiChoix = getRandom();

    chiFouMiScreen.removeChild(chi);
    chiFouMiScreen.removeChild(mi);
    choixOrdi()
});

mi.addEventListener('click', function choixMi(){
    mi.style.border = "solid darkseagreen 0.5rem";
    userChoix = 2;
    userChoixChiFouMi = "Mi";
    ordiChoix = getRandom();

    chiFouMiScreen.removeChild(chi);
    chiFouMiScreen.removeChild(fou);
    choixOrdi()
});

// Results:
function results (){
    if (userChoix === 0 && ordiChoix === 0 || userChoix === 1 && ordiChoix === 1 || userChoix === 2 && ordiChoix === 2 ) {
        getRandom();
        setTimeout(relance, 2000);
    }

    else if (userChoix === 0 && ordiChoix === 2 || userChoix === 1 && ordiChoix === 0 || userChoix === 2 && ordiChoix === 1 ) {
        getRandom();
        userPts++
        document.getElementById('userPts').innerHTML = userPts;
        setTimeout(relance, 2000);
    }

    else if (userChoix === 2 && ordiChoix === 0 || userChoix === 0 && ordiChoix === 1 || userChoix === 1 && ordiChoix === 2 ) {
        getRandom();
        ordiPts++
        document.getElementById('ordiPts').innerHTML = ordiPts;
        setTimeout(relance, 2000);
    }

}

// Relance:
function relance () {
    chiFouMiScreen.innerHTML= "";
    carteUser();
    historique();
}

// Historique:
function historique () {
    document.getElementById('historique').innerHTML += "Ordi: " + ordiChoixChiFouMi + " - " + "User: " + userChoixChiFouMi + "<br>";
}
