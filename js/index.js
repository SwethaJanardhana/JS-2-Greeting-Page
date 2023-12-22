console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray" -- 1
  - tuesday - friday: "lightblue"--2,3,4,5
  - saturday - sunday: "hotpink"--6,0
Days of the Week Sunday = 0 ..Saturday = 6
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

const currentDay = new Date();

function getGreeting() {
  let currentTime = currentDay.getHours();
  console.log(currentTime);
  if (currentTime >= 6 && currentTime <= 12) {
    return "Good Morning";
  } else if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  } else if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  let weekDay = currentDay.getDay();
  weekDay.get;
  console.log(currentDay);
  console.log(weekDay);
  if (weekDay === 1) {
    return "darkgray";
  } else if (weekDay === 2 || weekDay === 3 || weekDay === 4 || weekDay === 5) {
    return "lightblue";
  } else if (weekDay === 6 || weekDay === 0) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
