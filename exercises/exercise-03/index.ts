import chalk from 'chalk';

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

function isAdmin(person: Person): person is Admin {
    return (<Admin>person).role !== undefined;
}

function isUser(person: Person): person is User {
    return (<User>person).occupation !== undefined;
}

function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${chalk.green(person.name)}, ${person.age}, ${additionalInformation}`);
}

console.log(chalk.yellow('Admins:'));
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log(chalk.yellow('Users:'));
persons.filter(isUser).forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates