// function getRandomDelay() {
// 	return Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds in milliseconds
// }

// function createPromise(delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(delay / 1000); // Resolving with time taken in seconds
//     }, delay);
//   });
// }

// async function populateTable() {
//   const promises = [
//     createPromise(getRandomDelay()),
//     createPromise(getRandomDelay()),
//     createPromise(getRandomDelay())
//   ];

// const results = await Promise.all(promises);
// const loadingRow = document.getElementById('loading');
// const table = loadingRow.parentNode;

// loadingRow.remove();

// results.forEach((time, index) => {
//   const row = table.insertRow();
//   const promiseCell = row.insertCell();
//   const timeCell = row.insertCell();
// 	promiseCell.textContent = `Promise ${index + 1}`;
//     timeCell.textContent = time.toFixed(3);
// });

// const totalRow = table.insertRow();
// const totalPromiseCell = totalRow.insertCell();
// const totalTimeCell = totalRow.insertCell();

//   totalPromiseCell.textContent = 'Total';
//   totalTimeCell.textContent = results.reduce((sum, time) => sum + time, 0).toFixed(3);
// }

// populateTable();
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
  const promises = [
    createPromise(getRandomDelay()),
    createPromise(getRandomDelay()),
    createPromise(getRandomDelay())
  ];

  const results = await Promise.all(promises);
  const loadingRow = document.getElementById('loading');
  const table = loadingRow.parentNode;

  loadingRow.remove();

  results.forEach((time, index) => {
    const row = table.insertRow();
    const promiseCell = row.insertCell();
    const timeCell = row.insertCell();

    promiseCell.textContent = `Promise ${index + 1}`;
    timeCell.textContent = time.toFixed(3);
  });

  const totalRow = table.insertRow();
  const totalPromiseCell = totalRow.insertCell();
  const totalTimeCell = totalRow.insertCell();

  totalPromiseCell.textContent = 'Total';
  totalTimeCell.textContent = results.reduce((sum, time) => sum + time, 0).toFixed(3);
}

populateTable();
