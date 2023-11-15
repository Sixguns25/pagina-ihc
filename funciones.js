function Saludar() {
    const nombre = document.querySelector('input[type="text"]').value;
    const correo = document.querySelector('input[type="email"]').value;
    const mensaje = document.querySelector('textarea').value;

    alert(`Hola ${nombre}, tu correo es ${correo} y tu mensaje es: ${mensaje}`);
}
