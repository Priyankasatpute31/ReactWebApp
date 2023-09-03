import { GoogleLogin, GoogleLogout } from 'react-google-login';
const clientId = '827262915666-dgloc2amhv3787fanp4ttsg3q660mc1d.apps.googleusercontent.com';
const LoginButton = (props) => {

  const onSuccess = (res) => {
    console.log("Login Success : Current user", res.profileObj);
    props.loadLoginData(res.profileObj);
  }
  const onFailure = (res) => {
    console.log("Login Fialed res: ", res);
  }
  return(<>
    <section className="todoSection">
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </section>
    
  </>)
}

const LogoutButton = (props) => {
  const onSuccess = () => {
    console.log('Logout success');
    props.clearUserData();
  }
  return(<>
    <GoogleLogout
      clientId={clientId}
      buttonText={'Logout'}
      onLogoutSuccess={onSuccess}
    />
  </>)
}

export {LoginButton,LogoutButton};