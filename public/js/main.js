const container = document.getElementById("container");

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function makeRows(rows, cols) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }

    let placeColor = document.querySelectorAll(".grid-item");
    let actuColor;

    placeColor.forEach(item => {
        item.addEventListener("mouseover", () => {
            actuColor = random_rgba();
            item.style.transition = ''
            item.style.backgroundColor = actuColor;
            item.style.boxShadow = `0px 0px 22px ${actuColor}`; 
        });
        item.addEventListener("mouseout", () => {
            item.style.transition = 'all 0.5s ease'
            item.style.backgroundColor = '#5E4B86';
            item.style.boxShadow = '';
        });
    });
}

makeRows(20, 20);