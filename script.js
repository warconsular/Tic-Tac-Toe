document.addEventListener("DOMContentLoaded", function () {
    const Paper = document.querySelector(".button-action-1");
    const Stone = document.querySelector(".button-action-2");
    const Scissors = document.querySelector(".button-action-3");
    const AIContainer = document.querySelector(".AI");
    const PlayerContainer = document.querySelector(".player");
    const AllOptions = ["paper", "stone", "scissors"];



    function GetRandomOption() {
        const RandomIndex = Math.floor(Math.random() * 3);
        return AllOptions[RandomIndex];
    }

    function GetWinner(PlayerOption, AIOption) {
        if (PlayerOption === AIOption) {
            return "tie";
        } else if (
            (PlayerOption === "stone" && AIOption === "scissors") || (PlayerOption === "scissors" && AIOption === "paper") || (PlayerOption === "paper" && AIOption === "stone")
        ) {
            return "player";
        } else {
            return "AI"
        }
    }

    function ShowWinner(Winner) {
        if (Winner === "tie") {
            AIContainer.innerHTML = "Tie!";
            AIContainer.style.color = `#e09512`;
            PlayerContainer.innerHTML = "Tie!";
            PlayerContainer.style.color = `#e09512`;
        } else if (Winner === "AI") {
            AIContainer.innerHTML = "Winner!";
            AIContainer.style.color = `#e09512`;
            PlayerContainer.innerHTML = "Lose!";
            PlayerContainer.style.color = `#e09512`;
        } else {
            AIContainer.style.color = `#e09512`;
            AIContainer.innerHTML = "Lose!";
            PlayerContainer.innerHTML = "Win!";
            PlayerContainer.style.color = `#e09512`;
        }
    }

    Paper.addEventListener("click", function() {
        const PlayerOption = "paper";
        const AIOption = GetRandomOption(); 
        const Winner = GetWinner(PlayerOption, AIOption);
        ShowWinner(Winner);


        AIContainer.style.backgroundImage = `url(./assets/${AIOption}.png)`;
        AIContainer.style.backgroundRepeat = `no-repeat`;
        PlayerContainer.style.backgroundImage = `url(./assets/${PlayerOption}.png)`;
        PlayerContainer.style.backgroundRepeat = `no-repeat`;
    });

    Stone.addEventListener("click", function() {
        const PlayerOption = "stone";
        const AIOption = GetRandomOption(); 
        const Winner = GetWinner(PlayerOption, AIOption);
        ShowWinner(Winner);

        AIContainer.style.backgroundRepeat = `no-repeat`;
        AIContainer.style.backgroundImage = `url(./assets/${AIOption}.png)`;
        PlayerContainer.style.backgroundRepeat = `no-repeat`;
        PlayerContainer.style.backgroundImage = `url(./assets/${PlayerOption}.png)`;
    });

    Scissors.addEventListener("click", function() {
        const PlayerOption = "scissors";
        const AIOption = GetRandomOption(); 
        const Winner = GetWinner(PlayerOption, AIOption);
        ShowWinner(Winner);

        AIContainer.style.backgroundRepeat = `no-repeat`;
        AIContainer.style.backgroundImage = `url(./assets/${AIOption}.png)`;
        PlayerContainer.style.backgroundRepeat = `no-repeat`;
        PlayerContainer.style.backgroundImage = `url(./assets/${PlayerOption}.png)`;
    });

});