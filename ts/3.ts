type User = {
    name: string,
    age: number,
    date_of_birth: string,
}

type ValueType = string[] | number[] | boolean[] | User[] | {};

let value: ValueType = [
    {
        name: 'John',
        age: 32,
        date_of_birth: '01/12/1994'
    },
    'Layer',
    1452475414785214,
    true,
    true,
    function printAccountData() {}
]