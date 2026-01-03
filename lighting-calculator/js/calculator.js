document.getElementById("calculateBtn").addEventListener("click", calculate);

function calculate() {
    const length = Number(document.getElementById("length").value);
    const width = Number(document.getElementById("width").value);
    const lux = Number(document.getElementById("lux").value);
    const lumens = Number(document.getElementById("lumens").value);
    const watts = Number(document.getElementById("watts").value);
    const uf = Number(document.getElementById("uf").value);
    const mf = Number(document.getElementById("mf").value);
    const hours = Number(document.getElementById("hours").value);
    const cost = Number(document.getElementById("cost").value);

    const area = length * width;
    const requiredLumens = area * lux;

    const luminaires = Math.ceil(
        requiredLumens / (lumens * uf * mf)
    );

    const installedPowerKW = (luminaires * watts) / 1000;
    const annualEnergy = installedPowerKW * hours;
    const annualCost = annualEnergy * (cost / 100);

    document.getElementById("area").textContent = area.toFixed(2) + " m²";
    document.getElementById("luminaires").textContent = luminaires;
    document.getElementById("power").textContent = installedPowerKW.toFixed(2) + " kW";
    document.getElementById("energy").textContent = annualEnergy.toFixed(0) + " kWh";
    document.getElementById("annualCost").textContent = "£" + annualCost.toFixed(2);
}
