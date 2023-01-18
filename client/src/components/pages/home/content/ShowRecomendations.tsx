import CardList from '@/components/ui/CardList/CardList';
import './ShowRecomendations.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ShowRecomendations = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
        );
        console.log(res);
        setLists(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="shows-wrapper">
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </div>
  );
};

export default ShowRecomendations;
