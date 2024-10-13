import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Contact from "../Contact/contact";
import "./contact-book.css";
import "../../avatars/mario.png";
import "../../avatars/toad.png";
import AddContact from "../AddContact/add-contact";



const ContactBook = () => {
    const [contactEntries, setContactEntries] = useState([{
            id: 1,
            name: "Toad",
            avatar: "https://mario.wiki.gallery/images/5/50/SuperPaperToad.png",
            address: "Anywhere in Mushroom Kingdom",
            species: "toad",
            favColor: "blue and yellow"
        }, {
            id: 2,
            name: "Mario",
            avatar: "https://mario.wiki.gallery/images/a/aa/SMW_Mario_V-sign_Artwork.png",
            address: "Brooklyn, New York",
            species: "human",
            favColor: "red"
        }, {
            id: 3,
            name: "Yoshi",
            avatar: "https://mario.wiki.gallery/images/f/fc/SMW_Art_-_Yoshi.png",
            address: "Yoshi's Island, Dinosaur Land",
            species: "human",
            favColor: "green"
        },{
            id: 4,
            name: "Peach",
            avatar: "https://mario.wiki.gallery/images/thumb/c/c8/Princess_Peach_PiT.png/300px-Princess_Peach_PiT.png",
            address: "Peach's castle, Mushroom Kingdom",
            species: "human",
            favColor: "pink"
        },{
            id: 5,
            name: "Donkey Kong",
            avatar: "https://mario.wiki.gallery/images/2/23/Donkey_Kong_Lifting_Barrel.jpg",
            address: "DK Island",
            species: "kong",
            favColor: "brown"
        }

        ]
    );

    const [contactDetails, setContactDetails] = useState({
        id: 0,
        name: "",
        avatar: "",
        address: "",
        species: "",
        favColor: ""
      });
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding]  = useState(false);
    


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
        
        setContactDetails({id:0, name:"", avatar: "",  address: "", species: "", favColor: ""});
        setIsEditing(false);
        setIsAdding(!isAdding);
        

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

    const handleUpdate = (clickedId, name, avatar, address, species, favColor) => {
        setContactDetails({
            id: clickedId,
            name,
            avatar,
            address,
            species,
            favColor
        });
        setIsEditing(true);
        setIsAdding(!isAdding);
    }

    const handleAddButton = e => {
        e.preventDefault();
        
        setIsAdding(!isAdding);
        }

    return (
        <>
        <div className="add-container">
            <button className="plus-button" onClick={e => handleAddButton(e)}></button>
            {isAdding? 
                <AddContact
                {...contactDetails}
                handleContactDetails={handleContactDetails}
                handleSubmit={handleSubmit}
                handleAddButton={handleAddButton}
                handleUploadAvatar={handleUploadAvatar}
                isEditing={isEditing}
                /> : null}
        </div>
        <div className="contacts-grid">
            {
            contactEntries.map((contact) =>{
                return(
                    <Contact key={contact.id} 
                            {...contact}
                            handleContactDetails={handleContactDetails}
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