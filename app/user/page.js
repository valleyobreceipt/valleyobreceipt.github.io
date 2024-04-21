import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="wrapper">
        <header className="site-header">
          <div className="container-fluid">
            <nav className="navbar site-navigation">
              <div className="navbar-brand">
                <Link href="/user">
                  <img src="/asset/img/logo.svg" alt="Logo" />
                </Link>
              </div>
              <ul className="navbar-nav">
                <li>
                  <Link href="/user" className="active">
                    <span className="txt">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/user/history">
                    <span className="icon">
                      <img
                        src="/asset/img/share-clock.png"
                        alt="History"
                        className="iconBlack"
                      />
                      <img
                        src="/asset/img/share-clock-blue.png"
                        alt="History"
                        className="iconBlue"
                      />
                    </span>
                    <span className="txt">History</span>
                  </Link>
                </li>
                <li>
                  <Link href="/user/logout">
                    <span className="icon">
                      <img src="/asset/img/logout.png" alt="LogOut" />
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* container */}
        </header>

        <main className="site-main">
          <section className="common-sec">
            <div className="container-fluid">
              <form action="" id="secure-message-form">
                <div className="row">
                  <div className="col-md-5">
                    <div className="user-send-email-wrapp">
                      <div className="mdl-input-bx">
                        <label>Date</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          autoComplete="off"
                          required=""
                          placeholder="07/08/2022"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Name</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          autoComplete="off"
                          required=""
                          placeholder="Copy & paste only"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Email</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          autoComplete="off"
                          required=""
                          placeholder="Copy & paste only"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Date Of Birth</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          autoComplete="off"
                          required=""
                          placeholder="Copy & paste only"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Amount</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          autoComplete="off"
                          required=""
                          placeholder="Enter Amount"
                        />
                      </div>
                      <div className="mdl-input-bx">
                        <label>Received By (Initial Only)</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          autoComplete="off"
                          required=""
                          placeholder="Enter Initial"
                        />
                      </div>
                    </div>
                    {/* user-send-email-wrapp */}
                  </div>
                  {/* col */}
                  <div className="col-md-7">
                    <div className="drop-upload-check-wrapp h-100">
                      <div className="drop-zone">
                        <div className="drop-zone__prompt">
                          <h3>Drag &amp; Drop Files Here To Share</h3>
                          <p>
                            Upto 10 PDF or Image Files ONLY. less than 5 Mb
                            total
                          </p>
                          <div className="img">
                            <img
                              src="/asset/img/cloud-computing.png"
                              alt="Upload"
                            />
                          </div>
                        </div>
                        <input
                          type="file"
                          name="myFile"
                          className="drop-zone__input"
                        />
                      </div>
                      {/* drop-zone */}
                      <div className="input-bx input-checkbox secure-message-checkbox">
                        <input type="checkbox" defaultValue="" id="CashID" />
                        <label htmlFor="CashID">Cash</label>
                      </div>
                      <div className="input-bx input-checkbox secure-message-checkbox">
                        <input type="checkbox" defaultValue="" id="CardID" />
                        <label htmlFor="CardID">Debit/Credit Card</label>
                        <input
                          type="text"
                          className="checkText"
                          id="CardText"
                          placeholder="# Last Four Digit"
                        />
                      </div>
                      <div className="input-bx input-checkbox secure-message-checkbox">
                        <input type="checkbox" defaultValue="" id="CheckID" />
                        <label htmlFor="CheckID">Check</label>
                        <input
                          type="text"
                          className="checkText"
                          id="CheckText"
                          placeholder="# Last Four Digit"
                        />
                      </div>
                      <button
                        type="submit"
                        className="custom-btn"
                        data-toggle="modal"
                        data-target="#sentEmailModal"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                  {/* col */}
                </div>
                {/* row */}
              </form>
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
