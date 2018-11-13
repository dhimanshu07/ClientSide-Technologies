var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
let mx_score;
var $ = function (id) {
    return document.getElementById(id);
};

var addScore = function () {
    let name = $("name").value;
    let score = $("score").value;
    if (name == "") {
        alert("Please Enter Name");
        $("name").focus();
    } else {
        names.push(name);
        $("name").value = "";
    }
    if (score == "") {
        alert("Please Enter Score");
        $("score").focus();
    } else {
        scores.push(score);
        $("score").value = "";
    }
    $("name").focus();
     displayResults();
      displayScores();
}
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
var displayResults = function () {
    let sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += parseInt(scores[i], 10);
    }
    let avg = sum / scores.length;
    let mx_score = indexOfMax(scores);

    let max_score = scores[mx_score];
    let max_name = names[mx_score];
   
    let results = document.getElementById("results");
     results.innerHTML="";
    let header = document.createElement("h2");
    let text = document.createTextNode("Results");
    header.appendChild(text);

    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let average = document.createTextNode("Average score is: " + avg);
    let high_score = document.createTextNode("High score : " + max_name + " with a score of " + max_score);
    para1.appendChild(average);
    para2.appendChild(high_score);

    results.appendChild(header);
    results.appendChild(para1);
    results.appendChild(para2);
}
var displayScores = function () {
    var table = document.getElementById("scores_table");
    table.innerHTML="";
    table.innerHTML="<br /><thead><th>Names</th><th>Scores</th></thead>";
    for (var i = 0; i < names.length; i++) {
        table.innerHTML += '<tr align="center"><td>' + names[i] + '</td><td>' + scores[i] +'</td></tr>';
    }

}
window.onload = function () {
    $("name").focus();
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};
