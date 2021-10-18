import React from 'react'
import { Footer, Header } from '../components'
import { useConsumer } from "../utils/ConsumerContext";
import { useHistory } from 'react-router-dom';




export default function UserProfile() {

  const {currentUser, setCurrentUser} = useConsumer();
  const history = useHistory();

  const handleLogout = () => {
    setCurrentUser(null);
    history.push("/")
  }

  return (
    <>
    <Header />
    <div>
      <h2>THIS IS THE USER PROFILE PAGE</h2>
      <button className="logoutBtn" onClick={handleLogout} >Sign Out</button>    
    </div>
    <Footer />
    </>
  )
};