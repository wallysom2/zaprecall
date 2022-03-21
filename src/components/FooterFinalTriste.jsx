import sad from "../assets/sad.png"

export default function FooterFinalTriste(props) {
    const { icone } = props;
    return (
        <footer className="final">
            <div className="fim">
                <img src={sad} alt="" />
                <h1>PUTZ!</h1>
            </div>
            <p>Ainda faltaram alguns...
                Mas não desanime!</p>
            <div className="icones">
                {icone.map((icon, index) =>
                    <ion-icon className={`${icon}`} key={icon + index} name={icon}></ion-icon>
                )}
            </div>
        </footer>
    )
}