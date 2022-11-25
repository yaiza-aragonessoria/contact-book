import "./contact.css";

const Contact = ({id, name, avatar, handleDelete, handleUpdate}) => {
    return (
        <>
        <div>
            {avatar && <img src={avatar} alt={`${name}'s avatar`} className="avatar"/>}
            <span>{name}</span>
        </div>
        <div className="contact-buttons">
            <button onClick={() => handleUpdate(id,name,avatar)}> Update </button>
            <button onClick={() => handleDelete(id)}> Delete </button>
        </div>
        </>
    );
}

export default Contact;


