import NavBar from '@/components/ui/Navbar/Navbar';
import axios from 'axios';
import React, { useEffect, useState} from 'react';

const Movies = () => {
    const [ genre, setGenre ] = useState("");

    useEffect(() => {
        const getMovies = async () => {
            const results = await axios.get('http://localhost:8080/api/lists?type=Series&genre=Action', {
                headers: {
                    token: `JWT ${localStorage.getItem('token')}`,
            }
        });
            setMovie
        }
    }, [])
    // 
    return (
        <div>
            <NavBar />
        </div>
    );
};

export default Movies;