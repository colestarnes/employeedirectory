import React from "react";

function SearchForm(props) {
  return (
    <form  onSubmit={props.handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search through employees"
          id="search"
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
