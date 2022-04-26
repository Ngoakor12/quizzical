# Quizzical
A React game for learning and testing your trivia knowledge. [Play here](https://ngoakor12.github.io/quizzical/)🕹

## Aim/Purpose
My aim with building this project was to practice React basics and to consolidate what I've learned so far. The project itself doesn't solve any major personal problems except teach me a few things I didn't know.

## Tech stack
- React
- Javascript
- CSS
- HTML

## Features/enhancements
- [ ] Sound effects
- [x] Ability to choose your own topics and difficulty
- [ ] Personal scoreboard
- [ ] Visible Loading animations
- [ ] Unit testing

## Challenges
- **Encoding issues**: Questions with HTML entities didn't render as they would in a normal html file. I solved this by requesting the base64 encoding version of the data and ran the Question and Answers' strings through a function to convert the html entities to render as expected in JSX.
- **Organization of received data**: The data received from the API was a lot and tough to use in a quiz game. I solve this by storing only the data I was going to use in state and arranged it differently to make it easy to use for my quiz game.

**Example of original data from API**
```
{
  "response_code":0,
  "results":[
    {
      "category":"Geography",
      "type":"multiple",
      "difficulty":"easy",
      "question":"Which city is the capital of the United States of America?",
      "correct_answer":"Washington D.C",
      "incorrect_answers":["Seattle","Albany","Los Angeles"]
    }
  ]
}
```

**How I reorganized the original data from API to store in my local state**
```
{
  "results":[
    {
      "id": <random id>,
      "category":"Geography",
      "difficulty":"easy",
      "question":"Which city is the capital of the United States of America?",
      "answers":[
        {
          id: <random id>,
          answer:"Washington D.C",
          isSelected:false,
          isCorrect:true,
        },
        {
          id: <random id>,
          answer:"Seattle",
          isSelected:false,
          isCorrect:false,
        },
        {
          id: <random id>,
          answer:"Albany",
          isSelected:false,
          isCorrect:false,
        },
        {
          id: <random id>,
          answer:"Los Angeles",
          isSelected:false,
          isCorrect:false,
        }
      ]
    }
  ]
}
```

## Setup locally

clone the project
```
git clone git@github.com:Ngoakor12/quizzical.git
```
enter project folder
```
cd quizzical
```

install dependencies
```
npm install
```

run
```
npm start
```

## credits
- The idea and design for the MVP is a solo project is from [Scrimba's Learn react course](https://scrimba.com/learn/learnreact).
- All the quiz information is from the [Open Trivia Database](https://opentdb.com/).

<!--## screenshots-->
