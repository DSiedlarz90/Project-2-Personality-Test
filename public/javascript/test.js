//Global variables
let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const questionEl = document.querySelector('.question');
const container = document.querySelector('.quiz-container');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
// const restartButton = document.querySelector('.restart');
const quizContainer = document.querySelector('.quiz-container');


const questions = [
    {
      "question": "What would you do in a bar fight?",
      "answer1": "1. Join in.",
      "answer1Total": "5",
      "answer2": "2. Break it up.",
      "answer2Total": "10",
      "answer3": "3. Run away.",
      "answer3Total": "15",
      "answer4": "4. Ignore it.",
      "answer4Total": "20"
    },
    {
      "question": "What would you do if you were given a million dollars?",
      "answer1": '1. Buy yourself everything you ever wanted.',
      "answer1Total": "5",
      "answer2": '2. Donate to charity.',
      "answer2Total": "10",
      "answer3": '3. spend some and invest the rest.',
      "answer3Total": "20",
      "answer4": '4. Like that would ever happen.',
      "answer4Total": "15"
    },
    {
      "question": 'Are you a moring, mid day, evening, or night owl sort of person?',
      "answer1": "1. Morning.",
      "answer1Total": "10",
      "answer2": "2. Mid day.",
      "answer2Total": "15",
      "answer3": "3. Evening.",
      "answer3Total": "20",
      "answer4": "4. Night owl.",
      "answer4Total": "5"
    },
    {
      "question": "What is you favorite season?",
      "answer1": "1. Spring.",
      "answer1Total": "15",
      "answer2": "2. Summer.",
      "answer2Total": "10",
      "answer3": "3. Fall.",
      "answer3Total": "20",
      "answer4": "4. Winter.",
      "answer4Total": "5"
    },
    {
      "question": "You are riding in a trolley without functioning breaks, headed toward a switch in the tracks. On the current track stand five people who will be hit. You have access to a switch to change tracks, but one individual stands there. Do you switch the tracks or not?",
      "answer1": "1. I dont know!!",
      "answer1Total": "15",
      "answer2": "2. Obviously switch tracks.",
      "answer2Total": "10",
      "answer3": "3. Destiny has chosen the five.",
      "answer3Total": "5",
      "answer4": "4. I refuse to answer.",
      "answer4Total": "20"
    }
];

const totalQuestions = questions.length;

// Generate questions on page
  function generateQuestions (index) {
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;

    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}

function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    for(let i = 0; i < totalQuestions; i++) {
        currentQuestion++;
        selectedOption.checked = false;
        score.push(answerScore)
        selectedAnswersData.push();
        if(!selectedOption) {
            alert('Please select your answer!');
            return;
        }
        if(currentQuestion === totalQuestions - 1 ) {
            nextButton.textContent = 'Finish';
        }
        if(currentQuestion === totalQuestions) {
            console.log(score)
            generateResults(score);
            return;
        }
        if(currentQuestion < totalQuestions) {
            generateQuestions(currentQuestion);
            return;
        }
    }
    
};

function generateResults(){
    var total = 0
    for (let i = 0; i < score.length; i++) {
        total += score[i]
        console.log(total)
    }
    if (total <= 30) {
          //Generate HTML For output Here Chaotic Evil The Joker
        quizContainer.innerHTML = 
        `<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap" rel="stylesheet">

        <div class="container">
            <div class="card">
                <figure class="card__thumb">
                    <img src="Images/the-joker.jpg" alt="Picture of Heath Ledger playing The Joker" class="card__image">
                    <figcaption class="card__caption">
                        <h2 class="card__title">'Chaotic Evil' The Joker</h2>
                        <em class="card__snippet">"Someday someone will break you so badly that you will become unbreakable" -The Joker</em>
                        <p> Origin: Gotham </p>
                        <p> Personality traits: Supervillian, Sadistic, Criminally Insane Narcissist"
                    </figcaption>
                </figure>
            </div>
        `
        return;
    }
    else if (total >= 31 && total <= 45) {
        //Generate HTML for output here Lawful Evil Lord Farquaad
        quizContainer.innerHTML = 
        `<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap" rel="stylesheet">
        <div class="container">
            <div class="card">
                <figure class="card__thumb">
                    <img src="Images/lord-farquaad.jpg" alt="Picture of Lord Farquad from Shrek" class="card__image">
                    <figcaption class="card__caption">
                        <h2 class="card__title">'Lawful Evil' Lord Farquad</h2>
                        <em class="card__snippet">"Some of you may die, but it's a sacrifice I am willing to make." -Lord Farquad</em>
                        <p> Origin: Duloc </p>
                        <p> Personality Traits: Tyrannical Dictator, Obsessed with Perfection, Overcompensating for something. </p>
                    </figcaption>
                </figure>
            </div>
        `
    
        return;
    }
    else if (total >= 46 && total <= 60) {
           //Generate HTML for output here Neutral Good Spongebob Squarepants
        quizContainer.innerHTML = `<link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Arvo:wght@700&family=Josefin+Sans&family=M+PLUS+1+Code&family=Oswald:wght@400;500&family=Roboto+Condensed&family=Source+Code+Pro&family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet">

        <div class="container">
            <div class="card">
                <figure class="card__thumb">
                    <img src="Images/spongebob-squarepants.jpg" alt="Picture of Spongebob Squarepants" class="card__image">
                    <figcaption class="card__caption">
                        <h2 class="card__title">'Neutral Good' Spongebob Squarepants</h2>
                        <em class="card__snippet">"If I were to die right now in a fiery explosion due to the carelessness of a friend???. Then it would just be alright." -Spongebob Squarepants</em>
                        <p> Origin: Under the Sea </p>
                        <p> Personality Traits: Fun loving, Hyperactive, Happy-Go-Lucky </p>
                    </figcaption>
                </figure>
            </div>
        `
     
        return;
    }
    else if (total >= 61 && total <= 79) {
         //Generate HTML for output here True Neutral Brian Griffin
        quizContainer.innerHTML = 
        `<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap" rel="stylesheet">
        <div class="container">
            <div class="card">
                <figure class="card__thumb">
                    <img src="Images/brian-griffin.jpg" alt="Picture of Brian Griffin" class="card__image">
                    <figcaption class="card__caption">
                        <h2 class="card__title">'True Neutral' Brian Griffin</h2>
                        <em class="card__snippet">"You know what, Stewie, if you don???t like it, go on the Internet and complain." -Brian Griffin</em>
                        <p> Origin: Quahog </p>
                        <p> Personality Traits: Wry, Sophisticated, Intellilgent </p>
                    </figcaption>
                </figure>
            </div>
    `
       
        return;
    }
    else if (total >= 80 && total <= 100) {
          //Generate HTML for output here Lawful Good Woody Pride
        quizContainer.innerHTML = 
        `<link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Arvo:wght@700&family=Josefin+Sans&family=M+PLUS+1+Code&family=Oswald:wght@400;500&family=Roboto+Condensed&family=Source+Code+Pro&family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet">
        <div class="container">
            <div class="card">
                <figure class="card__thumb">
                    <img src="Images/woody-pride.jpg" alt="Picture of Good Woody Pride" class="card__image">
                    <figcaption class="card__caption">
                        <h2 class="card__title">'Lawful Good' Woody Pride</h2>
                        <em class="card__snippet">" "Being there for a child is the most noble thing a toy can do." - Woody Pride</em>
                        <p> Origin: Andy's room </p>
                        <p> Personality Traits: Smart, determined, passionate </p>
                    </figcaption>
                </figure>
            </div>
    `
      
        return;
    }
};


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
// result.addEventListener('click',restartQuiz);



