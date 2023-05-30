let resolvedPromises = [];
// {name: "Promise1", time_taken: 2s}
let minTime, maxTime;

function addPromiseStatus(name, start, end) {
	if (!minTime) minTime = start;
	maxTime = end;
	resolvedPromises.push({
		name,
		time: (end - start) / 1000
	})
}

let start1 = new Date().getTime(); // milliseconds from 1970 Jan 1
let Promise 1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve();
		let end1 = new Date().getTime(); // milliseconds from 1970 Jan 1 
		addPromiseStatus("Promise 1", start1, end1)
	}, 2000)
})

let start2 = new Date().getTime();
let Promise 2 = new Promise((resolve) => {
	setTimeout(() => {
		resolve();
		let end2 = new Date().getTime();
		addPromiseStatus("Promise 2", start2, end2);
	}, 1000)
})

let start3 = new Date().getTime();
let Promise 3 = new Promise((resolve) => {
	setTimeout(() => {
		resolve();
		let end3 = new Date().getTime();
		addPromiseStatus("Promise 3", start3, end3)
	}, 3000)
})

let finalPromise = Promise.all([Promise 1, Promise 2, Promise 3]);

finalPromise.then(() => {
	// console.log(resolvedPromises);
	addtoUI(resolvedPromises);
})

const table = document.getElementsByTagName("table")[0];
const loadingRow = document.getElementById("loading-row");

function addtoUI(list) {
	loadingRow.remove();
	for (let i = 0; i < list.length; i++) {
		let tr = document.createElement("tr");
		tr.innerHTML = `<td>${list[i].name}</td><td>${list[i].time}</td>`;
		table.append(tr);
	}
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>Total</td><td>${(maxTime - minTime)/1000}</td>`
	table.append(tr);
}