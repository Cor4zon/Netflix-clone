import CardList from '@/components/ui/CardList/CardList';
import NavBar from '@/components/ui/Navbar/Navbar';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import Select from 'react-select';




const Movies = () => {
    const [ genre, setGenre ] = useState("");
    const [ lists, setLists ] = useState([]);
    const [ options, setOptions ] = useState([]);
    // const options = [
    //     { value: null, label: 'all' },
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    //   ];

    useEffect(() => {
        const getMovies = async () => {
            console.log(genre ? `&genre=${genre.value}` : '');
            console.log(genre);
            const results = await axios.get(`http://localhost:8080/api/lists?type=Series${genre ? `&genre=${genre.value}` : ''}`, {
                headers: {
                    token: `JWT ${localStorage.getItem('token')}`,
            }
        });
        console.log(results);
        setLists(results.data);
        
        const optionsLists = [];
        results.data.map(list => {
            optionsLists.push({ value: list.genre, label: list.title })
        });

        setOptions(optionsLists);
        }
        getMovies();
    }, [genre])

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