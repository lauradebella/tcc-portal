$(document).ready(function(){
	if($('.nav-content .active').length > 1){
		$($('.nav-content li a')[0]).removeClass('active');
	}
});