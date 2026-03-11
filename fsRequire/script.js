const fs = require('fs');

console.log("Start of code... ");
const content = fs.readFile('Notes.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
console.log("End of code... ");