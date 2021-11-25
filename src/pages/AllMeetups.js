import React, { useState, useEffect } from 'react';
import MeetupsList from '../components/meetups/MeetupsList';


const AllMeetups = () => {
  const [isLoading, setisLoading] = useState(true);
  const [loadedData, setloadedData] = useState([]);

  useEffect(() => {
    setisLoading(true);

    fetch('https://meetups-b5772-default-rtdb.europe-west1.firebasedatabase.app/meetups.json').then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setisLoading(false);
      setloadedData(meetups);
    });
  }, []);

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  };
  console.log(loadedData);

  return (
    <div>
      <MeetupsList meetups={loadedData} />
    </div>
  )
}

export default AllMeetups
