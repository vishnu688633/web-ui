 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}





 
        let persons = [];
        
        const addPerson = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let person = {
                
 	name: document.getElementById('inputname').value,
	email: document.getElementById('inputemail').value,
	mobile: document.getElementById('inputmobile').value,
	password: document.getElementById('inputpassword').value,
           
              
            }
            persons.push(person);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {persons} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(persons, '\t', 2);

            //saving to localStorage
            localStorage.setItem('PersonList', JSON.stringify(persons) );
        }


        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addPerson);
        });
    


 


