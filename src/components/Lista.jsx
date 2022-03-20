import { cardInfo } from "../data/dados";


export default function Lista() {
    return (
        <div className="lista">
            {cardInfo.map((produto) => {
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