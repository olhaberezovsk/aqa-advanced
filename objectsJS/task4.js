const person = {
    firstName: "Olha",
    lastName: "Berezovska",
    age: 30
}

  console.log(person);

  person.email = 'somemail@gmail.com';

  delete person.age;

  console.log(person);