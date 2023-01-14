import React,{useState} from "react";
import validator from 'validator'
import '../CSS/post.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const  PostForm = (props) =>{
    const {addPost} = props
    const [title,setTitle] = useState('')
    const [text,setText] = useState('')
    const [error,setError] = useState({})
    const errors = {}
    
    const validate = () =>{
        if(validator.isEmpty(title)){
            errors.title = 'Title field cannot be kept blank'
        }
        if(validator.isEmpty(text)){
            errors.text = 'Text field cannot be kept blank'
        }
    }

    const handlePostForm = (e) => {
        const name = e.target.name
        const value = e.target.value
        if(name === 'title'){
            setTitle(value)
        }
        if(name === 'text'){
            setText(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
        setError(errors)
        if(Object.keys(errors).length === 0){
          addPost( {id:Number(Date.now()), title,text})
          setTitle('')
          setText('')
        }
    }
 
    return (
        <div  className="postform">
                <h2>Publish Form</h2>
            <form onSubmit = {handleSubmit}><br/>
               
                {error.title && 
                <input className="validate-title" type='text' name='title' value={title} onChange ={handlePostForm} placeholder="Title"/>}<br/>
                {!error.title && 
                <input  type='text' name='title' value={title} onChange ={handlePostForm} placeholder="Title"/>}<br/>
                {error.title && <span>{error.title}</span>}<br/>
             
                {error.text && 
                <textarea className="validate-body" name="text" value={text} onChange={handlePostForm} placeholder="Text" ></textarea>}<br/>    
                {!error.text &&           
                <textarea className="textarea" name="text" value={text} onChange={handlePostForm} placeholder="Text" ></textarea>}<br/> 
                {error.text && <span>{error.text}</span>}<br/>
                <input type='submit' value='Publish' />
                
            </form>
        </div>   
    )
}



export default PostForm