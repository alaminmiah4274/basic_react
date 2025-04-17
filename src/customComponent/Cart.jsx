const Cart = ({ cartItems, onClose, onRemove }) => {
  return (
    <div>
      <ul className="m-5 list-disc">
        {cartItems.map((item, idx) => (
          <li onClick={() => onRemove(item)} key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={onClose}
        className="px-2 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-400"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
