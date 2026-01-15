import React from 'react'
import { useState, useEffect } from 'react'
import UserImg from "../assets/img/user.png"

function Users() {
  let [post, setPost] = useState([])


  useEffect(() => {
    async function GetPost(){
      let res = await fetch("https://jsonplaceholder.typicode.com/users");

      if(!res.ok){
        throw  new Error('Xatolik !')
      }
      let data = await res.json()
      setPost(data)
    }
    GetPost()
  }, [])
  return(
    <section>
      <div className='container photos-container'>
        {post.slice(0,9).map((item) => {
          let {id, username, email, address, website, phone} = item;
          
          
          return(
            <div className='photos-card' key={id}>
              <img className='user-img' src={UserImg} alt="" />
              <div className='user-card'>
                <p><i class="fa-regular fa-user"></i> : {username}</p>
                <p><i class="fa-regular fa-envelope"></i> : {email}</p>
                <p><i class="fa-solid fa-phone"></i> : {phone}</p>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Users
