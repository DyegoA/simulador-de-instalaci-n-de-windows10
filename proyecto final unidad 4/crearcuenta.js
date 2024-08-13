let usuarios = [];

function registrarUsuario() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    usuarios.push({ usuario: usuario, password: password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    
    window.location.href = 'carga.html';
    return false;
}