const users = [
    {name: 'Olha', email: 'somemail@gmail.com', age: 30}, 
    {name: 'John', email: 'somemail_1@gmail.com', age: 31}, 
    {name: 'Mark', email: 'somemail_2@gmail.com', age: 32}
]

for (let user of users) {
    const {name, email, age} = user;
    console.log(`The name is ${name}, the email is ${email}, the age is ${age}`)
}