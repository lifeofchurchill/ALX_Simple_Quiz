function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if an option was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 4: Compare answers and display feedback
        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Step 5: Handle case where no option is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Step 6: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
