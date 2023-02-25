import CardList from '@/components/ui/CardList/CardList';
import NavBar from '@/components/ui/Navbar/Navbar';
import React from 'react';
import './SearchPage.scss';

const SearchPage = () => {
  return (
    <div>
      <h1> Search Page</h1>
      <CardList list={list} />
    </div>
  );
};

export default SearchPage;
