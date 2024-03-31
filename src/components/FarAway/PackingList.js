import Item from "./Item";
import { useState } from "react";

function PackingList({ items, onDeleteItem, onToggleItem, handleClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  if (sortBy === "quantity")
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status </option>
            <option value="quantity">Sort by quantity</option>
          </select>
          <button onClick={handleClearList}>Clear list</button>
        </div>
      </div>
    </>
  );
}

export default PackingList;
