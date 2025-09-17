import React from "react";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section
        className="about-section py-5"
        style={{
          background: "linear-gradient(135deg, #e8f5e8 0%, #f8fffe 100%)",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="about-card text-center bg-white rounded-4 shadow-lg p-5">
                <h1 className="about-title fw-bold mb-3">
                  About TEST Site{" "}
                  <span className="leaf-icon text-success opacity-75 fs-5">
                    <i className="fas fa-leaf"></i>
                  </span>
                </h1>

                <p className="about-subtitle text-muted fs-5 mb-4">
                  Ms.Mayjoy Cillo.
                </p>

                <div className="text-start">
                  <p className="about-content fs-6 mb-3">
                    This page is a TESTING WEBSITE for Maam Joy&apos;s Class
                    Home IT 374-EL3 - Integrative Programming and Technologies
                    2. This TEST currently has three pages: Home, About Us, and
                    Contact Us.
                  </p>

                  <p className="about-content fs-6 mb-4">
                    Our project currently has three pages:{" "}
                    <strong className="text-success">Home</strong>,{" "}
                    <strong className="text-success">About Us</strong>, and{" "}
                    <strong className="text-success">Contact Us</strong>. The
                    Contact form saves submissions into the database for easy
                    management.
                  </p>

                  <div className="features-list bg-light rounded-3 p-4 mb-4">
                    <h5 className="text-success fw-bold mb-3">
                      <i className="fas fa-cogs"></i> Project Features
                    </h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Hi Maam Joy :&gt;
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="/"
                  className="btn-back border-2 border-success text-success px-4 py-2 rounded-2 fw-medium mt-3 text-decoration-none d-inline-block"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <i className="fas fa-arrow-left"></i> Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center bg-dark text-white py-4">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} My TEST Site
          </p>
        </div>
      </footer>
    </>
  );
}
