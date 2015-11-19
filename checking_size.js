$('input[type=file]').bind('change', function() {
	
	var file_size=this.files[0].size;
	var file_size_round=Math.round(file_size/1024/1024);
	var max_size=2; // unit by MB
	var total_size=max_size * 1024 * 1024; // convert the file size to byte
	var alert_message="<strong>File size: </strong> max uplaoded file size "+max_size+" MB and your file size "+file_size_round+" MB";

	if (file_size > total_size){
		$(".alert span").replaceWith("<span>"+alert_message+"</span>");
		$(".alert").removeClass("hide");
	}else{
		$(".alert").addClass("hide");
	}

});