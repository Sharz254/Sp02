function firstElements(arr, n) {
    return arr.slice(0, n < 0 ? 0 : n);
  }
  var heroes= ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

  console.log(firstElements(heroes, 5));

  console.log(firstElements(heroes, -1));