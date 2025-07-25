///Задание_1///
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people.sort(function(a, b) {
    return a.age - b.age;
 }));

 ///Задание_2///
 function isPositive(number) {
    return number > 0;
    }

    function isMale(person) {
      return person.gender === "male";
    }

    function filter(array, ruleFunction) {
      const result = [];

      for (let i = 0; i < array.length; i++) {
         if (ruleFunction(array[i])) {
         result.push(array[i]);
         }
      }

      return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));

///Задание_3///
setTimeout(() => {

   console.log("30 секунд прошло");
   clearInterval(intervalId);

 }, 30000); 
 
 
 const intervalId = setInterval(() => {
 
   console.log(new Date());

 }, 3000); 
 
 
 console.log(new Date());

 ///Задание_4///
 function delayForSecond(callback) {
   setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})
 
 ///Задание_5///
 function delayForSecond(cb) {

   setTimeout(() => {
       console.log('Прошла одна секунда');

       if(cb) {  cb(); }

   }, 1000)
}

function sayHi (name) {
   console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));