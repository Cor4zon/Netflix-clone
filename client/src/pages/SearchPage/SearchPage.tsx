import CardList from '@/components/ui/CardList/CardList';
import { useSelector } from 'react-redux';
import { selectSearchList } from '@/features/searchList/searchListReducer';
import './SearchPage.scss';
import { useEffect } from 'react';

const SearchPage = () => {
  const list = useSelector(selectSearchList);

  useEffect(() => {
    console.log(list);
  }, [])
  
  return (
    <div>
      <h1> Search Page</h1>
      <CardList list={list} />
      {list}
    </div>
  );
};

export default SearchPage;
