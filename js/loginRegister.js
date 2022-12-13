const API_BASE = 'http://127.0.0.1:3000/api/tecnofrios';


const login = (data) => {

    const { email, password } = data;
    
    fetch(`${API_BASE}/login`, {
    method: 'POST',
    body: JSON.stringify({
        email: email,
        password: password,
    }),
    headers: {
        "Content-Type": ' application/json'
    }})
    .then(res => res.json())
    .then(json => {
        alert(json.msg);
        if (json.ok === true){
            window.location.href = "index.html";
        }
    });

}


const registro = (data) => {

    const { name,  email, password } = data;
    
    fetch(`${API_BASE}/registro`, {
    method: 'POST',
    body: JSON.stringify({
        nombre: name,
        email: email,
        password: password
    }),
    headers: {
        "Content-Type": ' application/json'
    }})
    .then(res => res.json())
    .then(json => alert(json.msg));

}


// Obtener datos para actualizar
const obtenerDatosLogin = () => {

    const dc = document;

    const email = dc.getElementById('email').value;
    const password = dc.getElementById('contrasena').value;


    if (email === '' || password === '' ){

        alert('Debes rellenar todos los campos');

    }  else {

        let datos = {
            "email": email,
            "password": password
        };
        login(datos);
    }

}

const obtenerDatosRegistro = () => {

    const dc = document;
    const name = dc.getElementById('nombre').value;
    const email = dc.getElementById('email').value;
    const password = dc.getElementById('password').value;


    if (name === '' || email ==='' || password === ''){

        alert('Debes rellenar todos los campos');

    }  else {

        let datos = {
            "name": name,
            "email": email,
            "password": password,
        };
        registro(datos);
    }

}
