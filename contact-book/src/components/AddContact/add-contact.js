import "./add-contact.css";

const AddContact = ({name, address, species, favColor, isEditing, handleSubmit, handleUploadAvatar, handleContactDetails}) => {
    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
                <div className="name-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" 
                            id="name" 
                            name="name" 
                            value={name}
                            onChange={e => handleContactDetails(e)}>
                    </input>
                </div>
                <div className="address-container">
                    <label htmlFor="address">Address:</label>
                    <input type="text" 
                            id="address" 
                            name="address" 
                            value={address}
                            onChange={e => handleContactDetails(e)}>
                    </input>
                </div>
                <div className="species-container">
                    <label htmlFor="species">Species:</label>
                    <input type="text" 
                            id="species" 
                            name="species" 
                            value={species}
                            onChange={e => handleContactDetails(e)}>
                    </input>
                </div>
                <div className="favColor-container">
                    <label htmlFor="favColor">Fav Color:</label>
                    <input type="text" 
                            id="favColor" 
                            name="favColor" 
                            value={favColor}
                            onChange={e => handleContactDetails(e)}>
                    </input>
                </div>
            </div>
            <div className="avatar-container">
                <label htmlFor="avatar">Upload avatar</label>
                <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={e => handleUploadAvatar(e)}
                />
            </div>
            <button className="add-button" type="submit">{isEditing ? "Save" : "Add"}</button>
        </form>
    </>
    );
}

export default AddContact;