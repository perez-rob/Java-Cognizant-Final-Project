import React from 'react'
import { Header, Footer } from "../components";


function Explore() {
    return (
        <>
          <Header />
          <div className="content">
         {/* Leave this here for now to fix content from going behind navbar */}
         <div className="hack-component"></div>
         <h1 className="text-center">
          This is Explore/the about the company or about us page</h1>
          
          <Footer />
          </div>  
        </>
    )
}

export default Explore
