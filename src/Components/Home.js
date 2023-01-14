import React,{useState,useReducer} from 'react';
import PostForm from './PostForm';
import PostLists from './PostLists';
import {reducer} from '../Reducer/reducer'
import '../CSS/home.css'
import PropTypes from 'prop-types'

const Home = (props) => {
    const [toggle,setToggle] = useState('')
    const [state,dispatch] = useReducer(reducer,[])
    const [search,setSearch] = useState('')

    const handleToggle = (str) => {
        setToggle(str)       
    }

    const addPost = (post) => {
        dispatch({
            type:'ADD-POST',
            payload:post
        })
    }

    const handleSearch = (e) =>{
        handleToggle('published')
        setSearch(e.target.value)
       
    }

    const handleClear = () =>{
        setSearch('')
    }

    const post = state.filter((ele)=>{
        return (ele.title.toLowerCase().includes(search.toLowerCase()) || 
                ele.text.toLowerCase().includes(search.toLowerCase()))
    })

    return (
        <div className='home'>

            <div className="input-icon"> 
                {!search &&
                <span className="fa fa-search icon" ></span>}
                <input className="input" type='text'  value={search} name='search' onChange={handleSearch} placeholder= '    Search Title/Body' />
                {search && 
                <span   onClick={handleClear} className="fa fa-close clear"></span>} 
            </div><br/><br/>

            <div className='button'>
                <button  onClick={()=>{handleToggle('newPost')}} >New Post</button>
                <button  onClick={()=>{handleToggle('published')}} >Published</button>
            </div>

            {
                toggle === 'newPost' ? (<PostForm  addPost={addPost}/>):(<PostLists post={post}/>)
            }

        </div>
    );
}

Home.propTypes = {
    button:PropTypes.string,
    backgoundColor: PropTypes.string,
    onClick:PropTypes.func,
}

export default Home;
