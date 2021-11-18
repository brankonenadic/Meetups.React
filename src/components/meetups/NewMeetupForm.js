import React from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = () => {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required />
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm
