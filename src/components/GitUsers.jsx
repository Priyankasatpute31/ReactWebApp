import Jubmotron from "../common/Jumbotron";
import {useEffect, useState} from 'react';
var time;
const GitUsers = (props) => {
  let [userState, setState] = useState({user:'Priyankasatpute31', changeUser:false});
  let [urlLoaded, setUrlLoaded] = useState(false);
  useEffect(
    () => {
      getData();
    },
    [urlLoaded]
  )
  async function getData() {
    await fetch(`https://api.github.com/users/${userState.user}`)
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        if(data?.message === 'Not Fount') {
          return;
        }
        setState((prev)=>{
            return {...prev, res:data}
        })
      })
  }

  let userIdchanged = (e) => {
    setState((prev) => { return {...prev, user:e.target.value}});
    clearTimeout(time)
    time = setTimeout(()=>{ setUrlLoaded((prev)=>!prev) }, 1000);
    
  }


  return(<>
      <Jubmotron config={props.config}/>
      <div className="container pb-5">
        <div className="row">
          <div className="col-12">
            <div className="">
              <div className="">
                <div className="d-flex justify-content-center pt-2">
                  <div className="p-2 h5 text-navyBlue">
                    Enter GitHub Id: 
                  </div>
                  <div className="">
                    <input style={{fontSize:"17px", fontWeight:700}}type="text" className="form-control" onChange={userIdchanged} value={userState.user} />
                  </div>
                </div>
              </div>
              

            {userState?.res?.login &&
              <div className="pb-5 pt-3 card-body d-flex justify-content-center">
                <div className="card" style={{width:"400px"}}>
                  <img className="card-img-top" src={userState.res.avatar_url} alt="Card image" />
                  <div className="card-body">
                    <h4 className="card-title">{userState.res.name}</h4>
                    <p className="card-text">{userState.res.bio} @ {userState.res.company}</p>
                    <p className="card-text">{userState.res.location}</p>
                  </div>
                  <div className="card-footer">
                    <a href={`https://github.com/${userState.res.login}`} target="_blank" className="btn btn-primary">See Profile</a>
                  </div>
                </div>
              </div>
            }
            </div>


          </div>
        </div>
      </div>
  </>);
}
export default GitUsers;