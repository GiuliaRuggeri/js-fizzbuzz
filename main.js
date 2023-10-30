const fizz = "fizz"
const buzz = "buzz"

const container = document.getElementById("container")

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${fizz}${buzz}`);
        let box = document.createElement("div");
        box.innerHTML = (`${fizz}${buzz}`);
        box.classList.add("square");
        box.classList.add("orange");
        container.append(box);


    }

    else if (i % 3 == 0) {
        console.log(fizz);
        let box = document.createElement("div");
        box.innerHTML = (`${fizz}`);
        box.classList.add("square");
        box.classList.add("green");
        container.append(box);
    }

    else if (i % 5 == 0) {
        console.log(buzz);
        let box = document.createElement("div");
        box.innerHTML = (`${buzz}`);
        box.classList.add("square");
        box.classList.add("violet");
        container.append(box);
    }

    else {
        console.log(i);
        let box = document.createElement("div");
        box.innerHTML = (`${i}`);
        box.classList.add("square");
        box.classList.add("blue");
        container.append(box);
    }


}