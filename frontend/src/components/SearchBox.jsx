import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search?query=${keyword}`);
        } else {
            navigate('/events');
        }
    };

    return (
        <form onSubmit={handleSearch} className="d-flex">
            <input
                type="text"
                placeholder="Search events..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="form-control me-2"
            />
            <button type="submit" className="btn btn-outline-light">Search</button>
        </form>
    );
};

export default SearchBox;
