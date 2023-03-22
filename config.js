function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    PlayerConfigOverlay.style.display = 'block'
    backDrop.style.display = 'block'
}

function closePlayerConfig() {
    PlayerConfigOverlay.style.display = 'none'
    backDrop.style.display = 'none'
    FormEle.firstElementChild.classList.remove('error')
    ErrorCOnfig.textContent = '';
    FormEle.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const enteredPlayerName = formData.get('user-name').trim();

    if(!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        ErrorCOnfig.textContent = 'Please a valid name!';
        return;
    }

    const updatedPlayerDataEle = document.getElementById('player'+ editedPlayer +'-data')
    updatedPlayerDataEle.children[1].textContent = enteredPlayerName;

   players[editedPlayer-1].nam = enteredPlayerName;

   closePlayerConfig();
}