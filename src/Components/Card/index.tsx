import { MdDelete } from "react-icons/md";
import "./style.css";


const Card = () => {
    return (
        <div className="card">
            <div className="card-container">
                <p className="card-title">This is title this is is si sis ss xxxxxxxxxxx xxx</p>
                <MdDelete className="card-delete-btn"/>
                <p className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit necessitatibus harum similique consequatur! Dicta dolore sapiente animi deleniti sit ullam perferendis nostrum illo vitae error beatae, dignissimos incidunt cumque.
                    This is content
                </p>
            </div>
            <div className="card-footer">
                <p className="card-timestamp">Created: Dec 20, 2023, 8.50AM</p>
            </div>
        </div>
    )
}

export default Card;