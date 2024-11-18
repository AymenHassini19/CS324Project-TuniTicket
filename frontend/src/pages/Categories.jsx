import React from 'react';
import {faMusic, faFutbol, faFilm, faFaceLaughBeam, faMasksTheater, faCubes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const Categories = () => {
    const categories = [
        {icon: faMusic, label: 'Music', link: '/category/music'},
        {icon: faFutbol, label: 'Sport', link: '/category/sport'},
        {icon: faFilm, label: 'Movie', link: '/category/movie'},
        {icon: faMasksTheater, label: 'Theater', link: '/category/theater'},
        {icon: faFaceLaughBeam, label: 'Comedy', link: '/category/comedy'},
        {icon: faCubes, label: 'Others', link: '/category/others'},
    ];

    return (
        <div className="p-12 w-full box-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                    <div key={index}
                         className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <Link to={category.link} className="block text-center text-white p-8 no-underline">
                            <FontAwesomeIcon icon={category.icon} size="4x" className="mb-4 text-gray-300"/>
                            <h3 className="text-xl font-bold uppercase tracking-wider">{category.label}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;