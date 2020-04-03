/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arr => {
  // concat() method combines two arrays
  let sortedArr = [...arr]; // ... spread operator - we make a copy of the arr https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

  return sortedArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title); // localeCompare - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    } else {
      return a.year - b.year;
    }
  });

  // return sortedArr.sort((a,b) => {
  //   if(a.year === b.year){      // if the year is the same then order by title
  //     if(a.title < b.title){
  //       return -1     // the position of the values do not change
  //     } else if(a.title > b.title){
  //       return 1      // the position of the values are swapped
  //     } else {
  //       return 0      // the values are the same, no changes
  //     }
  //   } else {
  //     return a.year - b.year
  //   }
  // })

  // return sortedArr
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  // let totalCount = 0;
  // for(let i=0; i<movies.length; i++){
  //     let bothConditions = movies[i].genre.includes('Drama') && movies[i].director.includes('Steven Spielberg')
  //     if(bothConditions){
  //         totalCount++
  //     }
  // }
  // return totalCount;

  let filteredMovies = movies.filter(obj => {
    if (obj.director === "Steven Spielberg" && obj.genre.includes("Drama")) {
      return obj;
    }
  });
  return filteredMovies.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  // map, filter, reduce -> make a copy of the array
  // sort -> mutates the original array
  let copyOfTheArray = [...arr];

  copyOfTheArray.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  }); // sort the entire 250 movies
  let firstTwenty = copyOfTheArray.slice(0, 20); // get the first 20 movies
  let firstTwentyTitles = firstTwenty.map(movie => {
    return movie.title;
  }); // get the array of first 20 titles
  return firstTwentyTitles; // return the array of titles

  // return [...arr]
  //   .sort(function(a, b) {
  //     return a.title.localeCompare(b.title);
  //   })
  //   .slice(0, 20)
  //   .map(movie => {
  //     return movie.title;
  //   });

  // return [...arr]
  //   .sort((a, b) => a.title.localeCompare(b.title))
  //   .slice(0, 20)
  //   .map(movie => movie.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// solution 1
const ratesAverage = (arr) => {
  let sum = 0;
  if(!arr.length) {     // if arr.length is = 0 = false                !false = true
    return 0
  }

  for(let i=0; i<arr.length; i++){
    if(arr[i].rate){     // check if the rate of the movie exists
      sum += arr[i].rate;
    }
  }

  let avg = sum/arr.length;
  return Number (avg.toFixed(2));   // could also use parseFloat
} 

// solution 2
// const ratesAverage = (arr) => {
//   // return Number((arr.reduce((sum, curr) => sum + Number(curr.rate), 0)/arr.length).toFixed(2)) || 0;
//     if(!arr.length) {     // if arr.length is = 0 = false                !false = true
//     return 0
//   }

//   let sum = arr.reduce((accum, currentMovie) => {
//     if(currentMovie.rate){
//       return accum + currentMovie.rate
//     }
//   }, 0)

//   let avg = sum/arr.length
//   return Number(avg.toFixed(2))
// } 

// Iteration 5: Drama movies - Get the average of Drama Movies
// const dramaMoviesRate = (arr) => {
//  let dramaArr =[]
//   for(let i=0; i<arr.length; i++){
//     if(arr[i].genre.includes("Drama")){
//       dramaArr.push(arr[i])
//     }
//   }
//   return ratesAverage(dramaArr);
// }

const dramaMoviesRate = (arr) => {
  // return ratesAverage(arr.filter(curr => curr.genre.indexOf("Drama") >= 0)) || 0;}
    let dramaArr = arr.filter((eachMovie) => {
      return eachMovie.genre.indexOf("Drama") >= 0
    })

    return ratesAverage(dramaArr)
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
