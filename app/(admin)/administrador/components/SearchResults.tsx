'use client'
import React from 'react';
import UserItem from './UserItem';

interface User {
  id: string;
  name: string;
}

interface SearchResultsProps {
  results: User[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className='mt-6 px-4'>
      {
        results.length !== 0 ? (
          <div className=''>
            <ul>
              {results.map((user) => (
                <UserItem key={user.id} {...user} />
              ))}
            </ul>
          </div>
        )
        :
        <>
          <div className="mt-11 text-center text-lg text-gray-600">
            No se encontro ningun usuario
          </div>
        </>
      }
      
    </div>
  );
};

export default SearchResults;