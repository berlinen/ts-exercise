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
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

type Criteria<T> = {[P in keyof T]?: T[P]}

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

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

function filterUsers<T>(persons: Person[], criteria: Criteria<User>): User[] {
    return persons.filter(isUser).filter((user) => {
        let criteriaKeys = Object.keys(criteria) as (keyof User)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log(chalk.yellow('Users of age 23:'));

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types