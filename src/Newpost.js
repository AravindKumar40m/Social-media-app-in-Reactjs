import React from 'react'

const Newpost = ({postTitle,setPostTitle,postBody,setPostBody,handlesubmit}) => {
  return (
    <main className='Newpost'>
      <h2>New post</h2>
      <form className='newPostForm' onSubmit={handlesubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input 
          type="text"
          id='postTitle'
          required
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)} 
        />
        <label htmlFor="postBody">post:</label>
        <textarea 
          id='postBoody'
          required
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default Newpost