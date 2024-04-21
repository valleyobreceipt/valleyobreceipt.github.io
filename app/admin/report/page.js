import Link from "next/link";

export default function Report() {
  return (
    <section id="wrapper">
      <header className="site-header">
        <div className="container-fluid">
          <nav className="navbar site-navigation">
            <div className="navbar-brand">
              <Link href="/admin">
                <img src="/asset/img/logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="search-dv">
              <form action="" id="search_form">
                <button type="submit">
                  <img src="/asset/img/search-icon.png" alt="Search" />
                </button>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </form>
              <span className="ic-dv arrow-ic">
                <a href="#">
                  <img src="/asset/img/up-dwn-arr.png" alt="Icon" />
                </a>
              </span>
            </div>
            <ul className="navbar-nav">
              <li>
                <Link href="/admin">
                  <span className="txt">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/report" className="active">
                  <span className="icon">
                    <img
                      src="/asset/img/report.png"
                      alt="Report"
                      className="iconBlack"
                    />
                    <img
                      src="/asset/img/report-white.png"
                      alt="Report"
                      className="iconBlue"
                    />
                  </span>
                  <span className="txt">Report</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/history">
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
                <Link href="/admin/logout">
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
        <section id="wrapper">
          <section className="common-sec login-page-sec">
            <div className="container">
              <div className="analysis-wrapp mx-auto">
                <div className="mdl-input-bx">
                  <label>Date 1</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    autoComplete="off"
                    required=""
                    placeholder="Enter Date"
                  />
                </div>
                <div className="mdl-input-bx">
                  <label>Date 2</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    autoComplete="off"
                    required=""
                    placeholder="Enter Date"
                  />
                </div>
                <button
                  type="submit"
                  className="custom-btn w-100 text-uppercase"
                >
                  Send
                </button>
              </div>
              {/* analysis-wrapp */}
            </div>
            {/* container */}
          </section>
          {/* common-sec */}
        </section>
        {/* wrapper */}
      </main>
    </section>
  );
}
