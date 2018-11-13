var $ = function (id) {
    return document.getElementById(id);
};
let name_arr = [];
let score_arr = [];
var displayScores = function () {
    let sum = 0;
    for (var i = 0; i < score_arr.length; i++) {
        sum += parseInt(score_arr[i], 10);
    }

         document.getElementById("scores").value = name_arr.join("\n");

    var avg = sum / score_arr.length;
     document.getElementById("average_score").value = avg;
};

var addScore = function () {

    let fname = $("first_name").value;
    let lname = $("last_name").value;
    let score = $("score").value;


    name_arr.push(lname + "," + fname + " : " + score);
    score_arr.push(score);
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
    displayScores();

};

var clearScores = function () {


    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    name_arr=[];
    score_arr=[];
    $("first_name").focus();
};

var sortScores = function () {
    name_arr.sort();
    displayScores();
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;
    $("sort_button").onclick = sortScores;
    $("first_name").focus();


};
