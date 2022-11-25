import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Contact from "../Contact/contact";
import "./contact-book.css";
import "../../avatars/mario.png";
import "../../avatars/toad.png";



const ContactBook = () => {
    const [contactEntries, setContactEntries] = useState([{
        id: 1,
        name: "Toad",
        avatar: "https://mario.wiki.gallery/images/5/50/SuperPaperToad.png",
        }, {
            id: 2,
            name: "Mario",
            avatar: "https://mario.wiki.gallery/images/a/aa/SMW_Mario_V-sign_Artwork.png",
        }, {
            id: 3,
            name: "Yoshi",
            avatar: "https://mario.wiki.gallery/images/f/fc/SMW_Art_-_Yoshi.png",
        }
        ]
    );

    // const [contactEntries, setContactEntries] = useState([]);
    const [contactDetails, setContactDetails] = useState({
        id: 0,
        title: "",
        message: "",
        image: "",
      });
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        /*If the fields are empty, do not create a new contact*/
        if (!contactDetails.name) {return;}
        else {
            const index = contactEntries.findIndex(contact => {
                return contact.id === contactDetails.id
            });
            if (index !==-1){ /* Existing contact is being updating a contact */
                setContactEntries( prevEntries => {
                    prevEntries[index] = contactDetails;
                return [...prevEntries];}); 
            }
            else{ /*New contact is added*/
                setContactEntries( prevContactEntries => {
                contactDetails.id = uuidv4();
                return [contactDetails, ...prevContactEntries];
                })
            }
        
        setContactDetails({id:0, name:"", avatar: ""});
        setIsEditing(false);
        

        }
    }

    const handleUploadAvatar = e => {
        setContactDetails(prevValue => {
            return {
              ...prevValue,
              [e.target.name]: URL.createObjectURL(e.target.files[0]),
            };
            });
    }

    const handleContactDetails = e => {
        setContactDetails(prevValue => {
            return {...prevValue, [e.target.name]: e.target.value,}
        });
    };

    

    const handleDelete = toDeleteId => {
        setContactEntries(contactEntries.filter( (contact) => contact.id !== toDeleteId));
    }

    const handleUpdate = (clickedId, name, avatar) => {
        setContactDetails({
            id: clickedId,
            name,
            avatar,
        });
        setIsEditing(true);
    }


    return (
        <>
        <h4>Add new contact</h4>
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="blog-message">Name:</label>
                <input type="text" 
                        id="contact-name" 
                        name="name" 
                        value={contactDetails.name}
                        onChange={e => handleContactDetails(e)}>
                </input>
            </div>
            <div className="input-container">
                <label htmlFor="picture">Upload avatar</label>
                <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={e => handleUploadAvatar(e)}
                />
            </div>
            <button type="submit">{isEditing ? "Save" : "Add"}</button>
        </form>

        <div className="contacts-grid">
        <h4>My contacts</h4>
            {
            contactEntries.map((contact) =>{
                return(
                    <Contact key={contact.id} 
                            {...contact}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                    />
                );
            })
          }
        </div>  
        </>
    );
}


export default ContactBook;