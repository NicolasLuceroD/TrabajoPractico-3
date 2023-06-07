import Footer from "../components/Footer"
import Header from "./Header"
import { useState } from 'react'
import { Form, Button, Table } from "react-bootstrap"
import "../Css/MainContact.css"


const MainContact = () => {
  const consultas = [
    {id: 1, nombre: "prueba", email: "prueba@gmail.com", descripcion: "quiero realizar una page"},
    ]

  const [id, setId] = useState (null)
  const [nombre,setNombre] = useState ()
  const [descripcion, setDescripcion] = useState ()
  const [pedido,setPedido] = useState (consultas)
  const [email,setEmail] = useState ()

  const handlerChangeEmail = (e) => {   
    setEmail(e.target.value)
  }
  const handlerChangeid = (e) => {
    setId(e.target.value)
  }
  const handlerChangeNombre = (e) => {
    setNombre(e.target.value)
  } 
  const handlerChangeDescripcion = (e) => {
    setDescripcion(e.target.value)
  }
  const agregarConsulta = (e)=>{
    e.preventDefault();
    setPedido ([...pedido, { id, nombre, email, descripcion }])
    e.target.reset()
  }
  const handlerEliminar = (id) =>{
    const elim= pedido.filter(pedido =>pedido.id !== id)
    setPedido(elim)
  }

  
  return (
  <div className="todoC">
    <Header/>

    <h1 className="maincontact">Contacto</h1>
    <Form className='text-center ' onSubmit={agregarConsulta}>
                <Form.Group style={{ width: "40%", margin: "auto" }}>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type='text' onChange={handlerChangeid} required/>
                    <br />
                    <Form.Label>nombre</Form.Label>
                    <Form.Control type='text' onChange={handlerChangeNombre} required/>
                    <br />
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" onChange={handlerChangeEmail} required/>
                    <br />
                    <Form.Label type="text" >detalle de pagina</Form.Label>
                    <Form.Control onChange={handlerChangeDescripcion} required/>
                    <br />
                    <Button className='btn btn-primary' type='submit'>enviar mensaje</Button>
                </Form.Group>
            </Form>
        <br />
        <br />

      <Table style={{ width: "70%", margin: "auto" }}>
      <thead>
          <tr>
            <th>Id</th>
            <th>Nombre </th>
            <th>Email</th>
            <th>Descripcion</th>
            <th>acciones</th>
        </tr>
      </thead>
      
      <tbody>
          {pedido.map(pedido =>
             <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.nombre}</td>
                <td>{pedido.email}</td>
                <td>{pedido.descripcion}</td>
                <td>
                  <button className="btn btn info" onClick={() => handlerEliminar(pedido.id)}>Eliminar consulta</button>
                </td>
             </tr>        
            )}
          
      </tbody>
    </Table>
    <Footer/>
    
  </div>  
  
  )
}


export default MainContact;