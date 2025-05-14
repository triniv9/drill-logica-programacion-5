
const button = document.getElementById("secretButton");
const input = document.getElementById("secretInput");
const mensaje = document.getElementById("message");
const intentos = [];
const secretNumber = 77;

    button.addEventListener("click", function () {
        const valor = Number(input.value);

        if (isNaN(valor) || valor < 1 || valor > 100) {
            mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
            return;
        }

        intentos.push(valor);

        if (valor === secretNumber) {
            //alert(`¡Felicidades, adivinaste el número secreto! Tus intentos: ${intentos.join(", ")}`);
        document.getElementById("customAlertMsg").textContent = `¡Felicidades, adivinaste el número secreto! Tus intentos: ${intentos.join(", ")}`;
        document.getElementById("customAlert").style.display = "block";
        mensaje.textContent = "";
        mensaje.classList.remove("error-message")
        } else {
            mensaje.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
            mensaje.classList.add("error-message");
            input.value = "";
            input.focus();
        }
    });