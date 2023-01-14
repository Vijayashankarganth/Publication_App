import Home from "../Components/Home";

export default {
    title:"Home",
    component:Home
}

const Template = (props) =>{
    return <Home {...props}/>
}
export const Post = Template.bind({}) 

Post.props = { 
    backgroundColor:"blue",
    button:"New Post",
}