import CardList from '@/components/ui/CardList/CardList';
import NavBar from '@/components/ui/Navbar/Navbar';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import Select from 'react-select';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const Movies = () => {
    const [ genre, setGenre ] = useState("chocolate");
    const [ lists, setLists ] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const results = await axios.get('http://localhost:8080/api/lists?type=Series', {
                headers: {
                    token: `JWT ${localStorage.getItem('token')}`,
            }
        });
        console.log(results);
        setLists(results.data);
        }
        getMovies();
    }, [])

    const handleChange = (selectedOption: string) => {
        setGenre(selectedOption)
        console.log(`Option selected:`, selectedOption)
      };

    return (
        <div>
            <Select
                value={genre}
                onChange={handleChange}
                options={options}
            />
            <NavBar />
            {lists.map((list) => {
                return <CardList list={list} key={list?.title} />;
            })}
        </div>
    );
};

export default Movies;