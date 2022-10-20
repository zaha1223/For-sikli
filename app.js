let even = 0;
let odd = 0;

function findNumber(num) {
  for (i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      even += i;
    } else {
      odd += i;
    }
  }
}
findNumber(1000);

if (even > odd) {
  let result = Math.round(even / odd);
  console.log(result);
} else {
  let result = Math.round(odd / even);
  console.log(result);
}

console.log(even, odd);
