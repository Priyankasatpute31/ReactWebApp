
import Jubmotron from "../common/Jumbotron";

const AlpineApp = (props) => {
  return(<>
    <Jubmotron config={props.config}/>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
  </>)
}
export default AlpineApp;