(function main() {

		var $valuespending = $('.credit,.rent,.wather,.electricity,.gas,.phone,.internet,.insurance-house,.insurance-car,.mutual,.taxes,.taxes-land,.food,.gasoline,.transport,.restaurant,.fun');
		var $valuesincome = $('.wages,.aids,.other');
	    var compteurspending = 0;
	    var compteurincome =0;

	//start function click calculate income and spending
	$("#valid").click(function(){

	    var saving = parseFloat($('.saving').val());


    //function to calculate spending

	    $valuespending.each(function() { 
	    	compteurspending += parseFloat($(this).val()); 
	    	});

	    $('.spending-reslt').text(compteurspending)

	    //function to calculate income

	    $valuesincome.each(function() { 
	    	compteurincome += parseFloat($(this).val()); 
	    	});

	    $('.income-reslt').text(compteurincome)

	    var result = (compteurincome + saving) - compteurspending;

	    $('.result-final').text(result)

	    // function condition to return messages for somme to result
	    if (result<0) {
	    	$('.result-text--p1').text('Il vous reste'+' '+result+' ce mois-ci');
	    	$('.result-text--p2').text("Il est t'en d'economiser.");
	    }else if(result > 0){
	    	$('.result-text--p1').text('Il vous reste'+' '+result+' ce mois-ci');
	    	$('.result-text--p2').text("c'est bien vous avez le droit de vous faire plaisir.");

	    }else{
	    	$('.result-text--p1').text('Il vous reste'+' '+result+' ce mois-ci');
	    	$('.result-text--p2').text("C'est juste ce mois si faite attention");
	    }

	    console.log(saving);
		return false;
	// end function condition

	});

// end function click

// function placeholder '' input

	($valuespending).click(function(){

    	$(this).val("");

	});

	($valuesincome).click(function(){

    	$(this).val("");

	});

	$('.saving').click(function(){

    	$(this).val("");

	});
	
// end function place holder

})(); //fonction main


		// var page = $(this).attr('.result-final') 
  //   	var speed = 750 
  //  		$('html, body').animate({ scrollTop: $(page).offset().top }, speed) 
