




const container = document.querySelector("#container");

const button = document.querySelector("button");
button.addEventListener("click", getVal);



function getVal() {
    const userValue = document.querySelector("#gridCount").value;

    //show range value

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
    button.removeEventListener("click", getVal);
}


let rangeInput = document.querySelector('input[type="range"]');

let rangeValue = () => {
    newValue = rangeInput.value;
    let showRange = document.querySelector(".showRange");
    showRange.textContent = `${newValue}X${newValue}`;
}

rangeInput.addEventListener("input", rangeValue);
