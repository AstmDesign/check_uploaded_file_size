// check the uploaded files size
function fileUploaderChecker(max_size,element){
  var file_size=element.files[0].size;
	var max_size_kb=max_size * 1024 * 1024; // convert the file size to KB

	if (file_size > max_size_kb){
    var error_message ="The file size bigger than " +max_size+ "MB"
    $(element).next('.error-message').html(error_message);
	}else{
		$(element).next('.error-message').html("");
	}
}
