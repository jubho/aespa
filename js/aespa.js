$(document).ready(function() {
	
	
	//index���������� ���̵� �����̵� 
	const slide = setInterval( fade, 1900);
	let i = 5;
	function fade() {
		i--;
		if(i==0) {
			$("#index img").stop().fadeIn(1100);
			i=5;
		}else {
			$("#index img").eq(i).stop().fadeOut(1000);
		}
	}//fade()��
	
	
	
});/////all end