import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Postpage = ({posts,handledelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='Postpage'>
      <article className='post'>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button type='submit' onClick={()=>handledelete(post.id)}>Delete post</button>
          </>
        }
        {!post &&
          <>
            <h2>Page not found</h2>
            <p>Well, that's disappointing.</p>
            <Link to='/'><p>visit our Homepage</p></Link>
          </>
        }
      </article>
      
    </main>

  )
}

export default Postpage