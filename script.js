// Variable Declarations
var basicIncome = 1;
var workMultiplier = 1;
var userMoney = 0;
var numWorker = 0;
var workerIncome = 10;
var workerCost = 100;
var numFactory = 0;
var factoryIncome = 100;
var factoryCost = 1000;
var numKilofactory = 0;
var kilofactoryIncome = 1000;
var kilofactoryCost = 10000;
var numMegafactory = 0;
var megafactoryIncome = 10000;
var megafactoryCost = 100000;
var nosecone = false;
var cockpit = false;
var fuel = false;
var frame = false;
var oxidizer = false;
var pumps = false;
var nozzle = false;
var fins = false;
var readyToLaunch = false;

// Functions
function work() {
    userMoney += basicIncome * workMultiplier;
    document.getElementById("userMoney").innerHTML = userMoney;
    if (userMoney == 5) {
        document.getElementById("instructions").innerHTML = "";
    }
}

function worker() {
    userMoney += workerIncome * numWorker;
    document.getElementById("userMoney").innerHTML = userMoney;
}

function buyWorker() {
    if (userMoney < workerCost) {
        alert("You don't have enough for a worker.");
        return;
    }
    numWorker++;
    userMoney -= workerCost;
    workerCost = Math.round(workerCost * 1.25);
    document.getElementById("workerCost").innerHTML = workerCost;
    document.getElementById("workerProduction").innerHTML = numWorker * workerIncome;
    document.getElementById("numWorker").innerHTML = numWorker;
    totalProduction();
}

function factory() {
    userMoney += factoryIncome * numFactory;
    document.getElementById("userMoney").innerHTML = userMoney;
}

function buyFactory() {
    if (userMoney < factoryCost) {
        alert("You don't have enough for a factory.");
        return;
    }
    numFactory++;
    userMoney -= factoryCost;
    factoryCost = Math.round(factoryCost * 1.25);
    document.getElementById("factoryCost").innerHTML = factoryCost;
    document.getElementById("factoryProduction").innerHTML = numFactory * factoryIncome;
    document.getElementById("numFactory").innerHTML = numFactory;
    totalProduction();
}

function kilofactory() {
    userMoney += kilofactoryIncome * numKilofactory;
    document.getElementById("userMoney").innerHTML = userMoney;
}

function buyKilofactory() {
    if (userMoney < kilofactoryCost) {
        alert("You don't have enough for a kilofactory.");
        return;
    }
    numKilofactory++;
    userMoney -= kilofactoryCost;
    kilofactoryCost = Math.round(kilofactoryCost * 1.25);
    document.getElementById("kilofactoryCost").innerHTML = kilofactoryCost;
    document.getElementById("kilofactoryProduction").innerHTML = numKilofactory * kilofactoryIncome;
    document.getElementById("numKilofactory").innerHTML = numKilofactory;
    totalProduction();
}

function megafactory() {
    userMoney += megafactoryIncome * numMegafactory;
    document.getElementById("userMoney").innerHTML = userMoney;
}

function buyMegafactory() {
    if (userMoney < megafactoryCost) {
        alert("You don't have enough for a megafactory.");
        return;
    }
    numMegafactory++;
    userMoney -= megafactoryCost;
    megafactoryCost = Math.round(megafactoryCost * 1.25);
    document.getElementById("megafactoryCost").innerHTML = megafactoryCost;
    document.getElementById("megafactoryProduction").innerHTML = numMegafactory * megafactoryIncome;
    document.getElementById("numMegafactory").innerHTML = numMegafactory;
    totalProduction();
}

function buyNosecone() {
    purchaseRocketPart("nosecone", 1000000, "Nose Cone");
}

function buyCockpit() {
    purchaseRocketPart("cockpit", 1500000, "Cockpit");
}

function buyFuel() {
    purchaseRocketPart("fuel", 2000000, "Fuel");
}

function buyFrame() {
    purchaseRocketPart("frame", 2500000, "Frame");
}

function buyOxidizer() {
    purchaseRocketPart("oxidizer", 3000000, "Oxidizer");
}

function buyPumps() {
    purchaseRocketPart("pumps", 3500000, "Pumps");
}

function buyNozzle() {
    purchaseRocketPart("nozzle", 4000000, "Nozzle");
}

function buyFins() {
    purchaseRocketPart("fins", 4500000, "Fins");
}

function purchaseRocketPart(part, cost, name) {
    if (userMoney < cost) {
        alert(`You don't have enough for ${name}.`);
        return;
    }
    if (window[part]) {
        alert(`You already have ${name}.`);
        return;
    }
    window[part] = true;
    userMoney -= cost;
    document.getElementById(part).innerHTML = "";
    document.getElementById(`${part}Price`).innerHTML = "PURCHASED";
    checkLaunchStatus();
}

function checkLaunchStatus() {
    if (nosecone && cockpit && fuel && frame && oxidizer && pumps && nozzle && fins) {
        readyToLaunch = true;
        document.getElementById("rocketStatus").innerHTML = "READY!";
    }
}

function launchRocket() {
    if (!readyToLaunch) {
        alert("ROCKET NOT READY!");
        return;
    }
    if (userMoney < 10000000) {
        alert("You don't have enough money to launch the rocket!");
        return;
    }
    document.getElementById("rocketStatus").innerHTML = "LAUNCHED!!!";
    document.getElementById("header").innerHTML = "ROCKET LAUNCHED - GAME WON!!!";
    document.body.style.backgroundColor = "red";
    alert("Congrats! YOU HAVE WON THE GAME.");
}

function totalProduction() {
    const workerProduction = numWorker * workerIncome;
    const factoryProduction = numFactory * factoryIncome;
    const kilofactoryProduction = numKilofactory * kilofactoryIncome;
    const megafactoryProduction = numMegafactory * megafactoryIncome;
    document.getElementById("totalProduction").innerHTML = workerProduction + factoryProduction + kilofactoryProduction + megafactoryProduction;
}

window.setInterval(function () {
    worker();
    factory();
    kilofactory();
    megafactory();
}, 1000);
