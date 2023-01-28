const Item = (props) => {
    return <tr>
        <td>{props.name}</td>
        <td>
            <button>-</button>
            {props.cnt}
            <button>+</button>
        </td>
        <td>{props.price * props.cnt}</td>
    </tr>
}
export default Item;