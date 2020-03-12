window.onload = function () {

	let clickBtn = document.querySelector("#check");
	clickBtn.addEventListener("click", checkDate);

	function checkDate () {

		let inputDate = document.querySelector("#inputtext").value;
		let regExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
		let result = inputDate.match(regExp);

		if (!result) {
			alert("Вы ввели не дату!");
		} else {

			document.querySelector("#yourinput").innerHTML = "Вы вввели дату: " + inputDate;
			let dateArray = inputDate.split("/").reverse();
			let dateStr = dateArray.join(", ");
			let date = new Date(dateStr);
			let weekDate = date.getDay();

			if (weekDate == 0) {
				document.querySelector("#weekdate").innerHTML = "Это " + 7 + " день недели.";
			} else {
				document.querySelector("#weekdate").innerHTML = "Это " + weekDate + " день недели";
			};
		};

		document.querySelector("#inputtext").value = "";
	};
};




