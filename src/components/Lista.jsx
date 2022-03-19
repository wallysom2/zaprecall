const produtos = [
    { id: 1, pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: 2, pergunta: "O React é", resposta: "uma biblioteca JavaScript para construção de interfaces" },
    { id: 3, pergunta: "Componentes devem iniciar com", resposta: "letra maiúscula" },
    { id: 4, pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    { id: 5, pergunta: "O ReactDOM nos ajuda  ", resposta: "interagindo com a DOM para colocar componentes " },
    { id: 6, pergunta: "Usamos o npm para ", resposta: "gerenciar os pacotes necessários e suas dependências" },
    { id: 7, pergunta: " Usamos props para ", resposta: "passar diferentes informações para componentes " },
    { id: 8, pergunta: "Usamos estado (state) para ", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]


export default function Lista() {
    return (
        <div className="lista">
            {produtos.map((produto) => {
                const { id, pergunta, resposta } = produto;
                return (
                    <div className="opcoes">
                        Pergunta {id} <ion-icon name="play-outline"></ion-icon>
                    </div>
                  ); 
            })}

        </div>
    )
}