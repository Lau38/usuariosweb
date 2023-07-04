import { Fragment } from "react";
import {useState,useEffect} from 'react';
import './main.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Main = () =>{
//Inicio el local Storage
let usuariosEliminados=JSON.parse(localStorage.getItem('usuario'));
if(!usuariosEliminados){
    usuariosEliminados=[]
};


// creamos un hook para consultar API 
//que voy a usarla para editar ese hook


const [usuario,editar]= useState(usuariosEliminados);


// Hook useEffect: Sirve para ejecutar alguna funcionalidad
//cuando hay un cambioo en alguna variable/hook/situacion
useEffect(()=>{
    
    if(usuariosEliminados){
        localStorage.setItem('usuario',JSON.stringify(usuario));
    }else{
        localStorage.setItem('usuario',JSON.stringify([]));
    }
    
},[usuariosEliminados]
);



const  eliminar =  (id) =>{
    const nuevoUsuario= usuario.filter(usuario=> usuario.id !== id);
    editar(nuevoUsuario); // ahora sos nuevoCliente

};

//Hook del buscador 

const[buscador,editarBuscador]= useState("");
 


//Funcion para consultar API y dentro uso la funcion para editar el hook
const consultarAPI= async()=>{
    try{
        const api=await fetch("https://jsonplaceholder.typicode.com/users");
        const resultado= await api.json();
        editar(resultado); // resultado es lo que me devuelve la api
      }catch(error){
        console.log(error)
      };
}
   
const obtenerEliminados=()=>{
    consultarAPI()
 };

//Funcion para recoger lo que el usuario ingresa en el buscador
const handleChange =(e) =>{
    editarBuscador(e.target.value) //value es lo que ingresa el usuario
};

// Si el usuario no ingresa nada 

let result=[]
if(!buscador) // Si no inserta nada muestra el arreglo original
{
    result=usuario // se queda con todos
}else{ // si inserta me quedo con el dato que inserto 
    result= usuario.filter((u) => 
    u.username.includes(buscador) || u.name.includes(buscador) // el includes se fija si la cadena de texto del primer usuario
                                                                // esta incluida en la cadena de texto que ingreso el usu
    )
}





    return(
        <Fragment >
                 <h1>¡ BUSCATE EN LA LISTA DE USUARIOS !</h1>

            <Form.Control className="buscador"
              value={buscador}
              onChange={handleChange}// onChange evento que permite tratar lo que el usuario ingresa 
              type="search"
              placeholder="Escriba su usuario o nombre con la primer letra en mayuscula"
              
            />
            <Button className="boton" onClick={()=>obtenerEliminados()}
            variant="primary">Obtener todos</Button>

            <table  className='tabla'>
            
                <thead>
                    <tr className="titulo">
                           
                            <th>NOMBRE</th>
                            <th>NOMBRE DE USUARIO</th>
                            <th>CORREO</th>
                            <th>ELIMINAR USUARIO</th>

                    </tr>
                </thead>
                <tbody id="table"  className="body">
                    { // map donde mapeo los datos de cada usuario
                        // result porque estoy mapeando el resultado del filter que hice arriba 
                        
                        result.map(usu=> (
                            <tr key={usu.id}>
                                
                                <td>{usu.name}</td>
                                <td>{usu.username}</td>
                                <td>{usu.email}</td>
                                <td><Button className="boton" onClick={()=>eliminar(usu.id)}
            variant="primary">Eliminar</Button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
                    

        </Fragment>

    );
}


export default Main;