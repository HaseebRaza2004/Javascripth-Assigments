
// Q:1
for (var a = 1; a <= 10; a++) { console.log(a) }

// Q:2
for (var a = 1; a <= 20; a++) {
    if (a % 2 == 0) { console.log(a) }
}

// Q:3
for (var a = 1; a <= 15; a++) {
    if (a % 2 == 1) { console.log(a) }
}

// Q:4




// Q:5
for (var a = 1; a <= 10; a++) {
    console.log(7 * a)
}

// Q:6
let b = 0;
let c = 1;

for (let i = 3; i <= 10; i++) {
    let d = b + c;
    console.log(d);
    b = c;
    c = d;
}

// Q:7

// Q:8

// Q:9
for (var i = 1; i <= 10; i++) { console.log(i * i) }

// Q:10
var num = [3, 7, 2, 9, 5]
var largestnum = 0

for(var i = 0; i < num.length; i++){
    if(num[i] > largestnum){largestnum = num[i]}
}
console.log(largestnum)

