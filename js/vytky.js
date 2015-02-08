$(document).ready(function(){
    $("input[type=checkbox]").click(function(){
    $(this).next().next().toggle(300);
    $(this).next().next().next().toggle(300);
	});
	$.get("strings.xml",{},function(xml) {
		$('string-array',xml).each(function(i) {
			var namefield = $(this).attr("name");
			$("#content").append(namefield);
			//="'+attrName+'"]
			$('string-array[name="'+namefield+'"]',xml).children("item").each(function(i) {
				itemvalue = $(this).text();
				$('input[id$="'+namefield+'"]').parent().next().append("<div class='Item'>"+itemvalue+"</div>");
				//$('input[id$="'+namefield+'"]').parent().next().append(namefield);
			});
			//$('input[id$="'+namefield+'"]').parent().next().append(namefield);
		});
	});
});
