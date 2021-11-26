import react, { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;


function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <HashLoader color={'#f8aa25'} loading={loading}  size={70} />
    </div>
  );
}

export default Loader;