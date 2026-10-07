export async function executeOperation(   //for creating actual bars etc
    operation,
    array,
    arrayContainer,
    speedSlider
) {
    const bars =
        arrayContainer.querySelectorAll(".bar");

    if (operation.type === "compare") {  //orange bars to be compared

        const [first, second] = operation.indices;

        bars[first]
            .classList.add("comparing");

        bars[second]
            .classList.add("comparing");

        await sleep(
            Number(speedSlider.value)  //stops + waits dep on speed val + continues
        );

        bars[first]
            .classList.remove("comparing");

        bars[second]
            .classList.remove("comparing");
    }

    if (operation.type === "swap") {  //swapping of orange bars

        const [first, second] =
            operation.indices;

        const temp = array[first];

        array[first] =
            array[second];

        array[second] =
            temp;

        bars[first].style.height =
            `${array[first]}px`;

        bars[second].style.height =
            `${array[second]}px`;

        await sleep(
            Number(speedSlider.value)  //stops + waits dep on speed val + continues
        );
    }

    if (operation.type === "sorted") {

        bars[operation.index]
            .classList.add("sorted");
    }
}


function sleep(ms) {  //stops + waits dep on speed val + continues
    return new Promise( //promise= something that will happen in future
        resolve => setTimeout(resolve, ms)
    );
}







