import logo from "../assets/logo.png"

export default function Home() {
    return (
        <div className="home">
            <img src={logo} alt="Icon zaprecall" />
            <h1>ZapRecall</h1>
            <button>Iniciar Recall</button>
        </div>
    )
}