const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input className="input-far"
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="button-far" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
};

export default Item;
