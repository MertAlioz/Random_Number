let PhoneNum = Array();
let count = 1;
let errorCount = 0;

$("#saveNumber").click(function (e) {
	let number = $("input[name=number]").val();
	createNumber(number)
});

$("#clearButton").click(function (e) {
	Dataclear()
});

const createNumber = (number) => {
	if (number <= 1000) {
		for (var i = 1; i <= number; i++) {
			let num = `${firstNum()} ${twoNum()} ${lastNum()} ${lastNum()}`;
		SavePhoneNum(count, num);
			count++
		}
	}
	else {
		$("#myModal").modal();
	}
	writePhoneNum()

}

const SavePhoneNum = (id, Num) => {
	let positive_array = PhoneNum.filter(value => value.Number == Num);
	if (positive_array.length == 0) {
		PhoneNum.push({ "id": id, "Number": Num })
	}
	else {
		console.log("error", ++errorCount);
	}
}

const writePhoneNum = () => {
	let elements = ``;
	PhoneNum.forEach(function (e) {
		elements += `
		<tr>
		<td class="td-frst">${e.id}</td>
		<td>${e.Number}</td>
		<td><a href="tel:+${e.Number}" class="call-text"><small class="btn btn-info">Call</small></a></td>
			</tr>`;
	})
	$("#NumberList").empty();
	$("#NumberList").html(elements); 
}

const firstNum = () => {
	let number = "053";
	number = number + Math.floor(Math.random() * 9);
	return number;
}

const twoNum = () => {
	let number = Math.floor(Math.random() * (400 - 300)) + 300;
	if (number < 10) {
		number = 00 + "" + number;
	}
	if (number < 100) {
		number = 0 + "" + number;
	}
	return number + "";
}

const lastNum = () => {
	let Number = Math.floor(Math.random() * (99 - 0)) + 0;

	if (Number < 10) {
		Number = 0 + "" + Number;
	}
	return Number + "";
}

const Dataclear = () => {
	$("#NumberList").empty();
	PhoneNum = Array();
	count = 1;
	errorCount = 0;
}
