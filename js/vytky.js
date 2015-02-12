//function doContactPicker() {
		//alert('function started');
	/*navigator.contacts.pickContact(function(contact){
		console.log('The following contact has been selected:' + JSON.stringify(contact));
		//Build a simple string to display the Contact - would be better in Handlebars
		var s = "";
		s += "<h2>"+getName(contact)+"</h2>";

		if(contact.emails && contact.emails.length) {
			s+= "Email: "+contact.emails[0].value+"<br/>";
		}

		if(contact.phoneNumbers && contact.phoneNumbers.length) {
			s+= "Phone: "+contact.phoneNumbers[0].value+"<br/>";
		}

		if(contact.photos && contact.photos.length) {
			s+= "<p><img src='"+contact.photos[0].value+"'></p>";
		}

		document.querySelector("#selectedContact").innerHTML=s;
	},function(err){
		console.log('Error: ' + err);
	});*/
//}

$(document).ready(function(){
    $("input[type=checkbox]").click(function(){
    $(this).next().next().toggle(300);
    if ($(this).is(':checked')) { $(this).next().next().next().show(300) ; } else {
    	$(this).next().next().next().hide(300) ; $(this).next().next().next().next().hide(300) ;
    }
	});
	$("#SelectContact").click(function(){
		//alert('function started');
		navigator.contacts.pickContact(function(contact){
		console.log('The following contact has been selected:' + JSON.stringify(contact));
		//Build a simple string to display the Contact - would be better in Handlebars
		var s = "";
		s += "<h2>"+getName(contact)+"</h2>";

		if(contact.emails && contact.emails.length) {
			s+= "Email: "+contact.emails[0].value+"<br/>";
		}

		if(contact.phoneNumbers && contact.phoneNumbers.length) {
			s+= "Phone: "+contact.phoneNumbers[0].value+"<br/>";
		}

		if(contact.photos && contact.photos.length) {
			s+= "<p><img src='"+contact.photos[0].value+"'></p>";
		}

		document.querySelector("#selectedContact").innerHTML=s;
	},function(err){
		console.log('Error: ' + err);
	});
	});

	
	$.get("strings.xml",{},function(xml) {
		$('string-array',xml).each(function(i) {
			var namefield = $(this).attr("name");
			$("#content").append(namefield);
			$('string-array[name="'+namefield+'"]',xml).children("item").each(function(i) {
				itemvalue = $(this).text();
				$('[id$="'+namefield+'"]').parent().next().append("<div class='Item'>"+itemvalue+"</div>");
			});
		});
		$('.Item').click(function() {
			itemvalue = $(this).text();
			var textarea = this.parentNode.previousElementSibling.firstElementChild;
			$(textarea).text( $(textarea).text() + itemvalue + ", ");
			$(this).parent().hide(200);
			$(this).parent().next().show(300);
			$('.ShowExamples').click(function(){
				$(this).hide(300);
    			$(this).prev().show(300);
			});
		});
	});
});
