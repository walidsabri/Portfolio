import MainNavigation from "../components/layout/Nav";
import "./Error.css";
export default function Error() {
  return (
    <>
      <MainNavigation />
      <div className="error-container">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-subTitle">
          We couldn't load the page you're looking for. Please try refreshing or
          go back to the home page.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="error-btn">
          Go Home
        </button>
      </div>
    </>
  );
}
