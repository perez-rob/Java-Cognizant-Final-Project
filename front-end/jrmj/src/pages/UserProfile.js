import React from 'react'
import { Footer, Header } from '../components'
import { useConsumer } from "../utils/ConsumerContext";
import { useHistory } from 'react-router-dom';




export default function UserProfile() {

  const {currentUser, setCurrentUser} = useConsumer();
  const history = useHistory();

  console.log("TEST", currentUser)
  const handleLogout = () => {
    setCurrentUser(null);
    history.push("/")
  }

  return (
    <>
    <Header />
    <div>
      <h2>THIS IS THE USER PROFILE PAGE</h2>
      <form>
      <label>
        First Name:
        <input name="fName" placeholder="tough"/>
        </label>
        
        <input />
        <label></label>

        <input />
        <label></label>

        <input />
        <label></label>

        <input />
        <label></label>

        <input />
        <label></label>
      </form>
      <button className="logoutBtn" onClick={handleLogout} >Sign Out</button>    
    </div>
    <Footer />
    </>
  )
};