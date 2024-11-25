var currentTheme = "main";

function updateImage(src) {
    let imgElement = document.querySelector("img");

    if (!imgElement) {
        imgElement = document.createElement("img");
        document.body.appendChild(imgElement);
    }

    imgElement.src = src;
}

function Blue(theme) {
    if (currentTheme === "blue") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.fontFamily = "Arial, sans-serif";
        currentTheme = "blue";
    }
}

function Pink(theme) {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#ffafcc";
        document.body.style.color = "black";
        document.body.style.fontFamily = "'Comic Sans MS', cursive";
        currentTheme = "pink";
    }
}

function Brown(theme) {
    if (currentTheme === "#3b1a02") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#a98467";
        document.body.style.color = "white";
        document.body.style.fontFamily = "'Times New Roman', Times, serif";
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundColor = "#8d99ae";
    document.body.style.color = "black";
    document.body.style.fontFamily = "default";
    currentTheme = "main";
}