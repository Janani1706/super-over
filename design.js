var scoreList = [0, 1, 2, 3, 4, 6, "w"];
var toss = Math.ceil(Math.random() * 2);
updateStrike();
function updateStrike() {
  if (toss == 1) document.getElementById("strike").value = "CSK Batting";
  else document.getElementById("strike").value = "MI Batting";
}
var count1 = 0;
var count2 = 0;
var w1count = 0;
var w2count = 0;
var cskscore = 0;
var miscore = 0;
var team1 = [];
var team2 = [];
function handleStrike() {
  if (toss == 1) {
    if (count1 != 6 && w1count != 2) {
      var s = scoreList[Math.floor(Math.random() * 7)];
      console.log(s);
      team1.push(s);
      if (s == "w") {
        w1count++;
      } else {
        cskscore = cskscore + parseInt(s);
        document.getElementById("cskscore").textContent = cskscore;
      }
      count1++;
      updateScores();
    } else {
      if (miscore == 0) {
        toss = 2;
        updateStrike();
      } else {
        if (cskscore > miscore)
          document.getElementById("res").textContent = "CSK WINS!!!";
        else if (miscore > cskscore)
          document.getElementById("res").textContent = "MI WINS!!!";
        else document.getElementById("res").textContent = "Match DRAW!!!";
      }
    }
  } else {
    if (count2 != 6 && w2count != 2) {
      var s = scoreList[Math.floor(Math.random() * 6)];
      console.log(s);
      team2.push(s);
      if (s == "w") {
        w2count++;
      } else {
        miscore = miscore + parseInt(s);
        document.getElementById("miscore").textContent = miscore;
      }
      count2++;
      updateScores();
    } else {
      if (cskscore == 0) {
        toss = 1;
        updateStrike();
      } else {
        if (cskscore > miscore)
          document.getElementById("res").textContent = "CSK WINS!!!";
        else if (miscore > cskscore)
          document.getElementById("res").textContent = "MI WINS!!!";
        else document.getElementById("res").textContent = "Match DRAW!!!";
      }
    }
  }
}

function updateScores() {
  var team1Value = document.getElementById("cskscores").children;
  for (let i = 0; i < team1.length; i++) {
    team1Value[i].textContent = team1[i];
  }

  var team2Value = document.getElementById("miscores").children;
  for (let i = 0; i < team2.length; i++) {
    team2Value[i].textContent = team2[i];
  }
}
