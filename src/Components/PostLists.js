import React from 'react'
import '../CSS/list.css'
import ReactMarkdown from 'react-markdown'

const PostLists = (props) => {
    const {post} = props
    
    return (
        <div>
           <h2 style={{textAlign:'center'}}>Total Publications-{post.length}</h2>
           <div className='list '>
                {post.map((ele)=>{
                        return (
                            <div key={ele.id} className='post'>
                                <h3>Title:{ele.title}</h3>
                                <h3>Body:</h3><ReactMarkdown>{ele.text}</ReactMarkdown>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default PostLists