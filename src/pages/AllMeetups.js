import React, {useState} from 'react';
import MeetupsList from '../components/meetups/MeetupsList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllMeetups = () => {
  const [isLoading, setisLoading] = useState(true);
  const [loadedData, setloadedData] = useState([]);

  fetch('https://meetups-b5772-default-rtdb.europe-west1.firebasedatabase.app/meetups.json').then((response) => {
    response.json();
  }).then((data) => {
    setisLoading(false);
  });

  return (
    <div>
      <MeetupsList meetups={DUMMY_DATA} />
    </div>
  )
}

export default AllMeetups
