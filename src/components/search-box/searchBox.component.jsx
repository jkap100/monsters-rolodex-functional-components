import "./searchBox.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBox;
