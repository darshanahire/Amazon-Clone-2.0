import react, { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;


function Loader(props) {
  let [loading, setLoading] = useState(true);

  return (
    <div style={{"width":"100%","height":"100vh","background":props.bg}}>
    <div className="sweet-loading">
      {/* <HashLoader color={'#f8aa25'} loading={loading}  size={70} /> */}
      
      {props.loaderNum==1 ? <img className="MainLoader" src={window.location.origin + '/img/loading.gif'} alt="amazon"/> :
      <img className="truckLoader" src={window.location.origin + '/img/truck.gif'} alt="amazon" />}
    </div>
    </div>
  );
}

export default Loader;