

    const input = document.querySelectorAll('.field input')
    const Input = document.querySelector('.field input')
	console.log(input);
	const handleSubmit = (event)=>{
		 event.preventDefault()
		input.forEach((i)=>{
           if (i.value === '') {
			  $('.field-parent').addClass('error')
			   window.scrollTo(0, 0)
		   } else if(i.value !== ''){
			$('.field-parent').removeClass('error')
		   }
		})
		//  if ($('.field input').val() === '') {
		// 	$('.field-parent').addClass('error')
		//  }else if ($('.field input').val() !== ''){
		// 	$('.field-parent').removeClass('error')
		//  }
	 }


	 $('.field input').focusin(function (){
		 $(this).parent().addClass('active')
		 $(this).parent().parent('.field-parent').removeClass('error')
	 })
	 $('.field input').focusout(function (){
		$(this).parent().removeClass('active')
        if ($(this).val() !== '') {
			$(this).siblings().addClass('active_placeholder')
	   } else if ($(this).val() === ''){
		$(this).siblings().remove('active_placeholder')
	   }
	 })

     var save = ()=>{

        var fieldValue = Input.value
        localStorage.setItem('text', fieldValue)
     }
       
     const getValue = ()=>{
        var storedValue = localStorage.getItem('key')
        if (storedValue) {
            Input.value = storedValue
         }
         if ($('.field input').val() !== '') {
	 		$('.field input').siblings().addClass('active_placeholder')
	      }
     } 