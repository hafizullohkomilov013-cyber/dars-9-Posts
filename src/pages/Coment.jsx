import React from 'react'
import { useState,useEffect } from 'react'

function Coment() {
  let [ post, setPost ] = useState([])


  useEffect(() => {
    async function GetPost(){
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/comments");

        if (!res.ok) {
          throw new Error("Xatolik !");
        }
        let data = await res.json();
        setPost(data);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    GetPost()
  }, [])
  return (
    <section>
      <div className='container photos-container'>
        {post.slice(0,9).map((item) => {
          return(
            <div key={item.id} className='photos-card'>
              <h2>{item.body}</h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Coment
