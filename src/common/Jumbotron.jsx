
const Jubmotron = (props) => {
  return(<>
    <div className="jumbotron">
      <h1 className="display-4">{props.config.view_name}</h1>
      <p className="lead">{props.config.desc}</p>
      <hr className="my-4" />
      {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
    </div>
  </>);
};
export default Jubmotron;