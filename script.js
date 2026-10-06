const generateButton = document.getElementById("generate-button");
const arrayContainer = document.getElementById("array-container");
const sortButton = document.getElementById("sort-button");

let array = [];

generateButton.addEventListener("click", generateArray);
sortButton.addEventListener("click", bubbleSort);

function generateArray() {

    array = [];

    for (let i = 0; i < 30; i++) {

        const value =
            Math.floor(Math.random() * 300) + 20;

        array.push(value);
    }

    renderArray();
}

function renderArray() {

    arrayContainer.innerHTML = "";

    for (let i = 0; i < array.length; i++) {

        const bar = document.createElement("div");

        bar.classList.add("bar");

        bar.style.height = `${array[i]}px`;

        arrayContainer.appendChild(bar);
    }
}

function bubbleSort() {

    for (let i = 0; i < array.length; i++) {

        for (
            let j = 0;
            j < array.length - i - 1;
            j++
        ) {

            if (array[j] > array[j + 1]) {

                const temp = array[j];

                array[j] = array[j + 1];

                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
    renderArray();
}

generateArray();