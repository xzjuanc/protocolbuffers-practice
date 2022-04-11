
const fs = require('fs');

const president = [];

const fujimori = {
    "id": 1,
    "name": "fujimori",
    "salary": 10000000000,
    "coima": true
}

const alangarcia = {
    "id": 2,
    "name": "alan garcía",
    "salary": 1000000000000000,
    "coima": true
}

const ppk = {
    "id": 3,
    "name": "ppk",
    "salary": 10000000000,
    "coima": true
}

president.push(fujimori);
president.push(alangarcia);
president.push(ppk);

console.log(JSON.stringify(president));

fs.writeFileSync("president.json",JSON.stringify(president));