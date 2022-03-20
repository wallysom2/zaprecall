import logo from "../assets/logo.png"
import { useState } from "react";
import Firstpage from "./Firstpage";

export default function Home() {
    const [escondido,setEscondido] = useState(false);
    if(escondido === false){
    return (
        <div className="home">
            <img src={logo} alt="Icon zaprecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => setEscondido(true)}>Iniciar Recall</button>
        </div>
    ) }
    else {
        return (
            <Firstpage />
        )
    }
}