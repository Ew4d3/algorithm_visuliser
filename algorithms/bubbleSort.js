export function bubbleSort(array) {  //standard bubble sort alg

    const operations = [];

    const copy = [...array];  //copy of arr

    for (let i = 0; i < copy.length; i++) {

        for (
            let j = 0;
            j < copy.length - i - 1;
            j++
        ) {

            operations.push({
                type: "compare",
                indices: [j, j + 1]
            });

            if (copy[j] > copy[j + 1]) {

                const temp = copy[j];  //temp var for swap

                copy[j] = copy[j + 1];

                copy[j + 1] = temp;

                operations.push({  
                    type: "swap",
                    indices: [j, j + 1]
                });
            }
        }

        operations.push({
            type: "sorted",
            index: copy.length - i - 1
        });
    }

    return operations;
}







