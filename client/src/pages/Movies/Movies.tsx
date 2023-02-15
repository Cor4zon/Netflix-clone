import NavBar from '@/components/ui/Navbar/Navbar';
import React, { useState } from 'react';

const Movies = () => {
    const [ genre, setGenre ] = useState("");
    
    // http://localhost:8080/api/lists?type=Movies&genre=Action
    return (
        <div>
            <NavBar />
        </div>
    );
};

export default Movies;