const tableDOM = document.getElementById("sandwich-menu");

fetch('sandwiches-menu.csv')
	.then(response => response.text())
	.then(text => {
		var sandwichList = text.split('\n')
	
		var result = "<table>"
		for (var i = 1; i<sandwichList.length-1;i += 1){
			var sandwich = sandwichList[i].split(',')
			result += `<tr>
							<td><strong>${sandwich[0]}:</strong></td>
							<td>${sandwich[1]}</td>
							<td>${sandwich[2]}</td>
						</tr>`
		}
		result += "</table>"
		tableDOM.innerHTML = result

	})

