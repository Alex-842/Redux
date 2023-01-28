const initialState = {
    value: [
        {name: "Помидор", cnt: 2, price: 120, id: new Date().getTime()}
    ]
}

const cartReducer = (state = initialState, action) => {
    const val = state.value;
    const data = action.payload;
    switch(action.type) {
        case "ADD":
            let inCart = val.filter(el => el.name.toLowerCase() === data.name.toLowerCase());
            console.log(inCart);
            return state;
        default: return state;
    }
}

export default cartReducer;