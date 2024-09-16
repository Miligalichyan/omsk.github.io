$('.eltitle2').click(function(){
	 $(this).css('display','none');
	 $(this).next().css('display','flex');
	 $(this).parent().next().slideToggle(500);
});
$('.eltitle3').click(function(){
	 $(this).prev().css('display','flex');
	 $(this).css('display','none');
	 $(this).parent().next().slideToggle(500);
});
$('.ii').click(function(){	
	let price=parseInt($(this).parent().children('.precio').children('p').html());
	let productPrice=parseInt($('.pr1').children('p').html())-price;
	$('.pr1 p').html(productPrice+'<span>руб.</span>')
	let allPrice=parseInt($('.pr2').children('p').html())-price;
	$('.pr2 p').html(allPrice+parseInt($('.pr3').children('p').html())+'<span>руб.</span>')
	$(this).parent().remove();
	console.log(price)
});

$('.quantity input').change(function(){
	let quant=$(this).val();
	let oldQoant=$(this).attr('data-quant');
	let productPrice=parseInt($(this).parent().next().children('p').attr('data-price'));
	$(this).parent().next().children('.precio p').html(quant*productPrice+'<span>руб.</span>');
	let allPrice=parseInt($('.pr1').children('p').html())+productPrice*(quant-oldQoant);
	$('.pr1 p').html(allPrice+'<span>руб.</span>');
	
	console.log(quant-oldQoant)
	$(this).attr('data-quant',quant);
	$('.pr2 p').html(allPrice+parseInt($('.pr3').children('p').html())+'<span>руб.</span>');
	
	});
	