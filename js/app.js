'use strict';

function welcome() {
  const user = prompt('Welcome! What is your name?');
  // console.log(user);
  alert('Your name is ' + user);
  return user
}

const questions = ['Did I grow up in Mexico?', 'Did I studied Chemical Engineering', 'Have I worked as a consultant?', 'Have I mostly worked in finance', 'Am I an expert software engineer?'];

const ans = ['y','y','y','y','n'];

const answers = ['I grew up in Mexico!', 'I studied Chemical Engineering and later got an MBA', 'I first worked as a consultant', 'But mostly, I have worked in finance', 'I would love to be an expert software engineer'];

function qs() {
  let q = '';
  for (let i=0; i<5; i++) {
    q = prompt(questions[i] + '(y/n)').toLowerCase();
    if (q == ans[i]) {
      alert ('Your answer is correct!');
    } else {
      alert ('Your answer is not correct');
    };
    document.write("<li>"+answers[i]+"</li>");
  };
}

function topTen() {
  let stuff = ['Growth mindset','Agile','JS','CSS','for loops','map()','filter()','reduce()','pair programming','Python'];
  for (let i=0; i<10; i++) {
    document.write("<li>"+stuff[i]+"</li>");
  };
}