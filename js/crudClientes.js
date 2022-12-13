
const API_BASE = 'http://127.0.0.1:3000/api/tecnofrios';


// Listar clientes API
const listCl = () => {
    fetch(`${API_BASE}/listar-clientes`, {
       method: 'GET',
       headers: {
           "Content-Type": ' application/json'
       }})
       .then(res => res.json())
       .then(json => listarTabla(json));
     
}

//  Listar Función
const listarTabla = (respuesta) => {

    
    let myTable="<table>";
    myTable+="<tr>";
    myTable+="<th>"+"Nombre";
    myTable+="<th>"+"Apellido";
    myTable+="<th>"+"Correo";
    myTable+="<th>"+"Fecha Nacimiento";
    myTable+="<th>"+"Teléfono";
    myTable+="<th>"+"Accion";
    myTable+="<tr>";
    for(const element of respuesta){
        
        myTable+="<td>"+element.nombre+"</td>";
        myTable+="<td>"+element.apellido+"</td>";
        myTable+="<td>"+element.email+"</td>";
        myTable+="<td>"+element.fecha_nacimiento+"</td>";
        myTable+="<td>"+element.telefono+"</td>";
        myTable+="<td>"+"<input type='button' onclick='enviarDatosInput("+element.id+")' value='Editar' style='width:80px; height:45px'>"+
        "<input type='button'  onclick='delCl("+element.id+")' value='Eliminar' style='width:80px; height:45px'>"+
        "</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";

    const div = document.getElementById('listarDiv');
    div.innerHTML = myTable;
   

}


// Añadir cliente API
const addCl = (data) => {

    const { name, lastname, email, day, tel } = data;
    
    fetch(`${API_BASE}/add-cliente`, {
    method: 'POST',
    body: JSON.stringify({
        nombre: name,
        apellido: lastname,
        email: email,
        fecha_nacimiento: day,
        telefono: tel
    }),
    headers: {
        "Content-Type": ' application/json'
    }})
    .then(res => res.json())
    .then(json => alert(json.msg));

}

// Obtener datos front Función
const obtenerDatos = () => {

    const dc = document;

    const name = dc.getElementById('nombre').value;
    const apellido = dc.getElementById('apellido').value;
    const email = dc.getElementById('email').value;
    const day = dc.getElementById('dia').value;
    const tel = dc.getElementById('telefono').value;

    if (name === '' || apellido === '' || email ==='' || day === '' || tel === ''){

        alert('Debes rellenar todos los campos');

    }  else {

        let datos = {
            "name": name,
            "lastname": apellido,
            "email": email,
            "day": day,
            "tel": tel
        };
        addCl(datos);
    }

}
// Obtener datos para actualizar
const obtenerDatosAct = () => {

    const dc = document;

    const name = dc.getElementById('nombre').value;
    const apellido = dc.getElementById('apellido').value;
    const email = dc.getElementById('email').value;
    const day = dc.getElementById('dia').value;
    const tel = dc.getElementById('telefono').value;

    if (name === '' || apellido === '' || email ==='' || day === '' || tel === ''){

        alert('Debes rellenar todos los campos');

    }  else {

        let datos = {
            "name": name,
            "lastname": apellido,
            "email": email,
            "day": day,
            "tel": tel
        };
        updCl(datos);
    }

}

// Actualizar Cliente API
const updCl = (data) => {

    const { name, lastname, email, day, tel } = data;

    fetch(`${API_BASE}/act-cliente`, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: name,
            apellido: lastname,
            email: email,
            fecha_nacimiento: day,
            telefono: tel
        }),
        headers: {
            "Content-Type": ' application/json'
        }})
        .then(res => res.json())
        .then(json => alert(json.msg));

}

// enviar datos a inputs Función
const enviarDatosInput = (idCliente) => {

    const dc = document;
    
    fetch(`${API_BASE}/listar-clientes`, {
       method: 'GET',
       headers: {
           "Content-Type": ' application/json'
       }})
       .then(res => res.json())
       .then(json => {
        listarTabla(json)
        for(const el of json){
            if(idCliente === el.id){

            
            dc.getElementById('nombre').value = el.nombre;
            dc.getElementById('apellido').value = el.apellido;
            dc.getElementById('email').value = el.email;
            dc.getElementById('dia').value = el.fecha_nacimiento;
            dc.getElementById('telefono').value = el.telefono; 
            }
        }
    });
    

}

const delCl = (idCliente) => {


    fetch(`${API_BASE}/elim-cliente/${idCliente}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": ' application/json'
        }})
        .then(res => res.json())
        .then(json => alert(json.msg));

}

