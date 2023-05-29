// //your JS code here. If required.
// function getRandomDelay() {
// 	return Math.floor(Math.random() * 3000) + 1000;
// }

// function createPromise(name) {
//   return new Promise((resolve) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       resolve({ name, delay });
//     }, delay);
//   });
// }

// const outputElement = document.getElementById("output");

// // Create an array of three promises
// const promises = [
//   createPromise("Promise 1"),
//   createPromise("Promise 2"),
//   createPromise("Promise 3"),
// ];

// // Add a row with the loading text
// const loadingRow = document.createElement("tr");
// const loadingCell = document.createElement("td");
// loadingCell.setAttribute("colspan", "2");
// loadingCell.innerText = "Loading...";
// loadingRow.appendChild(loadingCell);
// outputElement.appendChild(loadingRow);

// / Use Promise.all to wait for all promises to resolve
// Promise.all(promises)
//  .then((results) => {
//    // Remove the loading text
//    outputElement.removeChild(loadingRow);

//    // Iterate over the results and populate the table
//    results.forEach((result) => {
// 	   const row = document.createElement("tr");

//        const nameCell = document.createElement("td");
//        nameCell.innerText = result.name;
//        row.appendChild(nameCell);
     
//        const delayCell = document.createElement("td");
//        delayCell.innerText = (result.delay / 1000).toFixed(3);
//        row.appendChild(delayCell);
	
// 	   outputElement.appendChild(row);
//    });

//    // Calculate and display the total time taken
//    const totalTime = results.reduce((total, result) => {
//      return total + result.delay;
//    }, 0);

//    const totalRow = document.createElement("tr");
//    const totalNameCell = document.createElement("td");
//    totalNameCell.innerText = "Total";
//    totalRow.appendChild(totalNameCell);

//    const totalTimeCell = document.createElement("td");
//    totalTimeCell.innerText = (totalTime / 1000).toFixed(3);
//    totalRow.appendChild(totalTimeCell);   
//    outputElement.appendChild(totalRow);
//  })
// .catch((error) => {
// 	console.error(error);
// });
function getRandomDelay() {
	return Math.floor(Math.random() * 3000) + 1000;
}

function createPromise(name) {
	return new Promise((resolve) => {
		const delay = getRandomDelay();
		setTimeout(() => {
			resolve({
				name,
				delay
			});
		}, delay);
	});
}

const outputElement = document.getElementById("output");

// Create an array of three promises
const promises = [
	createPromise("Promise 1"),
	createPromise("Promise 2"),
	createPromise("Promise 3"),
];

// Add a row with the loading text
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.setAttribute("colspan", "2");
loadingCell.innerText = "Loading...";
loadingRow.appendChild(loadingCell);
outputElement.appendChild(loadingRow);

// Use Promise.all to wait for all promises to resolve
Promise.all(promises)
	.then((results) => {
		// Remove the loading text
		outputElement.removeChild(loadingRow);

		// Iterate over the results and populate the table
		results.forEach((result) => {
			const row = document.createElement("tr");

			const nameCell = document.createElement("td");
			nameCell.innerText = result.name;
			row.appendChild(nameCell);

			const delayCell = document.createElement("td");
			delayCell.innerText = (result.delay / 1000).toFixed(3);
			row.appendChild(delayCell);

			outputElement.appendChild(row);
		});

		// Calculate and display the total time taken
		const totalTime = results.reduce((total, result) => {
			return total + result.delay;
		}, 0);

		const totalRow = document.createElement("tr");
		const totalNameCell = document.createElement("td");
		totalNameCell.innerText = "Total";
		totalRow.appendChild(totalNameCell);

		const totalTimeCell = document.createElement("td");
		totalTimeCell.innerText = (totalTime / 1000).toFixed(3);
		totalRow.appendChild(totalTimeCell);

		outputElement.appendChild(totalRow);
	})
	.catch((error) => {
		console.error(error);
	});