
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error : any = useRouteError();
    return (
        <>
            <h2> Ooops... </h2>
            <h3> {error.statusText} </h3>
        </>
    )
}
export default ErrorPage;