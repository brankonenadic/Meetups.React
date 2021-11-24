import React, {useState} from 'react';
import MeetupsList from '../components/meetups/MeetupsList';



const AllMeetups = () => {
  const [isLoading, setisLoading] = useState(true);
  const [loadedData, setloadedData] = useState([]);

  fetch('https://meetups-b5772-default-rtdb.europe-west1.firebasedatabase.app/meetups.json').then((response) => {
    response.json();
  }).then((data) => {
    setisLoading(false);
    setloadedData(data);
  });
  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  };

  return (
    <div>
      <MeetupsList meetups={loadedData} />
    </div>
  )
}

export default AllMeetups
