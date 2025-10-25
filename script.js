let userScore = 0;
        let compScore = 0;

        const choices = document.querySelectorAll(".choice");
        const msg = document.getElementById("msg");
        const userScorePara = document.getElementById("user-score");
        const compScorePara = document.getElementById("comp-score");

        const genCompChoice = () => {
            const options = ["Rock", "Paper", "Scissors"];
            const randInd = Math.floor(Math.random() * 3);
            return options[randInd];
        };

        const drawGame = () => {
            msg.innerText = "It's a Draw! 😐";
            msg.style.backgroundColor = "gray";
        };

        const showWinner = (userWin, userChoice, compChoice) => {
            if (userWin) {
                userScore++;
                userScorePara.innerText = userScore;
                msg.innerText = `You Win! 🎉 ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor = "green";
            } else {
                compScore++;
                compScorePara.innerText = compScore;
                msg.innerText = `You Lose! 😢 ${compChoice} beats ${userChoice}`;
                msg.style.backgroundColor = "red";
            }
        };

        const playGame = (userChoice) => {
            const compChoice = genCompChoice();
            console.log(`User: ${userChoice} | Comp: ${compChoice}`);

            if (userChoice === compChoice) {
                drawGame();
            } else {
                let userWin = true;

                if (userChoice === "Rock") {
                    userWin = compChoice === "Scissors" ? true : false;
                } else if (userChoice === "Paper") {
                    userWin = compChoice === "Rock" ? true : false;
                } else if (userChoice === "Scissors") {
                    userWin = compChoice === "Paper" ? true : false;
                }

                showWinner(userWin, userChoice, compChoice);
            }
        };

        choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                const userChoice = choice.getAttribute("id");
                playGame(userChoice);
            });
        });