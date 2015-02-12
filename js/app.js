document.addEventListener("deviceready", init, false);

function init() {	
	document.querySelector("#pickContact").addEventListener("touchend", doContactPicker, false);
	
}

function doContactPicker() {
	navigator.contacts.pickContact(function(contact){
		console.log('The following contact has been selected:' + JSON.stringify(contact));
		var s = "Vybraná vytýkaná osoba:";
		s += getName(contact);
		if(contact.phoneNumbers && contact.phoneNumbers.length) {
			s+= ", Phone: "+contact.phoneNumbers[0].value+"<br/>";
		}
		document.querySelector("#phonenumber").innerHTML=contact.phoneNumbers[0].value;
		document.querySelector("#selectedContact").innerHTML=s;
	},function(err){
		console.log('Error: ' + err);
	});
}


/*
Handles iOS not returning displayName or returning null/""
*/
function getName(c) {
	var name = c.displayName;
	if(!name || name === "") {
		if(c.name.formatted) return c.name.formatted;
		if(c.name.givenName && c.name.familyName) return c.name.givenName +" "+c.name.familyName;
		return "Nameless";
	}
	return name;
}
