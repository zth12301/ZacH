// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    // Not using useRouteError because of how the router is set up
    // const error: unknown = useRouteError();
    // console.error(error);

    return (
        <div>
            <h1>Uh oh</h1>
            <p>An error has occurred</p>
            <p>
                {/* <i>{error.statusText || error.message}</i> */}
            </p>
        </div>
    );
}