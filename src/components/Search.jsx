import IconArrow from "./IconArrow";

const Search = ({ value, onChange, onSearch }) => {
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    onSearch();
  };
  return (
    <form
      onSubmit={handleSubmitSearch}
      className="flex w-full max-w-sm bg-white rounded-xl overflow-hidden"
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search for any IP address or domain"
        className="flex-1 px-4 h-10 outline-none"
      />
      <button
        className="bg-black text-white px-5 flex items-center justify-center h-10 cursor-pointer"
        type="submit"
      >
        <IconArrow className="h-4 w-4" />
      </button>
    </form>
  );
};

export default Search;
