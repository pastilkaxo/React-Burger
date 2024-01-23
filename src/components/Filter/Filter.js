import "./style/Filter.css"

export default function Filter() {
    return(
        <div className="f_wrapper">
               <div className="f_tabs">
                    <div className="active_tab">
                        <img src="./img/t1.png" alt="tab"/>
                        <p>Бургеры</p>
                    </div>
                    <div>
                       <img src="./img/t2.png" alt="tab"/>
                        <p>Закуски</p>
                    </div>
                    <div>
                        <img src="./img/t3.png" alt="tab"/>
                        <p>Хот-доги</p>
                    </div>
                    <div>
                       <img src="./img/t4.png" alt="tab"/>
                        <p>Комбо</p>
                    </div>
                    <div>
                        <img src="./img/t5.png" alt="tab"/>
                        <p>Шаурма</p>
                    </div>
                    <div>
                        <img src="./img/t6.png" alt="tab"/>
                        <p>Пицца</p>
                    </div>
                    <div>
                        <img src="./img/t7.png" alt="tab"/>
                        <p>Вок</p>
                    </div>
                    <div>
                        <img src="./img/t8.png" alt="tab"/>
                        <p>Десерты</p>
                    </div>
                    <div>
                        <img src="./img/t9.png" alt="tab"/>
                        <p>Соусы</p>
                    </div>
               </div>
        </div>
    )
}