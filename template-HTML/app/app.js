(function main() {

// fonction prorate for month
	$('.food').focusout(function(){

		var food = $('.food').val()*4.33;

		$('.food').val(food);
	
	});

	$('.fun').focusout(function(){

		var fun = $('.fun').val()*4.33;

		$('.fun').val(fun);
	
	});

	$('.gasoline').focusout(function(){

		var gasoline = $('.gasoline').val()*4.33;

		$('.gasoline').val(gasoline);
	
	});

	$('.transport').focusout(function(){

		var transport = $('.transport').val()*4.33;

		$('.transport').val(transport);
	
	});

	$('.sport').focusout(function(){

		var sport = $('.sport').val()/12;

		$('.sport').val(sport);
	
	});


	//end prorate

	//start function click calculate income and spending
	$("#valid").click(function(){

		var $valuespending = $('.general-spending');
		var $valuesincome = $('.general-income');
	    var compteurspending = 0;
	    var compteurincome =0;
	    var saving = parseFloat($('.saving').val());

	    if ($('.wather,.phone,.gas,.electricity,.internet').val() == 0) {

	    	alert("champs obligatoire non remplie");
	    	$('.wather,.phone,.gas,.electricity,.internet').removeClass('wather,phone,gas,electricity,internet').addClass('obligatory');
	    	return false;
	    }
    //function to calculate spending
    	if (compteurspending !=='') {

		    $valuespending.each(function() { 

		    	compteurspending += parseFloat($(this).val()); 
		    });

		    $('.spending-reslt').text(compteurspending)
		}
	    //function to calculate income
	    if (compteurincome !=='') {
	    	$valuesincome.each(function() { 
	    		compteurincome += parseFloat($(this).val()); 
	    	});
		
	    $('.income-reslt').text(compteurincome)
		}


	    var result = (compteurincome + saving) - compteurspending;

	    $('.result-final').text(result)

	    // function condition to return messages for somme to result
	    if (result<0) {
	    	$('.result-text--p1').text('Il vous reste'+' '+result+' ce mois-ci');
	    	$('.result-text--p2').text("Il est t'en d'économiser.");
	    }else if(result > 0){
	    	$('.result-text--p1').text('Il vous reste'+' '+result+' ce mois-ci');
	    	$('.result-text--p2').text("c'est bien vous avez le droit de vous faire plaisir :)");

	    }else{
	    	$('.result-text--p1').text('Il vous reste'+' '+result+' ce mois-ci');
	    	$('.result-text--p2').text("C'est juste ce mois-ci faite attention");
	    }

		return false;
	// end function condition

	});

// end function click

//function add lignes spending/income
$('.button-add--income').click(function(){
	$('.add-income').append("<div class='row'>	<label class='col'>-Autres recettes:</label><input value='' type='text' name='new' class='general-income col-3'>€<br></div>")
	return false;
})

$('.button-add--spending').click(function(){
	$('.add-spending').append("<div class='row'><label class='col'>-Autres dépenses:</label><input value='' type='text' name='new' class='general-spending col-3'>€<br></div>")
	return false;
})
//end function add

// function placeholder '' input

	$('.general-spending').click(function(){

    	$(this).val("");

	});

	$('.general-income').click(function(){

    	$(this).val("");

	});

	$('.saving').click(function(){

    	$(this).val("");

	});

// end function place holder


})(); //end fonction main


		// var page = $(this).attr('.result-final') 
  //   	var speed = 750 
  //  		$('html, body').animate({ scrollTop: $(page).offset().top }, speed) 
//var $valuespending = $('.credit,.rent,.wather,.electricity,.gas,.phone,.internet,.insurance-house,.insurance-car,.mutual,.taxes,.taxes-land,.food,.gasoline,.transport,.restaurant,.fun');
//var $valuesincome = $('.wages,.aids,.other');