/***Questions Section***/

function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

function question2() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}

function question3() {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "inline-block";
}

function question4() {
  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "inline-block";
}

function question5() {
  document.getElementById("question4").style.display = "none";
  document.getElementById("question5").style.display = "inline-block";
}

function results() {
  calculateResults()
  document.getElementById("question5").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}

function backtoquiz() {
  document.getElementById("intro").style.display = "inline-block";
  document.getElementById("results").style.display = "none";
  location.reload();
}

/*** Results Calculations***/
function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
    if (rb.checked) {
      q1Value = rb.value;
      break;
    }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
    if (rb.checked) {
      q2Value = rb.value;
      break;
    }
  }

  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
    if (rb.checked) {
      q3Value = rb.value;
      break;
    }
  }

  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
    if (rb.checked) {
      q4Value = rb.value;
      break;
    }
  }

  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
    if (rb.checked) {
      q5Value = rb.value;
      break;
    }
  }
  
  /***Final Results Tabulation***/

  let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
  let result = total / 5;
  if ((result > 0) && (result < 5)) {
    msg = "You answered mostly A. You're going to Arrakis, better take some water.";
  } else if ((result > 5) && (result < 10)) {
    msg = "You answered mostly B. Looks like it's Hoth for you, say hi to Han for me.";
  } else if ((result > 10) && (result <15)) {
    msg = "You answered mostly C. The ringworld is your destination, hope you like walking.";
  } else {
    msg = "Maybe you're better off staying on earth...";
  }
    

  document.getElementById("result").innerHTML = msg

}
