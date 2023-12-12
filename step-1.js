const arr = [1,2,3,4,5,6,7];
let sum = 0;
let total = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  total = total + arr[i] / arr.length;
}
console.log(`Sum is ${sum}`);
console.log(`Avg is ${total}`);