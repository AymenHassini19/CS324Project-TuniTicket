import React from 'react'
import { faMusic, faFutbol, faFilm, faFaceLaughBeam, faMasksTheater, faCubes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Categories = () => {
  return (
    <div className="categories-container">
      <h1 className="categories-title">Browse Events by Category</h1>
      <div className="categories-grid">
        <div className="category-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faMusic} className="category-icon" />
          </div>
          <h3>Music</h3>
          <p>Concerts, festivals, and live performances</p>
        </div>

        <div className="category-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faFutbol} className="category-icon" />
          </div>
          <h3>Sport</h3>
          <p>Games, tournaments and sporting events</p>
        </div>

        <div className="category-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faFilm} className="category-icon" />
          </div>
          <h3>Movie</h3>
          <p>Film screenings, premieres and festivals</p>
        </div>

        <div className="category-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faFaceLaughBeam} className="category-icon" />
          </div>
          <h3>Comedy</h3>
          <p>Stand-up shows and comedy nights</p>
        </div>

        <div className="category-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faMasksTheater} className="category-icon" />
          </div>
          <h3>Theater</h3>
          <p>Plays, musicals and theatrical performances</p>
        </div>

        <div className="category-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faCubes} className="category-icon" />
          </div>
          <h3>Others</h3>
          <p>Exhibitions, workshops and more</p>
        </div>
      </div>
    </div>
  )
}

export default Categories