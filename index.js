let arr=[2,3,45,6,7];

console.log(arr);
console.log("Hello Mirai");

let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

let product=1;
for(let i=0;i<arr.length;i++){
    product*=arr[i];
}
console.log("Sum:",sum);
console.log("Product:",product);