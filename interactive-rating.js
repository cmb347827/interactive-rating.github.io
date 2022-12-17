    
		 
	function getPage(){
         const url = window.location.href;
		console.log(url);
	     const regex = /([a-z]*.html)/gm;
         let pageArray = url.match(regex);
	     let page = '';
		 if(pageArray !== null){
			 page = pageArray.join();
		 }
		 return page;
	}
    function getId(id){
		return document.getElementById(id);
	}
	
	function getNum(obj){
		console.log(obj);
		let result = getId('result');
		const regex = /[0-9]+/gm;
		let buttonArray = obj.match(regex);
		buttonnum = '';
		if(buttonArray !== null){
			buttonnum = buttonArray.join();
		}
		result.textContent= '  ' + buttonnum + ' ';
	}
	
	//in index.html: form-control , click event
	//in thanks.html: result + form-control.
	const page = getPage();
	if(page !== 'thanks.html'){
		console.log('in index.html');
        document.getElementById('radio1').addEventListener('click',() =>{
			console.log('in radio1');
		    const radioButtonChecked = document.querySelector('input[name=radioFeedback]:checked');	
			console.log(radioButtonChecked.id)	
		    sessionStorage.setItem("button", radioButtonChecked.id);
	    });
		document.getElementById('radio2').addEventListener('click',() =>{
			console.log('in radio2');
		    const radioButtonChecked = document.querySelector('input[name=radioFeedback]:checked');
            console.log(radioButtonChecked.id)	
		    sessionStorage.setItem("button", radioButtonChecked.id);
	    });
		document.getElementById('radio3').addEventListener('click',() =>{
			console.log('in radio3');
		    const radioButtonChecked = document.querySelector('input[name=radioFeedback]:checked');
            console.log(radioButtonChecked.id)	
		    sessionStorage.setItem("button", radioButtonChecked.id);
	    });
		document.getElementById('radio4').addEventListener('click',() =>{
			console.log('in radio4');
		    const radioButtonChecked = document.querySelector('input[name=radioFeedback]:checked');
            console.log(radioButtonChecked.id)	
		    sessionStorage.setItem("button", radioButtonChecked.id);
	    });
		document.getElementById('radio5').addEventListener('click',() =>{
			console.log('in radio5');
		    const radioButtonChecked = document.querySelector('input[name=radioFeedback]:checked');
            console.log(radioButtonChecked.id)	
		    sessionStorage.setItem("button", radioButtonChecked.id);
	    });
	}
	window.addEventListener('load',function(){
		if(page ==='thanks.html'){
			console.log('in thanks.html');
			const checkedButton = sessionStorage.getItem('button');
			console.log('checkedButton:',checkedButton);
			getNum(checkedButton);
		}
	});
    
	    
        
