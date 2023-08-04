'use client'
import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import axios from "axios"

interface User {
  id: string;
  name: string;
}

const App: React.FC = () => {
  
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    const filteredResults = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='mt-11' >
      <SearchForm users={users} onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
