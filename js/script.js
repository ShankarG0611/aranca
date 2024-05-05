$(document).ready(function(){
	$('.searchbtn').click(function(){
		$('.searchform-wrap').slideToggle();
	});
	$('.closesearch').click(function(){
		$('.searchform-wrap').slideToggle();
	});

	$('.faq-title').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.faq-content').slideToggle();
		$('.faq-title').not(this).removeClass('active');
		$('.faq-title').not(this).parent().find('.faq-content').slideUp();
	})

	$('.select2').select2({
		minimumResultsForSearch: -1
	});

	$('.filter').change(function(){
  		filter_function();
	});

	$('table.filtertable tbody tr').show(); //intially all rows will be shown

	function filter_function(){
	  	$('table tbody tr').hide(); //hide all rows
	  
	  	var companyFlag = 0;
	  	var companyValue = $('#filter-company').val();
	  	var contactFlag = 0;
	  	var contactValue = $('#filter-type').val();
	  
	  //setting intial values and flags needed
	  
	 //traversing each row one by one
	  	$('table tr').each(function() {
		    if(companyValue == 0){   //if no value then display row
		    	companyFlag = 1;
		    }
		    else if(companyValue == $(this).find('td.company').data('company')){ 
		      companyFlag = 1;
		    }
		    else{
		      companyFlag = 0;
		    }
		    if(contactValue == 0){
		    	contactFlag = 1;
		    }
		    else if(contactValue == $(this).find('td.contact').data('contact')){
		      contactFlag = 1;
		    }
		    else{
		      contactFlag = 0;
		    }
		  
		    
		   if(companyFlag && contactFlag){
		     $(this).show();  //displaying row which satisfies all conditions
		   }

		}); 
	}

	document.getElementById("copyear").innerHTML = new Date().getFullYear();


	if ($(window).width() < 1199) {
		$('.hamburger').click(function(){
			$(this).toggleClass('is-active');
			$('.mainnav').toggleClass('active');
			$('body, html').toggleClass('hidd');
			$('.mobilebg').toggleClass('active');
		});

		$('.arrowdropmain').click(function(){
			$(this).parent().toggleClass('active');
			$(this).parent().find('.secnav').slideToggle();
			$('.arrowdropmain').not(this).parent().find('.secnav').slideUp();
			$('.arrowdropmain').not(this).parent().removeClass('active');
		});

		$('.arrowdrop').click(function(){
			$(this).parent().toggleClass('active');
			$(this).parent().find('.thirdnav').slideToggle();
			$('.arrowdrop').not(this).parent().find('.thirdnav').slideUp();
			$('.arrowdrop').not(this).parent().removeClass('active');
		})
	}

	if ($(window).width() < 600) {
		$('button').on('click',function(){
		    var pwidth = $('div.filtertable-wrap').width();
		    if($(this).hasClass('left')){
		       $('.filtertable-wrap_body').scrollLeft( $('.filtertable-wrap_body').scrollLeft()-pwidth );
		    } else {
		        $('.filtertable-wrap_body').scrollLeft($('.filtertable-wrap_body').scrollLeft()+pwidth );
		    };
		});
	}
});