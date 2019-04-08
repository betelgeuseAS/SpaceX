import React from 'react';

export const SearchBar = ({ term, data, update}) => {
  const dataSearch = e => {
    const value = e.target.value.toLowerCase();
    const filter = data.filter(item => {
      return item.mission_name.toLowerCase().includes(value);
    });

    update({
      data: filter,
      term: value
    });
  };

  return (
    <>
      <h1>Search</h1>
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search mission..."
        onChange={dataSearch}
      />
    </>
  );
};