const person1 = {
  name1: "Narendra",
  age: 34,
  address: {
    city: "malibu town",
    state: "gurgaon",
  },
};

const person2 = {
  name1: "Sally",
  age: 30,
};

//const {name, age } = person1;
//const {name:firstName, age, favoriteFood ='rice' } = person1;
//const {name:firstName, ...rest } = person1;
const {
  name1,
  address: { state },
} = person1;

//override person 1..
const personThree = { ...person1, ...person2 };

console.log(personThree.name1);
//console.log(age);
//console.log(favoriteFood);
