for(i=1; i <= 10; i++) {
    console.log(i);
}

for(i=10; i>=1; i--) {
    console.log(i);
}

let number = 0;
while(number < 10) {
    number++;
    console.log(number);
}

let number = 11;
while(number > 1) {
    number--;
    console.log(number);
}

let number = 0;
do {
    number++;
    console.log(number);
} while(number < 10);

let number = 11;
do {
    number--;
    console.log(number);
} while(number > 1);

const numbers = [1,2,3,4,5,6,7,8,9,10];
for(let integer of numbers) {
    console.log(integer);
}