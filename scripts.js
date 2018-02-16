// Maps

const question = new Map();
question.set('question', 'What is the official name of the lastest version of the JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct awnswer!!!');
question.set(false, 'Wrong, please try again');
console.log(question.get('question'));
console.log(question.size);
if (question.has(4)) {
    // question.delete(4);
    console.log("The question 4 is here!!!!");
}
// delete everything
// question.clear();

question.forEach((value, key) => console.log(`This is the ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct awnswer'));
console.log(question.get(ans === question.get('correct')));
