function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1qSuKUK1tTNzcxmB2fhI0tM0kcnRvVOHag_ZlYNYpcOU/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

console.log('hello! Its working.')

function showInfo(data, tabletop) {
console.log(data);

for (var i = 0; i < data.length; i++) {
	
	// Change this variable to switch the office!
	var donorLevel = document.getElementById("headers").className;
	console.log(donorLevel);

	document.title = "Donor Level: " + donorLevel;


	if (data[i].donor_level == donorLevel) {
	$("#table-body").append(
		'<tr>' +
		'<td class="name-column">' + data[i].name + '</td>' +
		'</tr>'
		);
	}
	
}

}