import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import "./style.css";
import { INote } from "../../models/note";

const NotesPage = () => {
    const [notes, setNotes] = useState<INote[]>([]);

    useEffect( () => {
        const getNotes = async () => {
            try{ 
                const response = await fetch(`/api/notes`, {
                    method : "GET"
                })
                const notesData : INote[] = await response.json();
                setNotes(notesData);
            }catch(error){
                console.log("Oops... Could not fetch notes!", error)
            }
        }
        getNotes();
    }, [])

    return (
        <div className="notes-page-container">
            {
                notes.map((note) => {
                    return <Card note={note} key={note._id}/>
                })
            }
        </div>
    )
}

export default NotesPage;