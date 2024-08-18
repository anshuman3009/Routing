import { useRouteError } from "react-router-dom";
function Error()
{
    const err=useRouteError();
    console.log(err);
    return (
        <>
        <h2>{typeof(err)}</h2>
        <h3>{err.status}</h3>
        <h1>{err.statusText}</h1>
        <h1>{err.data}</h1>
    <h1>OOPS ERROR</h1>
    </>)
}

export default Error;