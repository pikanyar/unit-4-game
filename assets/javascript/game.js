$(document).ready(function () {


    //Computer generates a random number between 19 and 120

    let computerRandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    computerRandomNumber =
        $("#random-number").html(computerRandomNumber);
    $("#random-number").text(computerRandomNumber);

    //document.getElementById("random number").innerHTML
    //computerRandomNumber.innerHTML = 'Random Number:    ' + random number;

    //player clicks the gems to display value to total Score
    let wins = 0;
    let losses = 0;

    function win() {
        let wins = 0;
        wins = wins + 1
        $("#wins").html(wins);
        $("#wins").text(wins);

    }

    function lose() {
        losses = losses + 1
        $("#loss_count").text(losses);
    }

    function check() {
        if (totalScore === computerRandomNumber) {
            wins++
            win();
        }
        else if (totalScore > computerRandomNumber) {
            lose();
        }
        else {
            return true
        }

    }

    function reset() {
        // Reassign random number 
    }

    //each gem has a hidden value  random number between 1 and 12
    // let button1Counter = 0;
    // let button2Counter = 0;
    //let button3Counter = 0;
    //let button4Counter = 0;

    $("#button-1").click(function () {

        let random1 = Math.floor(Math.random() * 12) + 1;
        console.log(random1);
        totalScore = totalScore + random1;
        $("#total-score").html(totalScore);
        $("#total-score").text(totalScore);
        check()
        //document.getElementById("button-1").innerHTML
        //console.log(random1);
    });


    $("#button-2").click(function () {
        let random2 = Math.floor(Math.random() * 12) + 1;
        console.log(random2);
        totalScore = totalScore + random2;
        $("#total-score").html(totalScore);
        $("#total-score").text(totalScore);
        check()
        // document.getElementById("button-2").innerHTML
        // console.log(random2);

    });


    $("#button-3").click(function () {
        let random3 = Math.floor(Math.random() * 12) + 1;
        console.log(random3);
        totalScore = totalScore + random3;
        $("#total-score").html(totalScore);
        $("#total-score").text(totalScore);
        check()
        //document.getElementById("button-3").innerHTML
        //console.log(random3);
    });

    $("#button-4").click(function () {
        let random4 = Math.floor(Math.random() * 12) + 1;
        console.log(random4);
        totalScore = totalScore + random4;
        $("#total-score").html(totalScore);
        $("#total-score").text(totalScore);
        check()
        //document.getElementById("button-4").innerHTML
        //console.log(random4);
    });

    let totalScore = 0;

    $("#total-score").html(totalScore);
    $("#total-score").text(totalScore);
});