

const Post = (props) => {
  const {token, post} = props
  return(<>
    <div className="col-4 m-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.desc}</p>
          {token && <div>
            <button onClick={() => {props.editPost(post)}} className="btn btn-primary mr-2">Edit</button>
            <button onClick={() => {props.removePost(post)}}className="btn btn-danger">Delete</button>
          </div>}
        </div>
      </div>
    </div>
  </>)
}
export default Post;