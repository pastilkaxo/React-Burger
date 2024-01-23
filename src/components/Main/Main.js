import "./style/Main.css"

export default function Main() {
    return(
        <div className="m_wrapper">
              <main>
                 <h1>Бургеры:</h1>
                 <div className="m_content">
                    <div className="m_card">
                         <img src="./img/photo.png"/>
                         <span className="card_info">
                            <h3 className="c_cost">530</h3>
                            <p className="c_name">Burger</p>
                         </span>
                         <div className="c_total">
                                <p>520г</p>
                                <button>Добавить</button>
                         </div>
                    </div>
                 </div>
              </main>
        </div>
    )
}