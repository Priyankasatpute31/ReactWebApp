import {useState} from 'react';
import {tabSelectionAction} from '../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
const SideBar = (props) => {
  let selectedItem = useSelector((state) => {return state.tabReducer.selectedTab}) || 'note_app';
  //const [selectedItem, setSelectedItem ] = useState(selectedIteme);
  const [tabs, updateTabs] = useState(props.config.tabs);
  const dispatch = useDispatch();
  
  const updateTabsArray = (values) => {
    updateTabs((prev) => { return values; });
  }

  function itemChanged (tab_name) {
    dispatch(tabSelectionAction(tab_name))
    let prevTabs = tabs
    for( const index in prevTabs) {
      prevTabs[index].active = prevTabs[index].name === tab_name;
    }
    updateTabsArray(prevTabs);
  }

  if(!props?.config?.tabs?.length) {
    return(<>
      <p className="p-1 h5 alert alert-danger">! Unable to load tabs</p>
    </>);
  }
  return(<>
    <div className="mt-4">
      <div className="list-group side-list-group">  
        {tabs.map((item,index) => {
          return <SideBarListItem key={index} activeTab={selectedItem} tabData={item} evt_changeSelection={itemChanged} />
        })}
      </div>
    </div>
    
    </>);
}


const SideBarListItem = (props) => {
  const {tabData} = props;
  async function changeSelection () {
    await props.evt_changeSelection(props.tabData.name);
  }
  return(<>
  <button 
    type="button"
    onClick={changeSelection}
    className={`list-group-item list-group-item-action ${props.tabData.name === props.activeTab && 'active'}`}
  >
    {tabData.view_name}
  </button>
  </>);
}


export default SideBar;