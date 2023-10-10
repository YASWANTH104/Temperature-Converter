let celsiusInputElement = document.getElementById("celsiusInputElement");
let kelvinInputElement = document.getElementById("kelvinInputElement");
let fahrenheitElement = document.getElementById("fahrenheitInputElement");

function convertingAll() {
    let c = celsiusInputElement.value;
    let k = kelvinInputElement.value;
    let f = fahrenheitElement.value;
    let wmsg = document.getElementById("warningMessage");
    if (c !== "" && k === "" && f === "") {
        let co = parseFloat(c);
        let fo = c * (9 / 5) + 32;
        let ko = (co) + 273.15;
        kelvinInputElement.value = ko;
        fahrenheitElement.value = fo;
        wmsg.textContent = "";
    } else if (c === "" && k !== "" && f === "") {
        let ko = parseFloat(k);
        let fo = (ko - 273.15) * (9 / 5) + 32;
        let co = ko - 273.15;
        celsiusInputElement.value = co;
        fahrenheitElement.value = fo;
        wmsg.textContent = "";
    } else if (c === "" && k === "" && f !== "") {
        let fo = parseFloat(f);
        let ko = (fo - 32) * (5 / 9) + 273.15;
        let co = (fo - 32) * (5 / 9);
        celsiusInputElement.value = co;
        kelvinInputElement.value = ko;
        wmsg.textContent = "";
    } else {
        wmsg.textContent = "Please enter valid input!!!";
        wmsg.style.color = "red";
        wmsg.style.fontSize = "20px";
        wmsg.classList.add("wmsg");
    }


}

function resetAll() {
    celsiusInputElement.value = "";
    fahrenheitElement.value = "";
    kelvinInputElement.value = "";
    let wmsg = document.getElementById("warningMessage");
    wmsg.textContent = "";
}