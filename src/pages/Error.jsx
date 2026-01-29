export default function Error() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>
        We couldn't load the page you're looking for. Please try refreshing or
        go back to the home page.
      </p>
      <button onClick={() => (window.location.href = "/")}>Go Home</button>
    </div>
  );
}
