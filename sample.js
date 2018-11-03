(function() {
  debugger;
  for( i = 1 ; i<= 3 ; i++ ){
  var box = document.createElement('div');
  box.innerHTML = i;
  box.id =  `box${i}`;
  document.getElementById('numberspane').appendChild(box);
}
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  function buildQuiz() {
    debugger;
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((cQuestion,qNumber ) => {
      debugger;
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in cQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${qNumber}" value="${letter}">
              ${letter} :
              ${cQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${cQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });
debugger
    // finally combine our output list into one string of HTML and put it on the page
   quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    debugger;
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((cQuestion, qNumber) => {
      // find selected answer
      const answerContainer = answerContainers[qNumber];
      var selector = `input[name=question${qNumber}]:checked`;
    
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === cQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[qNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[qNumber].style.color = "red";
      }
    });


    // show number of correct answers out of total

  //  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;//
    resultsContainer.innerHTML = "<b>you got</b>" +" " + numCorrect+ "<b> out of</b>" + " " + myQuestions.length;
  }

  function showSlide(n) {
    debugger;
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    debugger;
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    debugger;
    showSlide(currentSlide - 1);
  }



  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
