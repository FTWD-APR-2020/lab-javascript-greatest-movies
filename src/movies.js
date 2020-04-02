/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
  // concat() method combines two arrays
  let sortedArr = [...arr]  // ... spread operator - we make a copy of the arr https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

  return sortedArr.sort((a,b) => {
    if(a.year === b.year){
      return a.title.localeCompare(b.title) // localeCompare - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    } else {
      return a.year - b.year
    }
  })

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
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (movies) => {
    // let totalCount = 0;
    // for(let i=0; i<movies.length; i++){
    //     let bothConditions = movies[i].genre.includes('Drama') && movies[i].director.includes('Steven Spielberg')
    //     if(bothConditions){
    //         totalCount++
    //     }
    // }
    // return totalCount;

    let filteredMovies = movies.filter(obj => {
        if(obj.director === "Steven Spielberg" && obj.genre.includes('Drama')){
            return obj
        }
    })
    return filteredMovies.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
