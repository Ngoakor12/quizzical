# Quizzical
A React web app for learning and testing your trivia knowledge. [Play here](https://www.ngoako.com/quizzical/)🕹

Go to [Setup.md](https://github.com/Ngoakor12/quizzical/blob/master/Setup.md) for instructions on how to run the project locally.

## My role(s)
- Developer

## Features/enhancements
- [ ] Feat: Sound effects
- [ ] Feat: Ability to choose your own topics and difficulty
- [ ] Feat: Personal scoreboard
- [ ] Unit testing

## Tech stack
- React
- Javascript
- CSS
- HTML

## Challenges
- **Encoding issues**: Questions with HTML entities didn't render as they would in a normal html file. I solved this by requesting the base64 encoding version of the data and ran the Question and Answers' strings through a function to convert the hmtl entities to render as expected in JSX.
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

## credits
- The idea and design for the MVP of this project is from [Scrimba's Learn react course](https://scrimba.com/learn/learnreact).
- All the quiz information is from the [Open Trivia Database](https://opentdb.com/).

<!--## screenshots-->
