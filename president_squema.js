const president = require('./president_pb');
const fs = require('fs');

const fujimori = new president.President();
fujimori.setId(1);
fujimori.setName("fujimori");
fujimori.setSalary(10000000000);
fujimori.setCoima(true);

const alangarcia = new president.President();
alangarcia.setId(1);
alangarcia.setName("alan garcia");
alangarcia.setSalary(1000000000000000);
alangarcia.setCoima(true);

const ppk = new president.President();
ppk.setId(1);
ppk.setName("ppk");
ppk.setSalary(10000000000);
ppk.setCoima(true);

console.log("President Fujimori ID: "+ fujimori.getId());
console.log("President Fujimori Name: "+ fujimori.getName());
console.log("President Fujimori Salary: "+ fujimori.getSalary());
console.log("President Fujimori Coima: "+ fujimori.getCoima());

console.log("President Alan García ID: "+ alangarcia.getId());
console.log("President Alan García Name: "+ alangarcia.getName());
console.log("President Alan García Salary: "+ alangarcia.getSalary());
console.log("President Alan García Coima: "+ alangarcia.getCoima());

console.log("President PPK ID: "+ ppk.getId());
console.log("President PPK Name: "+ ppk.getName());
console.log("President PPK Salary: "+ ppk.getSalary());
console.log("President PPK Coima: "+ ppk.getCoima());

const presidentes = new president.Presidents();
presidentes.addPresidents(fujimori);
presidentes.addPresidents(alangarcia);
presidentes.addPresidents(ppk);

console.log("binary data :"+ presidentes.serializeBinary());

const binaryPresidentsData = presidentes.serializeBinary();
fs.writeFileSync("presidentsBinary", binaryPresidentsData);

const rawDataPresidents = president.Presidents.deserializeBinary(binaryPresidentsData);

console.log(rawDataPresidents.array[0][0]);
console.log(rawDataPresidents.array[0][1]);
console.log(rawDataPresidents.array[0][2]);
console.log(rawDataPresidents.toString());
