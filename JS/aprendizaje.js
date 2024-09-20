// Se toman los botones de las cards y sus respectivos mensajes al hacerles click:

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn1Msg = document.getElementById("btn1-msg")
const btn2Msg = document.getElementById("btn2-msg")
const btn3Msg = document.getElementById("btn3-msg")
const btn4Msg = document.getElementById("btn4-msg")
const gamesBtn = document.getElementById("games-btn")
const inputGames = document.getElementById("input-games")
const formPlayers = document.getElementById("formPlayers")


// Misma respuesta al evento click para cada botón: 

btn1.addEventListener('click', () => {
    btn1Msg.style.display="block";
    btn2Msg.style.display="none";
    btn3Msg.style.display="none";
    btn4Msg.style.display="none";
});

btn2.addEventListener('click', () => {
    btn2Msg.style.display="block";
    btn1Msg.style.display="none"
    btn3Msg.style.display="none"
    btn4Msg.style.display="none"
});
btn3.addEventListener('click', () => {
    btn3Msg.style.display="block";
    btn1Msg.style.display="none"
    btn2Msg.style.display="none"
    btn4Msg.style.display="none"
});

btn4.addEventListener('click', () => {
    btn4Msg.style.display="block";
    btn1Msg.style.display="none"
    btn2Msg.style.display="none"
    btn3Msg.style.display="none"
});

gamesBtn.addEventListener('click', () => {
    window.open('https://www.365chess.com/chess-games.php?wlname=' + inputGames.value, '_blank');
})