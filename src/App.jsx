import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'

export default function App() {
  const handleSearch = topic => {
	// ...
  };


  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}
