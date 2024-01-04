import { INote } from "../models/note";

const makeApiCall = async (input : RequestInfo, init : RequestInit) => {
        const response = await fetch(input, init);
        if(response.ok){ // true - status between 200 to 399
            return response;
        }else{
            const errorBody = await response.json();
            throw Error(errorBody.error)
        }
}

export const getNotes = async () : Promise<INote[]> => {
    const response = await makeApiCall(`/api/notes`, {
        method : "GET"
    })
    return response.json();
}   
