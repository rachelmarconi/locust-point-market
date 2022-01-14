const sandwichTableDOM = document.getElementById("sandwich-menu");
const soupDOM = document.getElementById("daily-soups")

fetch('sandwiches-menu.csv')
	.then(response => response.text())
	.then(text => {
		var sandwichList = text.split('\n')
	
		var result = "<table><th></th><th>Sandwiches</th><th>Half Subs</th>"
		for (var i = 1; i<sandwichList.length-1;i += 1){
			var sandwich = sandwichList[i].split(',')
			result += `<tr>
							<td><strong>${sandwich[0]}:</strong></td>
							<td>${sandwich[1]}</td>
							<td>${sandwich[2]}</td>
						</tr>`
		}
		result += "</table>"
		sandwichTableDOM.innerHTML = result

	})

fetch('soups-menu.csv')
	.then(response => response.text())
	.then(text => {
		var soupList = text.split('\n')
		var result = "<ul>"

		for (var i = 0; i<soupList.length-1; i+=1){
			var day = soupList[i].slice(0,soupList[i].indexOf(','))
			var soups = soupList[i].slice(soupList[i].indexOf(',')+1,-1)

			soups = soups.replaceAll("\"","")

			result += `<li><strong>${day}:</strong> ${soups}</li>`
		}
		result += "</ul>"
		soupDOM.innerHTML = result
	})

