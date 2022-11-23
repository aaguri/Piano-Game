let sec = document.querySelectorAll("section");
let Score = document.querySelector("#score");
let over = document.querySelector("#Over");

let div;
sec.forEach((e) => {
    div = document.createElement("div");
    e.appendChild(div);
    div.setAttribute("PIN", 123);
    div.setAttribute("class", "test")
})

let points = 0;

let x = document.querySelectorAll(".test")
for (let y of x) {
    y.addEventListener("click", (event) => {
        over.style.display = "none"

        if (123 == event.target.getAttribute("PIN")) {
            let x = points++;
            Score.innerText = `Score : ${x} Points`;

        }

    })
}

for (let h of sec) {
    h.addEventListener("click", () => {
        if (event.target.getAttribute("PIN") != 123) {
            over.innerText = "GAME OVER !";
            over.style.display = "block"
            for (let i of x) {
                i.style.display = "none";
            }

        }
    })
}







