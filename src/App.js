import Header, {Footer} from './common/Header'
import config from './setup/config'
import SideBar from './components/SideBar';
import SwitchApp from './components/SwitchApp';

function App() {
  return (
    <>
   <Header />
    <div className='bodyContainer'>
      <div className="container ">
        <div className="row py-2">
            <div className="col-3">
              <SideBar config={config.sidebar}></SideBar>
            </div>
            <div className="col-9">
              <SwitchApp config={config}/>
            </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
export default App;
