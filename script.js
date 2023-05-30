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
let promise1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve();
		let end1 = new Date().getTime(); // milliseconds from 1970 Jan 1 
		addPromiseStatus("Promise1", start1, end1)
	}, 2000)
})

let start2 = new Date().getTime();
let promise2 = new Promise((resolve) => {
	setTimeout(() => {
		resolve();
		let end2 = new Date().getTime();
		addPromiseStatus("Promise2", start2, end2);
	}, 1000)
})

let start3 = new Date().getTime();
let promise3 = new Promise((resolve) => {
	setTimeout(() => {
		resolve();
		let end3 = new Date().getTime();
		addPromiseStatus("Promise3", start3, end3)
	}, 3000)
})

let finalPromise = Promise.all([promise1, promise2, promise3]);

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