const tableDOM = document.getElementById("sandwich-menu");

fetch('sandwiches-menu.csv')
	.then(response => response.text())
	.then(text => {
		var sandwichList = text.split('\n')
	
		var result
		for (var i = 1; i<sandwichList.length-1;i += 1){
			var sandwich = sandwichList[i].split(',')
			result += `<strong>${sandwich[0]}:</strong>
			 ${sandwich[1]}/${sandwich[2]}<br>`
		}

		tableDOM.innerHTML = result

	})

