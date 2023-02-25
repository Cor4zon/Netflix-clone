import CardList from '@/components/ui/CardList/CardList';
import './ShowRecomendations.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

type ShowRecomendationsProps = {
  type?: string;
}

const ShowRecomendations = ({ type }: ShowRecomendationsProps) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/lists/${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token: `JWT ${localStorage.getItem('token')}`,
            },
          },
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="shows-wrapper">
      {/* todo: add type for list */}
      {lists.map((list) => {
        return <CardList list={list} key={list.title} />;
      })}
    </div>
  );
};

export default ShowRecomendations;
