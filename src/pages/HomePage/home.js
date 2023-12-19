import React from 'react'
import Team from '../../components/relatedpost'
import Aboutus from "../../components/AboutUs/index"
import Service from '../../components/services'
import ContactUs from "../../components/ContactUs/index"

const home = () => {
  return (
    <>
      <Aboutus/>
      <Service />
      <Team />
      <ContactUs />
    </>
  )
}

export default home