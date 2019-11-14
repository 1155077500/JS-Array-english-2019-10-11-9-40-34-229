// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
ans_a = Array.isArray(a);
ans_b = Array.isArray(b);
console.log(ans_a);
console.log(ans_b);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (i = 0; i < a.length ; i++){
    a[i] *= 2;
 }
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
case1:
var colors = ["Red", "Green", "White", "Black"];
var ans = "";
ans = colors.toString();
ans = ans.replace(/,/g,' ');
console.log(ans);

case2:
var ans = "";
ans = colors.toString();
ans = ans.replace(/,/g,'+');
console.log(ans);

case3:
var ans = "";
ans = colors.toString();
console.log(ans);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b){return b-a});
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var mostfrq = 1;
var count = 0;
var element;

for (var i = 0; i < a.length; i++){
  for (var j = i; j < a.length; j++){
    if (a[i] == a[j]) count++;
    if (count > mostfrq){
      mostfrq = count;
      element = a[i];
    }
  }
count = 0;
}
console.log(element);
