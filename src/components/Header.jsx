export function Header({ query, setQuery, searchMovies, inputRef }) {
  return (
    <header>
      <div className="logo_wrap">
        <h1>J Movies🍿</h1>
      </div>
      <form className="search_wrap" onSubmit={searchMovies}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          ref={inputRef}
          type="text"
          id="name"
          placeholder="start typing..."
        />
        <button type="submit">Enter</button>
      </form>
    </header>
  );
}
