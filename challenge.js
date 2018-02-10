/*
1. Build a function constructor called question to describe a question, A question include:
a) question itself
b) the awnsers from which the player can choose the correct one (choose an adequate data structure
here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questuions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible awnser (each
questuion should have a number) (Hint: write a method for the Question object for this task).

5. Use the `prompt` function to ask the user for the correct awnser. The user should input the
number of the correct awnser such as you displayed it on Task 4.

6. Check if the awnser is correct and print to the console whether the awnser is correct or not
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use their code. So make sure that
all your code is private and doesn't interfere with the other programmers code (Hint: we learned
a special technique to do exactly that).

8. After you display the result, display the next random question, so that the gane never ends(Hint:
write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include a quit option to quick the game
if the user write 'exit' instead of the answer. In this case, DON't call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to
the score (Hint: I'm going to use the power of closueres for thism but you don't have to, just do this
with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function() {
    var Question = function(question, options, awnser) {
        this.question = question;
        this.options = options;
        this.anwser = awnser;
    };

    Question.prototype.logQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.options.length; i++) {
            console.log((i + 1) + '. ' + this.options[i]);
        }
    };

    Question.prototype.isCorrect = function(playerChoise) {
        if(parseInt(playerChoise) === this.anwser) {
            console.log('You are correct!!!!');
            score++;
            console.log('Your score is: ' + score);
            console.log('------------------------');
        } else {
            console.log('Is not the correct awnser :(');
            console.log('Your score is: ' + score);
            console.log('------------------------');
        }
    };

    var questions = [];
    var score = 0;
    questions[0] = new Question('Name of the example guy?', ['Max', 'John'], 2);
    questions[1] = new Question('Where does he work?', ['Teacher', 'developer'], 1);
    questions[2] = new Question('Can you tell who is the other example name?', ['Paco', 'Jane'], 2);

    while (true) {
        var index = Math.floor(Math.random() * questions.length);
        questions[index].logQuestion();

        var playerChoise = prompt('Enter your answer:');
        if (playerChoise === 'exit') {
            break;
        }
        questions[index].isCorrect(playerChoise);
    }
})();
