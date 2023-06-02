function getRandomDelay() {
  return Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds in milliseconds
}

function createPromise(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay / 1000); // Resolving with time taken in seconds
    }, delay);
  });
}

async function populateTable() {
  const loadingRow = document.createElement('tr');
  const loadingCell = document.createElement('td');

  loadingCell.textContent = 'Loading...';
  loadingCell.colSpan = 2;

  loadingRow.appendChild(loadingCell);
  outputTable.appendChild(loadingRow);

  const promises = [
    createPromise(getRandomDelay()),
    createPromise(getRandomDelay()),
    createPromise(getRandomDelay())
  ];

  const results = await Promise.all(promises);

  outputTable.removeChild(loadingRow);

  results.forEach((time, index) => {
    const row = document.createElement('tr');
    const promiseNameCell = document.createElement('td');
    const timeTakenCell = document.createElement('td');

    promiseNameCell.textContent = `Promise ${index + 1}`;
    timeTakenCell.textContent = time.toFixed(3);

    row.appendChild(promiseNameCell);
    row.appendChild(timeTakenCell);
    outputTable.appendChild(row);
  });

  const totalRow = document.createElement('tr');
  const totalPromiseNameCell = document.createElement('td');
  const totalTimeTakenCell = document.createElement('td');

  totalPromiseNameCell.textContent = 'Total';
  totalTimeTakenCell.textContent = results.reduce((sum, time) => sum + time, 0).toFixed(3);

  totalRow.appendChild(totalPromiseNameCell);
  totalRow.appendChild(totalTimeTakenCell);
  outputTable.appendChild(totalRow);
}

const outputTable = document.getElementById('output');
populateTable();

