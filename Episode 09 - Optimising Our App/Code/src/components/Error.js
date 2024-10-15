import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>Oops! Something Went Wrong</h1>
      <p>We're sorry, but an unexpected error has occurred.</p>
      <h3>Error Code: {err.status} - {err.statusText}</h3>
    </div>
  );
};

export default Error;
