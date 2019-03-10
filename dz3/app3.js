let points = 0;

const arr = [
{ question: 'Сколько будет 2+2?',
answer: 4,
type: 'prompt'
},
{
question: 'Солнце встает на востоке?',
answer: true,
type: 'confirm'
},
{
question: 'Сколько будет 5 << 2 ?',
answer: 20,
type: 'prompt'
}
]



for (let i = 0; i < arr.length; i++) {
    let result =  askQuestion(arr[i]);
    points += result ? 10 : 0;  										
    console.log('CHECK' + result + 'POINTS' + points)
}
alert('all points' + points);



function askQuestion(ask) {											
		if (ask.type == 'prompt') {				
				let userAnswer = prompt(ask.question);
				if (isNaN(+userAnswer)) {     							
					alert ('введите число')
					return askQuestion(ask)						
				} else if (userAnswer  == ask.answer) {
					return result = true; }
					else {} 									
		} else if (ask.type == 'confirm') {
			let userAnswer = confirm(ask.question);
				if (userAnswer == true ) { 
					// result = true;
					return result = true;
					}
		} else {
			return alert('not work')
		}
	return result = false;
}
