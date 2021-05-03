import "./styles.css";

export default function TextInput({ searchValue, handleChange }) {
  return (
    <input
      className="text-input"
      type="search"
      value={searchValue}
      onChange={handleChange}
      placeholder="Type your search"
    />
  );
}
