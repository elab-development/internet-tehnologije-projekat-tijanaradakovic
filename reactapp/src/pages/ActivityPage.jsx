import React, { useState,useEffect } from 'react'
function ActivityPage({trips}) {
  const [activitiesList,setActivities] = useState([]);
  let id=1;
  useEffect(() => {
    let id = 1;
    const allActivities = [];

    trips.forEach(trip => {
      trip.aktivnosti.forEach(activity => {
        allActivities.push({
          id: id++,
          naziv_aktivnosti: activity.naziv_aktivnosti,
          mesto: trip.naziv
        });
      });
    });

    setActivities(allActivities);
  }, [trips]);

function deleteItem(Id){
  setActivities(activitiesList.filter(a => a.id !==Id));
}
  
  return (
    <div className='page'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Naziv Aktivnosti</th>
                    <th>Mesto</th>
                </tr>
                
            </thead>
            <tbody>
            {activitiesList.map(a=>
          <tr key={a.id} >
            <td>{a.id}</td>
            <td>{a.naziv_aktivnosti}</td>
            <td>{a.mesto}</td>
            <td> 
              <button onClick={() => deleteItem(a.id)}>delete</button>
            </td>
          </tr>
          )}
            </tbody>
        </table>
    </div>
  )
}

export default ActivityPage



