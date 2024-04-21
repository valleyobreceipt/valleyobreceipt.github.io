import Link from "next/link";

export default function Home() {
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
                <Link href="/admin" className="active">
                  <span className="txt">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/report">
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
        <section className="user-backup-sec">
          <div className="container-fluid">
            <div className="user-backup-table-wrapp">
              <div className="user-popup-btns">
                <button
                  className="custom-btn"
                  data-toggle="modal"
                  data-target="#addNewUserModal"
                >
                  Add New User
                </button>
                <button
                  className="custom-btn"
                  data-toggle="modal"
                  data-target="#backupModal"
                >
                  Backup
                </button>
              </div>
              {/* user-popup-btns */}
              <table className="custom-table custom-admin-table">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <th>Passwords</th>
                    <th>History</th>
                    <th />
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img
                            src="/asset/img/Icon-feather-trash.png"
                            alt="Trash"
                          />
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* container */}
        </section>
        {/* common-sec */}
      </main>
    </section>
  );
}
