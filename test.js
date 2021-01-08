//1
function findOppositeNumer(n, number) {
  let returnNum = number > n / 2 ? number - n / 2 : number + n / 2;
  console.log(returnNum);
}
findOppositeNumer(10, 3);
findOppositeNumer(10, 2);
findOppositeNumer(10, 1);
findOppositeNumer(10, 4);
///2
function merString(array1, array2) {
  let arr1 = array1.split("");
  let arr2 = array2.split("");
  let returnString = [];

  arr1.forEach((x, i) => {
    returnString.push(x);
    returnString.push(arr2[i]);
  });
  if (arr2.length > arr1.length) {
    const x = arr2.splice(arr1.length, arr2.length).join("");
    returnString.push(x);
    console.log(returnString.join(""));
  }
}
merString("123", "asdafdfs");
