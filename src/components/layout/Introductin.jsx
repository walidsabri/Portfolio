import "./introduction.css";

export default function Introduction() {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Walid_Sabri_Resume.pdf"; // Path to your resume in public folder
    link.download = "Walid_Sabri_Resume.pdf"; // Downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="Header">
      <div className="empty-top">
        <div className="empty-top-div"></div>
        <div className="empty-top-div"></div>
        <div></div>
      </div>
      <div className="introduction">
        <span className="v-line left"></span>
        <span className="v-line right"></span>

        <div className="first-intro">
          <p className="first-intro-txt">I build the web with intention.</p>
        </div>

        <div className="seconde-intro">
          <p className="name">I'm Walid Sabri,</p>
          <p className="name-2">
            I enjoy crafting interfaces where simplicity meets performance.
          </p>
        </div>

        <div className="third-intro">
          <div className="empty-1">
            <svg className="react-logo" viewBox="-11.5 -10.23174 23 20.46348">
              <circle cx="0" cy="0" r="2.05" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          <div className="about-btn-div">
            <div className="btns-group">
              <button className="about-me-btn">About Me</button>
              <button className="res-btn" onClick={handleDownloadResume}>
                <svg
                  className="download-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                My resume
              </button>
            </div>
            <p>~ Front-end Developer</p>
          </div>

          <div className="empty-2">
            <svg className="react-logo" viewBox="-11.5 -10.23174 23 20.46348">
              <circle cx="0" cy="0" r="2.05" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="empty-bottom"></div>
    </section>
  );
}
