const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function togglemenu() {

    linkList.classList.toggle('link_list_visible')

    burger.classList.toggle('cross')

    burger.addEventListener('click', togglemenu)
}

burger.addEventListener('click', togglemenu)

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = time;
  
    setTimeout(updateClock, 1000);
  }
  
  updateClock();

  function getRandomLevel() {
    var levels = ["låg", "medel", "hög"];
    var randomIndex = Math.floor(Math.random() * levels.length);
    return levels[randomIndex];
  }
  
  window.addEventListener("load", function() {
    var level = getRandomLevel();
    document.getElementById("level").textContent = level;
  });

  window.onload = function() {
    var randomNumber = Math.floor(Math.random() * 101);
    document.getElementById("availability").textContent = "Antal boenden tillgängliga: " + randomNumber;
  };