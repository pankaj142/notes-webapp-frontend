import { INote } from "../models/note";
import { makeApiCall } from "./apiCall";

export const getNotes = async () : Promise<INote[]> => {
    const response = await makeApiCall(`/api/notes`, {
        method : "GET"
    })
    return response.json();
}   
