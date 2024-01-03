import { MdDelete } from "react-icons/md";
import "./style.css";
import { INote } from "../../models/note";
import formatDate from "../../utils/formateDate";
interface NoteProps {
    note : INote
}

const Card = ({note} : NoteProps) => {
    return (
        <div className="card">
            <div className="card-container">
                <p className="card-title">{note.title}</p>
                <MdDelete className="card-delete-btn"/>
                <p className="card-content">
                    {note.text}
                </p>
            </div>
            <div className="card-footer">
                <p className="card-timestamp">Created: {formatDate(note.createdAt)}</p>
            </div>
        </div>
    )
}

export default Card;