/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(i);
}
*/
/*
for (let i = 0; i <= 5; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <=5 ; j++) {
        console.log(`inner loop ${j} and inner loop value ${i}`);
        
    }
}
*/
let p = ""
for (let i = 1; i <= 5 ; i++) {
    for (let j = i; j <= i; j++) {
        p += "#";
    }
    console.log(p);
}



















