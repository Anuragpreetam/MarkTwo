/*
CLI fandom quiz app? MarkTwo
*/

var readlineSync = require('readline-sync');
var username;
var score =0;
var scorecard= [
    {
        name:'Anurag',
        score:3
    },
    {
        name:'Preetam',
        score:2
    }
]


var questions = [
    {
        question:"What is captain America's age?\n a)100 years b)102 years c)10 years d)0 years\n",
        answer:"a"
    },
    {
        question:"Who is IronMan?\n a)Lord Stark b)Tony Stark c)Natasha Romanoff d)Peter Parker\n",
        answer:"b"
    },
    {
        question:"IronMan's latest suit is powered by what technology?\n a)Arc reactor b)Generator c)Arc Reator and Nano Tech d)Nucleur fission\n",
        answer:"c"
    },
    {
        question:"Who is brother of Thor?\n a)Hulk  b)AntMan    c)Heimdalh  d)Loki\n",
        answer:"d"
    },
    {
        question:"What is Odin's famous dialogue in Thor series\n a)Who ever holds this hammer, if he be worthy shall posses the power of Thor  b)You are Thor  c)I'm the king of Asgard d)Stay with your brother\n ",
        answer:"a"
    }
]


function welcome(){
    username = readlineSync.question("What's your name?\n")
    console.log('Welcome' + " " + username + " " + 'to Marvel Fandom quiz')
}

function play(question,answer){
    var reply = readlineSync.question(question)
    if(reply.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log('correct!')
    console.log("You chose:" + " " +  reply)
}else{
    console.log('wrong!')
    }
    console.log('current score' + " " + score)
    console.log('------------')
}
function questionrolling(questions){
    for(var i=0;i<questions.length;i++){
        play(questions[i].question,questions[i].answer)
    }
}
function showScore(){
    console.log("Yay! You scored:" + " " + score)
    scorecard.push({name:username,score:score})
    console.log("Scorecard of players till now")
    console.log('------------')
    scorecard.forEach(function(scorecard){
        console.log(scorecard.name + "," + scorecard.score)
    });

}
welcome()
questionrolling(questions)
showScore()