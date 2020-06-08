import chalk from 'chalk';

interface Item {
  name: string,
  age: number,
  occupation: string
}

const users: Item[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: Item) {
    console.log(` - ${chalk.green(user.name)}, ${user.age}`);
}

console.log(chalk.yellow('Users:'));
users.forEach(logPerson);
