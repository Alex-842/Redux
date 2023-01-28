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

const increment = (id) => {
    return {
        type: "INC",
        payload: id
    }
}
const decrement = (id) => {
    return {
        type: "DEC",
        payload: id
    }
}

export {addToCart, increment, decrement};