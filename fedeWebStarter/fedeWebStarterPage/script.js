

window.addEventListener('load', () => {
    const submit_button = document.querySelector('#contacto_submit');
    submit_button?.addEventListener('click', (event) => {
        event.preventDefault();
        /*alert('Hiciste click boludito!!!');*/
        const name = document.querySelector('#contacto_namebox').value;
        const email = document.querySelector('#contacto_emailbox').value;
        const message = document.querySelector('#contacto_messagebox').value;
        console.log('marcelo',name,email,message);
        if (name=='' || email=='' || message=='' ){
            document.querySelector('#contacto_error').classList.add('contacto_error_show'); /* agrega a el objeto con el id '#contacto_error' a la clase 'contacto_error_show', para que se le apliquen los cambios de estilo del CSS y se muestre el mensaje */ 
            document.querySelector('#contacto_feedback_name_indicator').classList.remove('contacto_feedback_indicator_show');
            document.querySelector('#contacto_feedback_email_indicator').classList.remove('contacto_feedback_indicator_show');
            document.querySelector('#contacto_feedback_message_indicator').classList.remove('contacto_feedback_indicator_show');
            document.querySelector('#contacto_feedback_message').classList.add('contacto_feedback_hide');
            document.querySelector('#contacto_feedback_name').classList.add('contacto_feedback_hide');
            document.querySelector('#contacto_feedback_email').classList.add('contacto_feedback_hide');
        }
        else{
            document.querySelector('#contacto_error').classList.remove('contacto_error_show');
            document.querySelector('#contacto_feedback_name').innerHTML = name;
            document.querySelector('#contacto_feedback_email').innerHTML = email;
            document.querySelector('#contacto_feedback_message').innerHTML = message;
            document.querySelector('#contacto_feedback_message').classList.remove('contacto_feedback_hide');
            document.querySelector('#contacto_feedback_name').classList.remove('contacto_feedback_hide');
            document.querySelector('#contacto_feedback_email').classList.remove('contacto_feedback_hide');
            document.querySelector('#contacto_feedback_name_indicator').classList.add('contacto_feedback_indicator_show');
            document.querySelector('#contacto_feedback_email_indicator').classList.add('contacto_feedback_indicator_show');
            document.querySelector('#contacto_feedback_message_indicator').classList.add('contacto_feedback_indicator_show');
        }
    })
    const generate_button = document.querySelector("#generator_button");
    generate_button.addEventListener('click',generate_name);
})

function generate_name(){
    fetch('https://randomuser.me/api/')
        .then((data)=>{                                    /* el comportamiento .then se le aplica a fetch(blabla) y define a lo que devuelve fetch(blabla) como "data" en este caso*/
            return data.json();
        })
        .then((response)=>{
            console.log(response);
            const response_data = response.results[0].name; /* en este caso, se define la constante response_data para después no tener que escribir toda la dirección "response.results[0].name" a la hora de concatenar la info */
            const generated_name = `${response_data.title} ${response_data.first} ${response_data.last}`;
            document.querySelector('#generator_name').innerHTML = generated_name;
        })
}