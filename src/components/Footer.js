import { useContext } from "react";
import {BlackMode} from "./Context"

function Footer () {

const mode = useContext(BlackMode);
return (
<div>
<button className={mode ? "white" : "black"}>Night Mode</button>
</div>
);
}

export default Footer