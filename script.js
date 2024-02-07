var correctAnswers = ["b", "a", "a", "a", "a"];
var button = document.getElementById("submitButton");

function submitTest() {
    var userAnswers = [];

    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            userAnswers.push(inputs[i].value);
        }
    }

    if (userAnswers.length !== correctAnswers.length) {
        alert("Будь ласка, дайте відповідь на всі питання перед завершенням тесту.");
        return;
    }

    var correctCount = 0;
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            correctCount++;

            document.querySelectorAll('input[value="' + userAnswers[i] + '"]')[i].style.color = 'green';
            var feedbackDiv = document.querySelectorAll('.answer-feedback')[i];
            feedbackDiv.textContent = 'Ваша відповідь вірна.';
            feedbackDiv.style.color = 'green';

            feedbackDiv.style.padding = '10px 0 0 10px';
            feedbackDiv.style.fontWeight = 'bold';
        } else {
            document.querySelectorAll('input[value="' + userAnswers[i] + '"]')[i].style.color = 'red';
            var feedbackDiv = document.querySelectorAll('.answer-feedback')[i];
            feedbackDiv.textContent = 'Помилка! Правильна відповідь: ' + correctAnswers[i];
            feedbackDiv.style.color = 'red';

            feedbackDiv.style.padding = '10px 0 0 10px';
            feedbackDiv.style.fontWeight = 'bold';
        }
    }

    var resultPercentage = (correctCount / correctAnswers.length) * 100;

    var resultMessage = "Результат: " + resultPercentage.toFixed(2) + "%";
    var resultElement = document.createElement("p");
    resultElement.textContent = resultMessage;
    document.getElementById("resultContainer").appendChild(resultElement);

    button.textContent = "Повторити спробу";
    button.removeEventListener("click", submitTest);
    button.addEventListener("click", function() {
        location.reload();
    });
}

button.addEventListener("click", submitTest);
