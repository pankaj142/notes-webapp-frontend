import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import "./style.css";
import { INote } from "../../models/note";
import * as NoteApi  from "../../network/noteApis";

const NotesPage = () => {
    const [notes, setNotes] = useState<INote[]>([]);

    useEffect( () => {
        const getNotes = async () => {
            try{ 
                const response : INote[] = await NoteApi.getNotes();
                setNotes(response);
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