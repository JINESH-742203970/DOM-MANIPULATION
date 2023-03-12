const btnL = document.getElementById("btnL");
const btnR = document.getElementById("btnR");
const data = document.getElementById("data");
const reset = document.getElementById("reset");
btnL.addEventListener("click", () => {
    const value = Number(data.innerText);
    if (value > 0)
        data.innerText = value - 1;
    else
        alert("Negative value not allowed")

})
btnR.addEventListener("click", () => {
    const value = Number(data.innerText);
    if (value >= 10)
        alert("10+ values are not allowed");
    else
        data.innerText = value + 1;
})
reset.addEventListener("click", () => {
    data.innerText = 0;
})
