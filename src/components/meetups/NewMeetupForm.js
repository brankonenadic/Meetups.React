import React, {useRef} from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = () => {

    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        console.log(enteredTitle ,enteredImage , enteredAddress ,enteredDescription);

    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required ref={imageRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" required rows="5" ref={descriptionRef} ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm
