const hiddenAnswer = "hash table"; // The hidden answer is stored here.

function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
    const result = document.getElementById('result');
    
    if (userAnswer === hiddenAnswer || userAnswer === hiddenAnswer.replace(" ", "")) {
        result.innerHTML = '<p class="success">Correct! Proceed to the next step (Insert reversed link here).</p>';
    } else {
        result.innerHTML = '<p class="error">Nope, wrong answer.</p>';
    }
}
