import React from 'react'
import Trip from '../models/Trip'
import { useState,useEffect} from 'react'
import TextField from '../components/shared/TextField';
import Footer from '../components/shared/Footer';
import axios from 'axios';

export default function TripPage() {
  const[trips, setTravels]= useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage]= useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [errors,setError] = useState();

  useEffect(() => {
    
    fetchUsers();
  }, [currentPage]);


  const fetchUsers = async () => {
    const token = localStorage.getItem("auth_token");
    const userId = localStorage.getItem("user_id");

    try {
      const response = await axios.get("api/users/" + userId + "/travels?page=" + currentPage, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTotalPages(response.data.last_page)
      setTravels(response.data.data);
    } catch (err) {
      setError("Failed to fetch travels.");
    }
  };


  function handlePreviousPage(e){
    setCurrentPage(currentPage - 1)
  }

  function handleNextPage(e){
    setCurrentPage(currentPage + 1)
  }


  const filteredDate = trips.filter(t => {
    return (
      t.destination.toLowerCase().startsWith(searchTerm)
    )});

  function handleSearch(e){
      setSearchTerm(e.target.value.toLowerCase());

  }


  return (
    <>
      <div className='pocetna-page'>
        
        
        <div className='search'>
          <p style ={{marginRight:'20px'}}>Search:</p>
          <TextField
            type="text"
            name="search"
            id="search_id"
            placeholder='Search...'
            value ={searchTerm}
            onChange={handleSearch}
          />
        </div>
           
                {filteredDate ? filteredDate.map(t=>
                  <Trip trip={{ destination: t.destination, start_date: t.start_date, end_date: t.end_date}} />
                ): trips.map(t => (
                  <Trip trip={{ destination: t.destination, start_date: t.start_date, end_date: t.end_date}} />
                  
                ))}

            {/* <div className='pagination'> */}
              <button onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className='pagination-button'
              >Previous</button>

              <button onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className='pagination-button'
              >Next</button>
            {/* </div> */}

        <Footer/>
      </div>
    </>
  )
}
