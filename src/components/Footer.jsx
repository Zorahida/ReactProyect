import { useContext } from "react";
import {BlackMode} from "./Context";
import Button from "./Button";  

function Footer () {

const mode = useContext(BlackMode);
return (
<div>
<button className={Button + mode ? "white" : "black"}>Night Mode</button>
</div>
);
}

export default Footer