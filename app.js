//create a constant for the form

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

// The parseInt() function parses a string argument and returns an integer of the specified radix
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


// Condition to ensure that the height and weight are not left empty    
    if((height === '') || (height < 0) || (isNaN(height))){
        results.innerHTML = "Please providea valid height";
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        
        results.innerHTML = "Please provide a valid weight";

    }
    else{
//Convert a number into a string, rounding the number to keep only two decimals
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

// display the result

        results.innerHTML =`<span>${bmi} </span>`

    }


});