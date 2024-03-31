import { useState } from "react";
import Logo from "./components/FarAway/Logo";
import Form from "./components/FarAway/Form";
import PackingList from "./components/FarAway/PackingList";
import Stats from "./components/FarAway/Stats";
import Item from "./components/FarAway/Item";
import Counter from "./components/Counter";
import Accordion from "./components/Accordion/Accordion";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 6, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <>
      {/* <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} /> */}

      {/* <Accordion /> */}
    </>
  );
}

export default App;
