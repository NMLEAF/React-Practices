function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.</em>
      </p>
    );
  }

  const numItems = items.length;
  const numItemPacked = items.filter((item) => item.packed).length;
  const packedInPerc = Math.round((numItemPacked / numItems) * 100);
  return (
    <>
      <footer className="stats">
        {packedInPerc === 100 ? (
          <em>Yo got everything! Ready to go</em>
        ) : (
          <em>
            You have {numItems} item in your list, and you already packed{" "}
            {numItemPacked}({packedInPerc}%)
          </em>
        )}
      </footer>
    </>
  );
}

export default Stats;
