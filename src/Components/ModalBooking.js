import React, {useState, useEffect} from "react";


//API
const API_URL = "http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&sort_by=release_date.desc";

const ModalBooking = ({setOpenModalBooking}) => {
    const [movieName, setMovieName] = useState([]);
    

    //fetching APi to GET the data = results
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
        setMovieName(data.results); 
        })
    }); 


    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                    <button onClick={() => {setOpenModalBooking (false);}}> X </button>
                </div>
                <div className="body">                   
                        <form>      
                            {/* POST method to post the data */}
                            <h3>Confirm Booking</h3><br/>
                            <label>Name:</label><br/>
                                 <input className="submit-booking" type="text" name="name" placeholder="eg: Ahmad Bin Abu" required></input><br/>
                            <label>Movie:</label><br/>
                                <select className="submit-booking" name="Movie" required>
                                    {movieName.map((movie) =>
                                        <option name="movie_list" key={movie.id} {...movie}>{movie.title}</option>)
                                    }
                                </select><br/>
                            <label>Location:</label><br/>
                                <select name="location" className="submit-booking" required>                                  
                                    <option name="KL Gateway" value="KL Gateway">KL Gateway</option>
                                    <option name="Mid Valley" value="Mid Valley"> Mid Valley</option>
                                    <option name="KLCC" value="KLCC">KLCC</option>
                                    <option name="Pavillion" value="Pavillion">Pavillion</option>
                                    <option vname="Sunway Pyramid" alue="Sunway Pyramid">Sunway Pyramid</option>                              
                                </select><br/>                                   
                            <label>Date:</label><br/>
                                <input className="submit-booking" type="date" name="date"  required></input><br/>
                            <label>Time:</label><br/>
                                <input className="submit-booking" type="time" name="time" required></input><br/>                        
                            <input name="record"  id="submitBtn" type="submit" value="Submit" />                          
                        </form> 
                </div>
            </div>
        </div>
    );

}

export default ModalBooking;