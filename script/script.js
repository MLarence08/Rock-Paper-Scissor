rockBtn.addEventListener("click", userRock);
paperBtn.addEventListener("click", userPaper);
scissorBtn.addEventListener("click", userScissor);
playBtn.addEventListener("click", noneClass);

let aiRockPaperScissor = ["Rock", "Paper", "Scissor"]
let userScore = 0;
let aiScore = 0;
let userSelected = "";
let history = document.querySelector("#history");

function noneClass() {
    let userName = document.querySelector("#userName").value;
    let page1 = document.querySelector("#page-1");
    let page2 = document.querySelector("#page-2");

    if(userName == "") {
        alert("Please Enter a Name!")
    }
    else { 
        page2.classList.remove('none');
        page1.classList.add('none');
        document.querySelector("#userName-input").innerHTML = userName;
    }
}
function userRock() {
    userSelected = document.querySelector("#rockBtn").value;
    document.querySelector("#userSelect").innerHTML = "<img src='css/images/Rock.png'>";
    aiSelector();
}

function userPaper() {
    userSelected = document.querySelector("#paperBtn").value;
    document.querySelector("#userSelect").innerHTML = "<img src='css/images/Paper.png'>";
    aiSelector();
}

function userScissor() {
    userSelected = document.querySelector("#scissorBtn").value;
    document.querySelector("#userSelect").innerHTML = "<img src='css/images/Scissor.png'>";
    aiSelector();
}

function aiSelector() {
    let aiRoPaSci = Math.abs(Math.round(Math.random() * 2 ));
    let aiSelected = aiRockPaperScissor[aiRoPaSci];

    if (aiSelected == "Paper") {
    document.querySelector("#aiSelect").innerHTML = "<img src='css/images/Paper.png'>";
    }
    else if(aiSelected == "Rock") {
    document.querySelector("#aiSelect").innerHTML = "<img src='css/images/Rock.png'>";
    }
    else{
    document.querySelector("#aiSelect").innerHTML = "<img src='css/images/Scissor.png'>";
    }

    if ((userSelected == "Scissor" && aiSelected == "Paper") || (userSelected == "Rock" && aiSelected == "Scissor") || (userSelected == "Paper" && aiSelected == "Rock")){
        document.querySelector("#result").innerHTML = "You WIN!";
        document.querySelector("#userScore").innerHTML = ++userScore;

        // Create Element
        let matchCardDiv = document.createElement("div");
        let matchCardInner = document.createElement("div");
        let matchesCardFront = document.createElement("div");
        let matchesCardBack = document.createElement("div");
        let win = document.createElement("img");

        // Classes
        matchCardDiv.classList.add("matches-card");
        matchCardInner.classList.add("matches-card-inner");
        matchesCardFront.classList.add("matches-card-front");
        matchesCardBack.classList.add("matches-card-back");

        //Append
        history.prepend(matchCardDiv);
        matchCardDiv.appendChild(matchCardInner);
        matchCardInner.appendChild(matchesCardFront);
        matchCardInner.appendChild(matchesCardBack);
        matchesCardFront.appendChild(win);

        win.setAttribute("src", "css/images/win.png");

        if(userSelected == "Scissor" && aiSelected == "Paper") {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Scissor.png");
            aiPick.setAttribute("src", "css/images/Paper.png");
        }
        else if(userSelected == "Rock" && aiSelected == "Scissor") {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Rock.png");
            aiPick.setAttribute("src", "css/images/Scissor.png");
        }
        else {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Paper.png");
            aiPick.setAttribute("src", "css/images/Rock.png");
        }

    }
    else if ((userSelected == "Scissor" && aiSelected == "Rock") || (userSelected == "Rock" && aiSelected == "Paper") || (userSelected == "Paper" && aiSelected == "Scissor")){
        document.querySelector("#result").innerHTML = "You Lose!";
        document.querySelector("#aiScore").innerHTML = ++aiScore;

        // Create Element
        let matchCardDiv = document.createElement("div");
        let matchCardInner = document.createElement("div");
        let matchesCardFront = document.createElement("div");
        let matchesCardBack = document.createElement("div");
        let loser = document.createElement("img");

        // Classes
        matchCardDiv.classList.add("matches-card");
        matchCardInner.classList.add("matches-card-inner");
        matchesCardFront.classList.add("matches-card-front");
        matchesCardBack.classList.add("matches-card-back");

        //Append
        history.prepend(matchCardDiv);
        matchCardDiv.appendChild(matchCardInner);
        matchCardInner.appendChild(matchesCardFront);
        matchCardInner.appendChild(matchesCardBack);
        matchesCardFront.appendChild(loser);

        loser.setAttribute("src", "css/images/loser.png");

        if(userSelected == "Scissor" && aiSelected == "Rock") {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Scissor.png");
            aiPick.setAttribute("src", "css/images/Rock.png");
        }
        else if(userSelected == "Rock" && aiSelected == "Paper") {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Rock.png");
            aiPick.setAttribute("src", "css/images/Paper.png");
        }
        else {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Paper.png");
            aiPick.setAttribute("src", "css/images/Scissor.png");
        }
    }
    else {
        document.querySelector("#result").innerHTML = "Draw!";

        // Create Element
        let matchCardDiv = document.createElement("div");
        let matchCardInner = document.createElement("div");
        let matchesCardFront = document.createElement("div");
        let matchesCardBack = document.createElement("div");
        let draw = document.createElement("img");

        // Classes
        matchCardDiv.classList.add("matches-card");
        matchCardInner.classList.add("matches-card-inner");
        matchesCardFront.classList.add("matches-card-front");
        matchesCardBack.classList.add("matches-card-back");

        //Append
        history.prepend(matchCardDiv);
        matchCardDiv.appendChild(matchCardInner);
        matchCardInner.appendChild(matchesCardFront);
        matchCardInner.appendChild(matchesCardBack);
        matchesCardFront.appendChild(draw);

        draw.setAttribute("src", "css/images/draw.png");

        if(userSelected == "Scissor" && aiSelected == "Scissor") {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Scissor.png");
            aiPick.setAttribute("src", "css/images/Scissor.png");
        }
        else if(userSelected == "Rock" && aiSelected == "Rock") {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Rock.png");
            aiPick.setAttribute("src", "css/images/Rock.png");
        }
        else {
            let userPick = document.createElement("img");
            let aiPick = document.createElement("img");
            matchesCardBack.appendChild(userPick);
            matchesCardBack.appendChild(aiPick);
            userPick.setAttribute("src", "css/images/Paper.png");
            aiPick.setAttribute("src", "css/images/Paper.png");
        }
    }

}
