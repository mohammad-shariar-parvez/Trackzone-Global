const batch = [{ name: "Tonmoy", cgpa: "4.1" }, { name: "Mamun", cgpa: "3.8" }, { name: "Zaman", cgpa: "3.9" }, { name: "Zaman", cgpa: "4.2" }];

const top = batch.map((value) => {
	return {
		...value,
		title: `you have passed with ${value.cgpa}`,
		status: `Your scholsrship status is ${value.cgpa > 4 ? "Achived" : "Missed"}`
	};
});
console.log(top);


// object theke array akare return neya
// const batch = { "1": { name: "Tonmoy", cgpa: "4.1" }, "2": { name: "Mamun", cgpa: "3.8" }, "3": { name: "Zaman", cgpa: "3.9" }, "4": { name: "Zaman", cgpa: "4.2" } }

// const top = Object.values(batch).map((value) => {

// 	return {
// 		...value,
// 		title: `you have passed with ${value.cgpa}`,
// 		status: `Your scholsrship status is ${value.cgpa > 4 ? "Achived" : "Missed"}`
// 	}
// })

// console.log({ ...top })
/* 
@NORMAL APPROACH
*/
/* const top = {}
let pos = 1
function topStudents(group) {
	for (i in group) {
		if (group[i].cgpa > 4) {
			top[pos++] = {
				...group[i], title: `you have passed with ${group[i].cgpa}`,
				status: `Your scholsrship status is ${group[i].cgpa > 4 ? "Achived" : "Missed"}`
			}
		}
	}
}
topStudents(batch)
console.log(top) */