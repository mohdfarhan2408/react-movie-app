import React, { useState, useEffect } from "react";


const ModalDetails = ({ setOpenModal, MovieID}) => {
    const [movieDetails, setMovieDetails] = useState({});
    const {title, overview, original_language, runtime, genres, spoken_languages} = movieDetails;
    const API_Details =  `http://api.themoviedb.org/3/movie/${MovieID}?api_key=328c283cd27bd1877d9080ccb1604c91`;
   

    useEffect(() => {
    fetch(API_Details)
        .then(res => res.json())
        .then(data => {
               console.log(data);
               setMovieDetails(data);
        })
    });


    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                       <button onClick={() => {setOpenModal(false);}}> X </button>                  
                </div>
                    <div className="body"> 
                        <div className="details-container">                          
                                <h1>{title}</h1><br/>
                                <h3>Synopsis:</h3>
                                    {(overview?.length > 0) ? ( 
                                        <p>{overview}</p>
                                        ) : (
                                        <p>N/A</p>)}
                                     <br/>                               
                                <p><b>Language: </b> </p>
                                {(spoken_languages?.length > 0) ? ( 
                                    <div className="with-language">
                                        {spoken_languages?.map((language) =>
                                                <p key={language.id} {...language}>{language.name}</p>)
                                        } </div>
                                        ) : (
                                         <div className="no-language">
                                             <p>{original_language}</p>
                                        </div>
                                 )} 
                                <br/>
                                <p><b>Duration: </b> {`${runtime} min`}</p><br/> {/*use template literal for spacing to avoind warning of "no-useless-concat error" */}
                                <p><b>Genre(s):</b></p>
                                {(genres?.length > 0) ? ( 
                                    <div className="genre-list">
                                    {genres?.map((genre) =>
                                            <p key={genre.id} {...genre}>{genre.name}</p>)
                                        }
                                    </div>
                                    ) : (
                                    <div className='no-genre'>
                                        <p>N/A</p>
                                    </div>
                                )}                          
                        </div> 
                    </div>
                <div className="footer">
                    <button onClick={() => {setOpenModal(false);}} id="cancelBtn" > Close </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDetails;