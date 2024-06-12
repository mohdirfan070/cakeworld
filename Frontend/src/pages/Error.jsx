import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navbar/>
    <div className="mt-20" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/home"}>Go BAck TO Home Page </Link>
    </div>
    </>
  );
}