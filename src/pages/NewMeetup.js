import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {
    const addMeetupHandler = (meetupData) => {
        fetch('https://meetups-b5772-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', 
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetup
