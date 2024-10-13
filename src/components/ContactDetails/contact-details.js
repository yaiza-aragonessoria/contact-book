import "./contact-details.css"

const ContactDetails = ({id, name, avatar, address, species, favColor, inDetail, handleUpdate, handleDelete, handleIsInDetails}) => {
    // handleIsInDetails();
    return (
        <>
        <div className="contact-details-container">
            <div className="details-container">
                <div className="address">Address: {address}</div>
                <div className="species">Species: {species}</div>
                <div className="fav-color">Fav color: {favColor}</div>
            </div>
            <div className="buttons-container">
                <button onClick={() => handleUpdate(id,name,avatar,address, species, favColor, inDetail)}> Update </button>
                <button onClick={() => handleDelete(id)}> Delete </button>
            </div>
        </div>
        </>
    );
}

export default ContactDetails;