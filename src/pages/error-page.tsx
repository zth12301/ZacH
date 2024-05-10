//@ts-nocheck
//TODO: figure out how to deal with ts type checker for error
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: unknown = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Uh oh</h1>
            <p>An error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}