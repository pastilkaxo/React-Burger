import "./style/Cart.css"

export default function Cart() {
    return(
        <div className="cart_wrapper">
            <div className="cart_header">
                <h2>Корзина:</h2>
                <span className="cart_counter">0</span>
            </div>
            <div className="cart_content">
                <p>Тут пока пусто!</p>
            </div>
        </div>
    )
}