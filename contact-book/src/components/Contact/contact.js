import ContactDetails from "../ContactDetails/contact-details";
import "./contact.css";

const Contact = ({id, name, avatar, address, species, favColor, isInDetails, handleUpdate, handleDelete, handleIsInDetails, handleContactDetails}) => {
    const contact = {
        id,
        name,
        avatar,
        address,
        species,
        favColor
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