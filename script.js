var sessionTableBody = document.getElementById("session-table-body");
var counttimer=document.getElementById("timer");
var sessionButton=document.getElementById("start-session-btn");
function getRandomCounterValue() {
  return Math.floor(Math.random() * 91) + 30;
}
function displaysession() {
  var sessionId = generateSessionId();
  const counterValue = getRandomCounterValue();
  counttimer.innerText=counterValue;
  var startTime = new Date();
  var endTime = new Date(startTime.getTime() + (30 * 60 * 1000));
  var newRow = document.createElement("tr");
  var sessionIdCell = document.createElement("td");
  sessionIdCell.innerText = sessionId;
  newRow.appendChild(sessionIdCell);
  var startTimeCell = document.createElement("td");
  startTimeCell.innerText = formatDateTime(startTime);
  newRow.appendChild(startTimeCell);
  var endTimeCell = document.createElement("td");
  endTimeCell.innerText = formatDateTime(endTime);
  newRow.appendChild(endTimeCell);
  sessionTableBody.appendChild(newRow);
}
function generateSessionId() {
  var sessionId = "";
  var characters = "0123456789";
  for (var i = 0; i < 4; i++) {
    sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return sessionId;
}
function formatDateTime(dateTime) {
  var year = dateTime.getFullYear();
  var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
  var day = ("0" + dateTime.getDate()).slice(-2);
  var hours = ("0" + dateTime.getHours()).slice(-2);
  var minutes = ("0" + dateTime.getMinutes()).slice(-2);
  var seconds = ("0" + dateTime.getSeconds()).slice(-2);
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}

var audio = new Audio("clock1.mp3");
sessionButton.addEventListener("click", () => {
        audio.play();
});

audio.pause()
sessionButton.addEventListener("click", displaysession);
