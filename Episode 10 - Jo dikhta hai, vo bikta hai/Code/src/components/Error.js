import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops! Something Went Wrong</h1>
      <p className="text-lg mt-4">We're sorry, but an unexpected error has occurred.</p>
      <h3 className="mt-2 text-2xl">
        Error Code: {err.status} - {err.statusText}
      </h3>
    </div>
  );
};
export default Error;
