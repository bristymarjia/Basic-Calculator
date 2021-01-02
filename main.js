const display = document.getElementById("display")
document.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const currentText = e.target.innerText
        if (currentText === "C") {
            display.value = ""
            return;
        }
        if (currentText === "←") {
            display.value = display.value.slice(0, -1)
            return;
        }
        if (currentText === "=") {
            display.value = eval(display.value)
            return;
        }
        if (currentText < "0" || currentText > "9") {
            if (display.value.length === 0)
                return;
            if (["+", "-", ".", "*", "/"].includes(display.value[display.value.length - 1])) {
                return;
            }
        }
        display.value += currentText
    }
})


document.getElementById("equal").addEventListener("dblclick", function () {
    alert(atob("Tm8gQW5zd2VyIEZvdW5k"))
})