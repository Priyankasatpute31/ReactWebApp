
const headerStyle = {
  backgroundColor: "#16123f"
}

const Header = (props) => {
  return(
    <>
      <header style={headerStyle} >
        <div  className="px-2 container">
          <div className="row">
            <div className="py-3"><h2 className="text-sec">Priyanka Mini Web Show</h2></div>
          </div>
        </div>
      </header>
    </>
  )
}

const Footer = (props) => {
  return(
    <>
      <footer style={headerStyle} className="footer" >
        <div  className="px-2">
          <div className="row">
            <div className="py-2"><h5 className="text-sec text-center">Copyrights <span style={{fontSize:'21px', verticalAlign:'center'}}>©</span>  2022-2023 All Rights Reserved.</h5></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Header;
export {Footer};

