function getReadyTables() {
  const readyTables = []
  for (let i = 0; i < 2; i++) {
      readyTables.push(Math.round(Math.random()*20) + 1)
  }
  return readyTables
}
console.log(getReadyTables())
/* Challenge 3: Ready Tables
- Topic: Return a Function
Our restaurant has 20 tables and the staff serves 
2 tables at a time. They need to know which tables 
are ready to serve.  
Let's fix this with what we learned about returning a 
function inside of another function.

1. Create a function called displayTables.
2. displayTables should map over the array of ready tables 
returned from getReadyTables to generate the html we 
need to render our display for the staff. One div should 
be generated for each table value. Here is an example: 
`<div class="table">TABLE VALUE HERE</div>`. 
3. Remember to remove the commas after applying map()
4. Fetch the tables <section> from the DOM 
5. Set the innerHTML content of the tables <section> 
to the displayTables function call.
*/

// function displayTables() {
//   return getReadyTables().map((el) => `<div class="table">${el}</div>`).join("")
// }

const displayTables = () => getReadyTables().map((el) => `<div class="table">${el}</div>`).join("")
document.getElementById('tables').innerHTML = displayTables()



///

// const getReadyTables = () => [Math.round(Math.random()*20) + 1, Math.round(Math.random()*20) + 1];
// const displayTables = () => getReadyTables().map(num => `<div class="table">${num}</div>`).join('');
// const tables = document.querySelector('#tables');
// tables.innerHTML = displayTables();