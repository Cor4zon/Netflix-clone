import CardList from '@/components/ui/CardList/CardList';
import NavBar from '@/components/ui/Navbar/Navbar';
import axios from 'axios';
import { useEffect, useState} from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import "./Series.scss";


const Movies = () => {
    const [ genre, setGenre ] = useState<SingleValue<string>>("");
    const [ lists, setLists ] = useState([]);
    const [ options, setOptions ] = useState([]);

    useEffect(() => {
    const getMovies = async () => {
        const results = await axios.get(`http://localhost:8080/api/lists?type=Series`, {
            headers: {
                token: `JWT ${localStorage.getItem('token')}`,
        }
    });
    setLists(results.data);
    
    const optionsLists = [];
    results.data.map(list => {
        optionsLists.push({ value: list.genre, label: list.title })
    });

    setOptions(optionsLists);
    }
    getMovies();
    }, [])

    useEffect(() => {
        const getMovies = async () => {
            const results = await axios.get(`http://localhost:8080/api/lists?type=Series${genre ? `&genre=${genre.value}` : ''}`, {
                headers: {
                    token: `JWT ${localStorage.getItem('token')}`,
            }
        });

        setLists(results.data);
        }
        getMovies();
    }, [genre])

    const handleChange = (newValue: SingleValue<string>, actionMeta:
        ActionMeta<string>) => {
        setGenre(newValue)
      };

    return (
        <div>
            <Select
                className={"selectStyle"}
                value={genre}
                onChange={handleChange}
                options={options}
                isSearchable={false}
            />
            {lists.map((list) => {
                return <CardList list={list} key={list?.title} />;
            })}
        </div>
    );
};

export default Movies;