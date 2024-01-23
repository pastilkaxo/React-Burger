import "./style/Header.css"

export default function Header() {
    return(
        <header>
            <div className="header-logo">
            <div className="summury">
                <img src="./img/sum.svg"/>
            </div>
            <div className="header-info">
            <img src="./img/pic.svg" alt="logo"/>
            <div className="info-sum">
                <h1>
                Только самые <br/>
               <span> сочные бургеры!</span> 
                </h1>
                <h3>
                Бесплатная доставка от 599₽
                </h3>
            </div>
            </div>
            </div>
        </header>
    )
}