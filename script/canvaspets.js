(function() {
	'use strict';
	window.addEventListener('load', function() {
  		var recaptcha = document.getElementById('g-recaptcha-response');
  		if (recaptcha) {
  			recaptcha.setAttribute('required', 'required');
  		}
    	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	    var forms = document.getElementsByClassName('needs-validation');
	    // Loop over them and prevent submission
	    var validation = Array.prototype.filter.call(forms, function(form) {
		    form.addEventListener('submit', function(event) {
        		if (form.checkValidity() === false) {
          			event.preventDefault();
          			event.stopPropagation();
        		}
        		form.classList.add('was-validated');
      		}, false);
    	});
    	var sizeChart = document.getElementById('sizeChart');
    	var sizes = document.getElementsByClassName('sizeChart');
    	var sizeLinks = Array.prototype.filter.call(sizes, function(size) {
    		size.addEventListener('click', function(event) {
    			sizeChart.src = "/~j109320/canvaspets.art/images/sizechart-"+this.id+".png";
    		});
    	});
  	}, false);
})();