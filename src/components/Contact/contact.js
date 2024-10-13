import ContactDetails from "../ContactDetails/contact-details";
import { useState, useEffect } from "react";
import "./contact.css";

const Contact = ({id, name, avatar, address, species, favColor, handleUpdate, handleDelete, handleContactDetails}) => {
    const contact = {
        id,
        name,
        avatar,
        address,
        species,
        favColor
    }

    const [isInDetails, setIsInDetails]  = useState(false);

    const handleIsInDetails = () => {
        setIsInDetails(!isInDetails)
    }

    return (
        <>
        <div className="contact-container">
            <div className="div-avatar">
                {avatar && <img src={avatar} alt={`${name}'s avatar`} className="avatar"/>}
            </div>
            <p>{name}</p>
            <button className="more-details" 
                    onClick={handleIsInDetails}>
            </button>
        </div>
        {isInDetails?  <ContactDetails 
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            {...contact}
            />: null }
        </>
    );
}

export default Contact;