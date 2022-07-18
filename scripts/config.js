function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // gg
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}


function closerPlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  let restplayername = document.getElementById("playername");
  restplayername.value = "";
}







function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enterdPlayerName = formData.get("playername").trim();
  console.log(enterdPlayerName);

  if (!enterdPlayerName) {
    // enterdPlayerName === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "pleas enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enterdPlayerName;

  players[editedPlayer - 1].name = enterdPlayerName;
  closerPlayerConfig();
}


