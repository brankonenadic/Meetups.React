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
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" id="image" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" required rows="5" ></textarea>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm
