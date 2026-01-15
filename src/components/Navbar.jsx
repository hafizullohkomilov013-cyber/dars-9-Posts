import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode === "dark";
  });

    useEffect(() => {
        if(mode){
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark");
        }else{
             document.body.classList.remove("dark");
             localStorage.setItem("theme", "light");
        }
    }, [mode])

  return (
    <nav>
      <div className="container nav-container">
        <h2>Posts</h2>
        <div className='nav-link'>
          <Link to={"/"}>Home</Link>
          <Link to={"/Users"}>User</Link>
          <Link to={"/Coment"}>Coment</Link>
        </div>
        <div>
          <button className="nav-btn" onClick={() => setMode(!mode)}>
            {mode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
