const form = document.querySelector('.quiz-form');
const correctAnswer = ["A", "B", "A", "C", "D"]
const result = document.querySelector('.result');
const questions = document.querySelectorAll('.question');


form.addEventListener('submit', event => {
    event.preventDefault();

    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    let score = 0;

    userAnswer.forEach((answer, index) => {
        if(answer===correctAnswer[index]){
            score = score + 1;
            questions[index].classList.add('correct');
        } else {
            questions[index].classList.add('wrong');
        }
    });

    console.log(score);

    scrollTo(0, 0);
    result.classList.remove('hide');
    result.querySelector('p').textContent=`You scored ${score} /5! `;
    
});



/*
access the form
create access to the user answer and catch them
check if the correct answer match the user's ones
increase score if so -> default zero 
show the result to the user
remove 'hide' from the result class
add a scrolltotop(0, 0) when the user click submit
access result and change the p content of the result using template literals to show the score
*/