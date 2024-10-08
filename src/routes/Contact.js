import React from 'react'
import Navbar from "../components/Navbar"
import Form from "../components/Form";
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
const Contact = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading="CONTACT." text="Let's have a chat"/>
    <Form />
    <Footer />
  </div>
}

export default Contact