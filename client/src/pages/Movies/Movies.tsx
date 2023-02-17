import CardList from '@/components/ui/CardList/CardList';
import NavBar from '@/components/ui/Navbar/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Movies = () => {
    const [ genre, setGenre ] = useState("");
    const [ lists, setLists ] = useState([]);
    
    useEffect(() => {
        const getMovies = async () => {
            const results = await axios.get('http://localhost:8080/api/lists?type=Films', {
                headers: {
                    token: `JWT ${localStorage.getItem('token')}`,
            }
        });
        console.log(results);
        setLists(results.data);
        }
        getMovies();
    }, [])
    return (
        <div>
            <NavBar />
            {lists.map((list) => {
                return <CardList list={list} key={list?.title} />;
            })}
        </div>
    );
};

export default Movies;