// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    const { data } = props;
    return (
        <div>
            <img src={data.photo} ></img>
            <h2>{data.name}</h2>
            <p>{data.phone}</p>
            <p>{data.email}</p>
        </div>
    )
}

export default Contact;