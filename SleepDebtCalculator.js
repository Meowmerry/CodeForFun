const getSleepHours = (day) => {
  if (day === "Monday") {
    return 8;
  } else if (day === "Tuesday") {
    return 7;
  } else if (day === "Wednesday") {
    return 6;
  } else if (day === "Thursday") {
    return 5;
  } else if (day === "Friday") {
    return 6;
  } else if (day === "Saturday") {
    return 6;
  } else if (day === "Sunday") {
    return 6;
  }
};
const actualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

  const getIdealSleepHours = () =>{
      let idealHours = 7;
      return idealHours *7;
  }

  const calculateSleepDebt = () => {
      let actualSleepHours = actualSleepHours();
      let idealSleepHours = getIdealSleepHours();
      if(actualSleepHours === idealSleepHours ) {
          console.log('You get a good sleep')
      }else if( actualSleepHours > idealSleepHours){
          console.log('You get more sleep then you needed')
      }else{
          console.log('You need more rest!!')
      }
  }
