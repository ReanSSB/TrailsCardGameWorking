var turn = 1;
var p1Move = 0;
var p2Move = 0;

onkeydown = function (e) {

    //Player One



    //Scissord
    if (e.keyCode == "81") {

        turn += 1;
        p1Move = 1
    }

    //Paper
    if (e.keyCode == "87") {

        turn += 1;
        p1Move = 2;
    }

    // rock
    if (e.keyCode == "69") {

        turn += 1;
        p1Move = 3;
    }





    //Scissors
    if (e.keyCode == "35") {

        turn += 1;
        p2Move = 1;
    }

    //Paper
    if (e.keyCode == "40") {

        turn += 1;
        p2Move = 2;
    }

    //Rock
    if (e.keyCode == "34") {

        turn += 1;
        p2Move = 3;
    }


    if (p1Move > 0 && p2Move > 0) whoWon();




    function whoWon() {


        if (p1Move == 1) document.getElementById("rean").classList.add("flip");
        if (p1Move == 2) document.getElementById("altina").classList.add("flip");
        if (p1Move == 3) document.getElementById("crow").classList.add("flip");

        if (p2Move == 1) document.getElementById("cedric").classList.add("flip");
        if (p2Move == 2) document.getElementById("bblanc").classList.add("flip");
        if (p2Move == 3) document.getElementById("shirley").classList.add("flip");

        if (p1Move == p2Move) {
            console.log("tie");

        } else if (p1Move == 1 && p2Move == 2) {
            console.log("scissors cuts paper! p1 win")

        } else if (p1Move == 2 && p2Move == 3) {
            console.log("paper covers rock! p1 win")


        } else if (p1Move == 1 && p2Move == 3) {
            console.log("rock breaks scissors! p1 win")





        } else if (p2Move == 1 && p1Move == 2) {
            console.log("scissors cuts paper! p2 win")

        } else if (p2Move == 2 && p1Move == 3) {
            console.log("paper covers rock! p2 win")


        } else if (p2Move == 1 && p1Move == 3) {
            console.log("rock breaks scissors! p2w win")

        }

    }




}