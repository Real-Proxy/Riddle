const hiddenAnswer = "hash table"; // The hidden answer is stored here.

function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
    const result = document.getElementById('result');
    
    if (userAnswer === hiddenAnswer || userAnswer === hiddenAnswer.replace(" ", "")) {
        result.innerHTML = '<p class="success"> 2-level-elddiR/oi.buhtig.yxorp-laer//:sptth </p>';
    } else {
        result.innerHTML = '<p class="error">Nope, wrong answer.</p>';
    }
}
