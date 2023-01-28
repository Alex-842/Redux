import CartItem from "./CartItem";
const Cart = () => {
    return <div>
        <h2>Корзина товаров</h2>
        <table>
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                </tr>
            </thead>
            <tbody>
                <CartItem name="Помидор" cnt="1" price="120"/>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">ИТОГО</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </div>
}

export default Cart;