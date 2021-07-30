let inputBox = document.querySelector('#inputBox');
let button = document.querySelector('.btn');
let outputBox = document.querySelector('#outputBox');

let url = "https://api.funtranslations.com/translate/minion.json" ;

button.addEventListener('click', function(){
    let newURL = "https://api.funtranslations.com/translate/minion.json" + "?text=" + inputBox.value;
    fetch(newURL).then(response => response.json())
    .then(json => {outputBox.value = json.contents.translated})
    .catch(() => {alert('some error occured! please try again later!')})
})




