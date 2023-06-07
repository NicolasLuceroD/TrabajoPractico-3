import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from "../components/Footer"

const Home = () => {

  const alumno = {id:1,nombre:"Nicolas",apellido:"Lucero del Llanos",edad:22,legajo:55478,numero:3815903793,deporteFavorito: "Futbol"}
  return (
    <>
    <Header/>
    <Main alumno = {alumno}/>
    <Footer/>
    </>
  )
}

export default Home