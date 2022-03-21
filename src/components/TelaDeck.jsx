import Pergunta from "./Pergunta"
import { useState } from "react"
import Footer from "./Footer";
import logoPequeno from "../assets/logo-pequeno.png"


const perguntas = [
    { id: 1, pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
    { id: 2,pergunta: "O React é __", resposta: " uma biblioteca JavaScript para construção de interfaces"},
    { id: 3,pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
    { id: 4,pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
    { id: 5,pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
    { id: 6,pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
    { id: 7,pergunta: " Usamos props para __ ", resposta: "passar diferentes informações para componentes"},
    { id: 8,pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

export default function TelaDeck() {
    function embaralhar() {
        return Math.random() - 0.5;
    }
    perguntas.sort(embaralhar);

    const [qtd, setQtd] = useState(0);
    const icones = [];
    const [icone, setIcone] = useState(icones);
    function NãoLembrei(icone) {
        return icone === "close-circle-sharp";
    }


    function adicionaIcones(str) {
        setIcone([...icone, str]);
    }

    return (
        <>
            <header>
                <img src={logoPequeno} alt="Icon zaprecall" />
                <h2>ZapRecall</h2>
            </header>
            <main>
                {
                    perguntas.map((question, index) =>
                        <Pergunta key={index} pergunta={question.pergunta} resposta={question.resposta} id={index + 1} adicionaIcones={adicionaIcones} callback={() => setQtd(qtd + 1)} />
                    )
                }
            </main>
            <Footer icone={icone} qtd={qtd} callback={NãoLembrei} />
        </>
    )
}