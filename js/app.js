'use strict';

let q = '';
let i = 0;
let c = 0;
  
function welcome() {
  const user = prompt('Welcome! What is your name?');
  alert('Your name is ' + user);
  document.write("<h3>"+`Welcome, ${user}!`+"</h3>");
  document.write("<hr>");
  document.write("<h2>Quick Bio Facts</h2>");
}

function bio() {
  alert('Can you guess a few facts about my bio?');
  const questions = ['Did I grow up in Mexico?', 'Did I studied Chemical Engineering', 'Have I worked as a consultant?', 'Have I mostly worked in finance', 'Am I an expert software engineer?'];
  const ans = ['y','y','y','y','n'];
  const answers = ['I grew up in Mexico!', 'I studied Chemical Engineering and later got an MBA', 'I first worked as a consultant', 'But mostly, I have worked in finance', 'I would love to be an expert software engineer'];
  
  document.write("<ul>");
  for (i; i<5; i++) {
    q = prompt(questions[i] + '(y/n)').toLowerCase();
    if (q == ans[i]) {
      alert ('Your answer is correct!');
      c++;
    } else {
      alert ('Your answer is not correct');
    };
    document.write("<li>"+answers[i]+"</li>");
  };
  alert(`So far, you have ${c}/5 correct answers`);
  document.write("</ul>");
}

function guessNum() {
  const n = Math.floor((Math.random()*10));
  // console.log(n);
  alert('Try to guess a number between 0-9 in 4 attempts');
  for (i=0; i<4; i++) {
    q = prompt(`Attempt ${i+1}, what do you think the number is?`);
    if (parseInt(q) === n) {
      alert(`Correct! the number is: ${n}`);
      c++;
      break
    } else {
      i===3 ? alert('The number is '+n) : alert(n>q ? 'The number is larger' : 'The number is smaller');
    }
  }
}

function topTen() {
  let stuff = ['while','includes','length','sort','for','map','filter','reduce','this','try'];
  document.write("<br>");
  document.write("<hr>");  
  alert('Try to guess an item in my top 10 JS commands in 6 attempts');
  let match = '';
  for (i=0; i<6; i++) {
    q = prompt(`Attempt ${i+1}, what is your guess?`).toLowerCase();
    stuff.forEach(element => {
      if (element == q) {
        match = q;      
      };
    });
    if (match) {
      alert(`Correct! ${q} is on my list!`);
      c++;
      break
    } else {
      i===5 ? alert('Out of attempts') : alert(`${q} is not on my list, try again`)
    }
  }

  alert(`You got ${c}/7 correct answers`);

  document.write("<h2>My Top 10 JS Commands</h2>");
  document.write("<ol>");
  for (i=0; i<10; i++) {
    document.write("<li>"+stuff[i]+"</li>");
  };
  document.write("<ol>");
  document.write("<br>");
}