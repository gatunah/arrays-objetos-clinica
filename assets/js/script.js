document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];
var cabecera =
        `<tr>
        <th>Hora</th>
        <th>Especialista</th>
        <th>Paciente</th>
        <th>RUT</th>
        <th>Prevision</th>
        </tr>`;

function mostrarDatos(consulta) {
    
    var thead = document.createElement('thead');
    thead.innerHTML = cabecera;//SE USA INNERHTML PQ ES UN STRING

    var tabla = document.createElement('table');
    var tbody = document.createElement('tbody');
    tabla.appendChild(thead);
    tabla.classList.add('table', 'table.bordered')
    document.body.classList.add('p-5');
    for (var i = 0; i < consulta.length; i++) {
        var fila = document.createElement('tr');
        var parrafo = document.createElement('p');

        fila.innerHTML = `
                <td>${consulta[i].hora} </td>
                <td>${consulta[i].especialista}</td>
                <td>${consulta[i].paciente}</td>
                <td>${consulta[i].rut}</td>
                <td>${consulta[i].prevision}</td>    
            `;
        tbody.appendChild(fila);//SE AGREGAN LOS CHILD DESDE LO MAS ESPECIFICO
        tbody.appendChild(parrafo);//SE AGREGA PARRADO DESPUES DE CADA FILA
    }
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);//SE AGREGA TODO AL BODY
}

//REQUERIMIENTO 1
function agregarDatosTraumatologia() {
    
    var otrosDatos = [
        { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
        { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
        { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
        { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
        { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }
    ];
    for (var i = 0; i < otrosDatos.length; i++) {
        traumatologia.push(otrosDatos[i]);
    }
    document.write(`<p><u>Cantidad de atenciones para Traumatoloía: ${traumatologia.length}</u></p>`);
}
//REQUERIMIENTO 2
function eliminarDatosRadiologia() {
    var copiaRadiologia = radiologia.slice();//SE HACE UNA COPIA CON LOS DATOS ORIGINALES ANTES DE ELIMINARLOS
    radiologia.pop();
    radiologia.shift();
    document.write(`<p><u>Cantidad de atenciones para Radiología: ${radiologia.length}</u></p>`);
    //SE RETORNA PARA INGRESARLOS COMO PARAMETROS EN IMPRIMIR TODOS LOS PACIENTES 
    return copiaRadiologia;
}
//REQUERMIENTO 3
function datosDental(){
    var tabla = document.createElement('table');
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');
    thead.innerHTML = cabecera;
    
    dental.forEach(function(consulta){
        var filas = document.createElement('tr');
        var parrafo = document.createElement('p');
        filas.innerHTML += 
        `<td>${consulta.hora}</td>
        <td> - ${consulta.especialista} </td>
        <td> - ${consulta.paciente} </td>
        <td> - ${consulta.rut} </td>
        <td> - ${consulta.prevision}</td>`;
        tbody.appendChild(filas);
        tbody.appendChild(parrafo);
    });

    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
}
//REQUERMIENTO 4
function imprimirPacientes(copiaRadiologia) {
    var consultas = copiaRadiologia.concat(traumatologia, dental);
    var todosLosPacientes = "";
    for (var i = 0; i < consultas.length; i++) {
        todosLosPacientes += `<p><b>${i + 1}.-</b> ${consultas[i].paciente}</p>`;
    }
    var parrafo = document.createElement('p');
    parrafo.classList.add('border');
    parrafo.innerHTML = todosLosPacientes;
    document.body.appendChild(parrafo);
}
//REQUERIMIENTO 5 Y 6
function previsionConsulta(consulta, previsionParam){
    var parrafo = document.createElement('p');
    parrafo.classList.add('border');
    var valores = "";
    var previsionVar = consulta.filter(function(prevision){
        return prevision.prevision === previsionParam;
        })
        for(var i = 0; i <previsionVar.length; i++){
            valores +=`<p><b>${i+1}.- </b>${previsionVar[i].paciente} - ${previsionVar[i].prevision}</p>`;
        }
        parrafo.innerHTML = valores;
        document.body.appendChild(parrafo);
        console.log(valores);
}
/////EJECUCIÓN/////
document.body.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center');
document.write(`<h2 class="bg-success">TABLAS CON SUS DATOS ORIGINALES</h2>`)

document.write(`<p><u>Cantidad de atenciones para Radiología: ${radiologia.length}</u></p>`);
document.write(`<p><u>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</u></p>`);
mostrarDatos(radiologia);

document.write(`<p><u>Cantidad de atenciones para Traumatología: ${traumatologia.length}</u></p>`);
document.write(`<p><u>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</u></p>`);
mostrarDatos(traumatologia);

document.write(`<p><u>Cantidad de atenciones para Dental: ${dental.length}</u></p>`);
document.write(`<p><u>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</u></p>`);
var dataDental = mostrarDatos(dental);

document.write(`<h2 class="bg-info">TRAUMATOLOGÍA CON DATOS AGREGADOS</h2>`);

agregarDatosTraumatologia();
mostrarDatos(traumatologia);

document.write(`<h2 class="bg-info">RADIOLOGÍA PRIMERO Y ÚLTIMO ELIMINADOS</h2>`);
var copiaRadiologia = eliminarDatosRadiologia();
mostrarDatos(radiologia);

document.body.appendChild(document.createElement('br'));
document.write(`<h2 class="bg-info">LISTADO DE TODOS LOS PACIENTES</h2>`);
document.body.appendChild(document.createElement('br'));
imprimirPacientes(copiaRadiologia);

document.write(`<h2 class="bg-info">PACIENTES DENTAL CON ISAPRE</h2>`);
previsionConsulta(dental,"ISAPRE");

document.write(`<h2 class="bg-info">PACIENTES TRAUMATOLOGÍA CON FONASA</h2>`);
previsionConsulta(traumatologia,"FONASA");

document.write('<h2 class="bg-info">DENTAL CON GUIONES Y SALTO CON PARRAFO</h2>');
datosDental(dataDental);


