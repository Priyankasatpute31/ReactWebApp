
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { LoginButton, LogoutButton } from './GoogleButtons';
import Jubmotron from '../../common/Jumbotron';
import Post from './Post';
const clientId = '827262915666-dgloc2amhv3787fanp4ttsg3q660mc1d.apps.googleusercontent.com';


const PostsApp = (props) => {
  const [profile, setProfile] = useState({});
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [boolPostUpdate, setBoolPostUpdate] = useState({value:false, postId:null});
  const [post, setPost] = useState({});
  useEffect(()=>{
    const start = () => {
      gapi.client.init({
        clientId:clientId,
        scopr:""
      })
    }
    gapi.load('client:auth2', start)
  })

  const loadLoginData = (profile) => { 
    setProfile(()=>profile);
    setToken(() => gapi?.auth?.getToken()?.access_token );
  }
  const clearUserData = () => {
    setProfile(() => {});
    setToken(() => '');
  ;}

  const createPost = () => {
    const postObj = post;
    if(!post?.title || !post?.desc) {
      return;
    }
    postObj.id = Math.floor(Math.random()*(999-100+1)+100);
    setPosts((prev) => { return [...prev, post] })
    setPost(()=>{return {desc:'',title:''}});
  }

  const editPost = (postToEdit) => {
    setPost(()=>{
      return postToEdit;
    })
    setBoolPostUpdate(()=> {return {value:true, postId:postToEdit?.id}})
  }

  const removePost = (postToRemove) => {
    setPosts((prev) => {
      return prev.filter((currentPost)=>{
        console.log(currentPost, postToRemove);
        return currentPost.id !== postToRemove.id
      })
    })
  }

  const updatePost = () => {
    let allPosts = posts.filter((item)=>{
      return boolPostUpdate.postId !== item.id;
    })
    setPosts(() => { return [...allPosts, post] })
    setBoolPostUpdate(()=> {return {value:false, postId:null}})
    setPost(()=>{return {desc:'',title:''}});
  }

  return(<>
    <Jubmotron config={props.config}/>
    <div className="d-flex justify-content-between">
    <h2 className="text-info">{token && 'Welcome'} { profile?.givenName} {profile?.familyName}</h2>
    {!token && <LoginButton loadLoginData={loadLoginData}/>}
    {token && <LogoutButton clearUserData={clearUserData}/>}
    </div>

    <div className='d-flex justify-content-center'>
      {token && <div className="mt-3 createPost">
        <input type="text"
          className="form-control mb-2"
          placeholder='Post Title'
          onChange={(e)=>{setPost((prev)=>{return {...prev, title:e.target.value} })}} 
          value={post?.title} 
        />
        <textarea
          rows="3"
          onChange={(e)=>{setPost((prev)=>{return {...prev, desc:e.target.value} })}} 
          value={post?.desc}
          placeholder="Writ post description"
        /><br />
        {!boolPostUpdate.value && <button onClick={createPost} className="mt-2 btn btn-sm btn-info">Save</button>}
        {boolPostUpdate.value && <button onClick={updatePost} className="mt-2 btn btn-sm btn-success">Update</button>}
      </div>}

    </div>

    {/* listing */}
    <div className="d-flex justy-content-center mt-3">
      <div className="container">
        <div className="row">
          {posts.map((currentPost, index) => {
            return <Post key={index} token={token} post={currentPost} editPost={editPost} removePost={removePost}/>
          })}
        </div>
      </div>
      
    </div>
  </>)




}

export default PostsApp;