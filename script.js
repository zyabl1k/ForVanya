const wrapper = document.getElementById("wrapper");
const img = document.getElementById("img");
const text = document.getElementById("text");
let counter = 0;

wrapper.onclick = () => {
    Next();
}

function Next() {
    console.log(counter);
    if(counter === 10) {
        counter = 0;
        fetch('text.json')
        .then(response => response.json())
        .then(data => {
            img.src = data.texts[counter].url;
            text.textContent = data.texts[counter].text;
        })
    } else {
        counter++;
        fetch('text.json')
        .then(response => response.json())
        .then(data => {
            img.src = data.texts[counter].url;
            text.textContent = data.texts[counter].text;
        })
    }
}