/*
    Действия:
    1) Добавить товар в корзину
    2) Увеличить количество товара
    3) Уменьшить количество товара
        3.1) Если количество === 0 => удалить товар из корзины
*/

const addToCart = (obj) => {
    return {
        type: "ADD",
        payload: obj
    }
}

const increment = () => {
    return {
        type: "INC"
    }
}
const decrement = () => {
    return {
        type: "DEC"
    }
}

export {addToCart, increment, decrement};