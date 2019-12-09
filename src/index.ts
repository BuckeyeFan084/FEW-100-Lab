import './styles.css';
console.log('Ready to Party With Some TypeScript!');

import { amntOfTip, totalWithTip, amntOfBill } from './math';




const number1El = document.getElementById('number1') as HTMLInputElement;
const number2E2 = document.getElementById('number2') as HTMLInputElement;
const totalWTip = document.getElementById('totalWTip') as HTMLInputElement;
const tipAmnt1E1 = document.getElementById('tipAmnt1') as HTMLInputElement;
const tipAmnt1E2 = document.getElementById('tipAmnt2') as HTMLInputElement;
const totalBill = document.getElementById('number1') as HTMLInputElement;
const multiplyButton = document.getElementById('tipAmount') as HTMLInputElement;
const multiplyButton1 = document.getElementById('totalWithTip') as HTMLInputElement;
const totalOfBill = document.getElementById('totalBill') as HTMLInputElement;

const answerEl = document.getElementById('answer1') as HTMLSpanElement;
const answerE2 = document.getElementById('answer2') as HTMLSpanElement;
const answerE3 = document.getElementById('answer3') as HTMLSpanElement;
const answerE4 = document.getElementById('answer4') as HTMLSpanElement;

// tslint:disable-next-line: only-arrow-functions
multiplyButton.addEventListener('click', function () {

    const n1 = number1El.valueAsNumber;
    const n2 = number2E2.valueAsNumber;

    const answer1 = amntOfTip(n1, n2);

    answerEl.innerText = answer1.toString();
});

// tslint: disable - next - line;: only - arrow - functions;
// tslint:disable-next-line: space-before-function-paren
// tslint:disable-next-line: only-arrow-functions
totalWTip.addEventListener('click', function () {

    const n1 = number1El.valueAsNumber;
    const n2 = tipAmnt1E2.valueAsNumber;

    const answer2 = totalWithTip(n1, n2);

    answerE2.innerText = answer2.toString();
});

// tslint: disable - next - line;: only - arrow - functions;
// tslint:disable-next-line: space-before-function-paren
// tslint:disable-next-line: only-arrow-functions
totalOfBill.addEventListener('click', function () {

    const n1 = number1El.valueAsNumber;

    const answer3 = amntOfBill(n1);

    answerE3.innerText = answerE3.toString();
});

