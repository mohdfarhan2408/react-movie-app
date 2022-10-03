import React, {useState} from "react";
import ModalDetails from "./ModalDetails";
import Image from "./Image.png";


const API_IMAGE  = "https://image.tmdb.org/t/p/w500/";


const setPopularityColor = (rating) => {
    if (rating >= 80) {
        return "green";
    } else if (rating >= 50) {
        return "orange";
    } else {
        return "red";
    }
}



const MovieList =({poster_path, title, popularity, id}) => {
    const [modalOpen, setModalOpen] = useState(false);
    
    
    return(
         <div className="movie-list" >
                {(poster_path?.length > 0) ? ( 
                    <img alt="movie" src={API_IMAGE + poster_path}></img>
                ) : (
                    <img alt="movie" src={Image}></img>
                )}         
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className={`tag ${setPopularityColor(popularity)}`}>                      
                        <p>{Math.round(popularity)}</p>                         
                    </span>                   
                </div>
                {modalOpen && 
                    <ModalDetails MovieID={id} setOpenModal={setModalOpen}/>
                    }
                <div className="movie-list-footer">
                    <button onClick={() => {setModalOpen(true);}}>View Details</button>
                </div>
        </div>
        )
};

export default MovieList;
