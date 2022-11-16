
//show range value
let rangeInput = document.querySelector('input[type="range"]');
let rangeValue = () => {
    newValue = rangeInput.value;
    let showRange = document.querySelector(".showRange");
    showRange.textContent = `${newValue}X${newValue}`;
}
rangeInput.addEventListener("input", rangeValue);

const container = document.querySelector("#container");

//Submit button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", getVal);
//Resert Button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    window.location.reload();
});

//For default page
const userValue = document.querySelector("#gridCount").value;
console.log(userValue);
createGrid(userValue);
showColor();

function removeExistDivs() {
    container.innerHTML = "";
}

function getVal() {
    removeExistDivs();
    const userValue = document.querySelector("#gridCount").value;
    console.log(userValue);
    createGrid(userValue);
    showColor();
    stopCreate();

}

function createGrid(userVal) {


    for (let i = 0; i < userVal; i++) {
        const container1 = document.createElement("div");
        container1.classList.add("container1");
        container.appendChild(container1);

        for (let i = 1; i <= userVal; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute('style', 'border:2px solid black; border-radius:3px');
            container1.appendChild(squareDiv);
            squareDiv.classList.add("flex");
        }
    }
}

function showColor() {
    const hoverDivs = document.querySelectorAll(".flex");
    hoverDivs.forEach(hoverDiv => {
        hoverDiv.addEventListener("mouseover", () => {
            hoverDiv.classList.add("hoverColor");
        });
    });
}

function stopCreate() {
    submitButton.removeEventListener("click", getVal);
}
