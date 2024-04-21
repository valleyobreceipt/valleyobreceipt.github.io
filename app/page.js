import Link from "next/link";

import "./client.css";

export default function Home() {
  return (
    <>
      <section id="wrapper">
        <header className="site-header">
          <div className="container-fluid">
            <nav className="navbar site-navigation">
              <div className="navbar-brand">
                <Link href="/">
                  <img src="/asset/img/client-Valley-Logo.svg" alt="Logo" />
                </Link>
              </div>
            </nav>
          </div>
          {/* container */}
        </header>
        <main className="site-main">
          <section className="common-sec">
            <div className="container-fluid">
              <div className="date-of-birth-fields">
                <h4 className="heading">
                  Please enter your Date of Birth to read the message
                </h4>
                <div className="dob-wrapp">
                  <div className="dob-select dob-month">
                    <select name="" className="form-control" id="">
                      <option value="">Month</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </select>
                  </div>
                  <div className="dob-select dob-date">
                    <select name="" className="form-control" id="">
                      <option value="">Date</option>
                    </select>
                  </div>
                  <div className="dob-select dob-year">
                    <select name="" className="form-control" id="">
                      <option value="">Year</option>
                    </select>
                  </div>
                </div>
                <div className="input-submit">
                  <button
                    type="submit"
                    className="custom-btn"
                    data-toggle="modal"
                    data-target="#verifiedDobModal"
                  >
                    Submit
                  </button>
                </div>
                <p className="msg-error">Please enter correct Date of Birth</p>
              </div>
              {/* date-of-birth-fields */}
            </div>
            {/* container */}
          </section>
          {/* common-sec */}
        </main>
      </section>
      {/* wrapper */}
    </>
  );
}
