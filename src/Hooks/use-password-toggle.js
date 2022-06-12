import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

/* Toggles field text field visibility */
const usePasswordToggle = () => {
 
    const [visible, setVisibility] = useState(false);
  
    const Icon = (
        <FontAwesomeIcon 
            icon= {visible ? "eye-slash" : "eye"} 
            onClick={ () => setVisibility(visibility => !visibility)} 
        />
    );
    const InputType = visible ? "text" : "password"; 
  
    return [InputType, Icon];
  }

  export default usePasswordToggle;