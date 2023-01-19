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
          `http://localhost:8080/api/lists/${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzk1YmJhYzIxMGVjMTFkZTJlNDFlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDE0MDkyNSwiZXhwIjoxNjc0NTcyOTI1fQ.CMYXfS5J_eeKABM0n3bDoOuZ5Sbh00Guk1HhETiUbJI',
            },
          },
        );
        console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="shows-wrapper">
      {lists.map((list) => {
        return <CardList list={list} key={list.title} />;
      })}
    </div>
  );
};

export default ShowRecomendations;
