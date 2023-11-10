// object containing questions.

const easyQuestions = [
    {
question: "Who is the top scorer of all time?",
answers: [
    { text: "MS Dhoni", correct: false },
    { text: "Sachin Tendulkar", correct: true },
    { text: "Graeme Smith", correct: false },
    { text: "Joe Root", correct: false }
]
    },

{
question: "Who is top wicket taker of all time?",
answers : [
{ text: "Muthiah Muralidaran", correct: true },
{ text: "Wasim Akram", correct: false },
{ text: "James Anderson", correct: false },
{ text: "Daniel Vettori", correct: false }
]
   },
    
{
question: "How many players are there in a cricket team?",
answers : [
{ text: "12", correct: false },
{ text: "9",  correct: false},
{ text: "10", correct: false },
{ text: "11", correct: true }
]
  },
 {
 question: "What is the biggest cricket tournament?",
 answers : [
{ text: "Ashes", correct: false },
{ text: "World Cup", correct: true },
{ text: "Champions Trophy", correct: false },
{ text: "Series", correct: false }
 ]
    },

    { 
    question: "Which Pakistani player has scored 200?",
    answers : [
        { text: "Babar Azam", correct: false },
        { text: "Saeed Anwar", correct: false },
        { text: "Fakhar Zaman", correct: true },
        { text: "Younis Khan", correct: false}
    ]
  },

 {
question: "Which player has hit more sixes?",
answers : [
    { text: "Virat Kohli", correct: false },
    { text: "Rohit Sharma", correct: true },
    { text: "Ben Stokes", correct: false },
    { text: "Liam Livingstone", correct: false}
]
          },

     {
question: "Which team has won the most World cups?",
answers : [
    { text: "Australia", correct: true },
    { text: "India", correct: false },
    { text: "England", correct : false },
    { text: "South-Africa", correct : false}
]
     } ,    

{
question: "Which player has most centuries?",
answers : [
    { text: "Ricky Ponting", correct: false },
    { text: "Kumar Sangakkara", correct: false },
    { text: "Sachin Tendulkar", correct: true },
    { text: "Eoin Morgan", correct: false }
]
},
 {
question: "What is the highest team score in ODI?",
answers : [
{ text: "450-0", correct: false },
{ text: "498-4", correct: true },
{ text: "450-4", correct : false },
{ text: "498-0", correct: false } 
]
 },
 {
question: "What is the highest team score in T20i?",
answers : [
    { text: "278-3", correct: false },
    { text: "278-4", correct: false },
    { text: "273-2", correct: false },
    { text: "314-3", correct: true } 
]
}, 
 
{
 question: "Which batsman has best strike rate in ODI cricket?",
 answers : [
    { text: "Andrew Russell", correct: true },
    { text: "Glenn Maxwell", correct: false },
    { text: "Jos Buttler", correct: false },
    { text: "Shahid Afridi", correct: false}
 ]
}, 
{ 
    question: "How many days does a Test match go for?",
    answers : [
        { text: "3", correct: false },
        { text: "4", correct: false },
        { text: "1", correct: false },
        { text: "5", correct: true}
    ]
},
 {
    question: "When was first T20 match played?",
    answers : [
        { text: "2007", correct: false },
        { text: "2000", correct: false },
        { text: "2003", correct: true },
        { text: "1999", correct: false}
    ]
 },

 {
question: "Which country is hosting 2023 World cup?",
answers : [
    { text: "India", correct: true },
    { text: "England", correct: false},
    { text: "New Zealand", correct: false},
    { text: "Afghanistan", correct: false}
]
 },
  {
question: "What is the biggest Cricket rivalry?",
answers : [
    { text: "England Vs Austrailia", correct: false },
    { text: "India Vs Pakistan", correct: true },
    { text: "Bangladesh Vs Sri-Lanka", correct: false },
    { text: "New Zealand Vs Australia", correct: false }
]
  },
];

const hardQuestions = [
{
question: "The Big Bash League is based in which country?",
answers : [
     { text: "Pakistan", correct: false },
     { text: "England", correct: false },
     { text: "Australia", correct: true },
     { text: "India", correct: false }
]
},
 
{
question: "When Did Ben Stokes made his Test Debut?",
answers : [
    { text: "2010", correct: false },
    { text: "2013", correct: true },
    { text: "2015", correct: false },
    { text: "2011", correct: false }
]
},

{
question: "Who has the most career runs in England Test match cricket?",
answers : [
    { text: "Alester Cook", correct: true},
    { text: "Moin Ali", correct: false },
    { text: "Ben Stokes", correct: false },
    { text: "David Warner", correct: false}
]
},

{
question: "When did Nasser Hussain last captained England Test Team?",
answers : [
    { text : "1999", correct: false },
    { text: "2000", correct: false },
    { text: "2002", correct: false },
    { text: "2003", correct: true }
]
},

{
question: "How many bails sit on top of cricket stumps?",
answers : [
{ text: "3", correct: false },
{ text: "2", correct: true },
{ text: "1", correct: false },
{ text: "0", correct: false }
]
},

{
question: "In what year was 100-ball cricket first played?",
answers: [
    { text: "2000", correct: false },
    { text: "2018", correct: false },
    { text: "2010", correct: false },
    { text: "2021", correct: true }
]
}, 

{
question: "In what city is Edgbaston Stadium?",
answers: [
    { text: "Birmingham", correct: true },
    { text: "London", correct: false },
    { text: "Dublin", correct: false },
    { text: "Sydney", correct: false }
]
},

{
question: "In which cricket stadium would you find The Tavern Stand?",
answers:  [
    { text: "Oval", correct: false },
    { text: "Lord's", correct: true },
    { text: "Eden Gardens", correct: false },
    { text: "MCG", correct: false }
]
},

{
question: "Which captain won World Cup for Pakistan",
answers: [
    { text: "Shahid Afridi", correct: false },
    { text: "Babar Azam", correct: false },
    { text: "Wasim Akram", correct: false },
    { text: "Imran Khan", correct: true }
]
},

{
question: "When did Pakistan won the World Cup?",
answers: [
    { text: "1992", correct: true },
    {text: "2019", correct: false },
    { text: "1996", correct: false },
    { text: "2023", correct: false }
]
},

{
question: "Who is the legendary bowler of West Indies?",
answers: [
    { text: "Glenn McGrath", correct: false },
    { text: "Shane Warne", correct: false },
    { text: "MD Marshall", correct: true },
    { text: "Dale Steyn", correct: false }
]
},

 {
question: "Who caught 7 catches in one innings?",
answers : [
    { text: "Shadab Khan", correct: false },
    { text: "Ian Smith", correct: true },
    { text: "Virat Kohli", correct: false },
    { text: "Ricky Ponting", correct: false }
]
 },

 {
    question: "How many T20i matches did Ahsan Raza umpired?",
    answers: [
        { text: "12", correct: false },
        { text: "68", correct: false },
        { text: "22", correct: false },
        { text: "97", correct: true }
    ]
 }

];