// Select the table element
const table = document.getElementById('myTable');

// Add a row with the loading text
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

// Function to generate a random time between min and max (inclusive)
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000; // Convert to milliseconds
}

// Create an array of Promises
const promises = Array.from({ length: 3 }, (_, index) =>
  new Promise(resolve => {
    const time = getRandomTime(1, 3);
    setTimeout(() => {
      resolve(time);
    }, time);
  })
);

// Wait for all Promises to resolve
Promise.all(promises)
  .then(times => {
    // Remove the loading row
    table.deleteRow(loadingRow.rowIndex);

    // Iterate over the resolved times and populate the table
    times.forEach((time, index) => {
      const row = table.insertRow();
      const firstColumn = row.insertCell();
      const secondColumn = row.insertCell();

      // Populate the columns
      firstColumn.textContent = `Promise ${index + 1}`;
      secondColumn.textContent = (time / 1000).toFixed(3);
    });

    // Calculate the total time
    const totalTime = times.reduce((acc, time) => acc + time, 0);

    // Add the total row
    const totalRow = table.insertRow();
    const totalFirstColumn = totalRow.insertCell();
    const totalSecondColumn = totalRow.insertCell();

    // Populate the total row
    totalFirstColumn.textContent = 'Total';
    totalSecondColumn.textContent = (totalTime / 1000).toFixed(3);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
