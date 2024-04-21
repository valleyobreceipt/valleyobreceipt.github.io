import Link from "next/link";

export default function History() {
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
                  <Link href="/user">
                    <span className="txt">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/user/history" className="active">
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
          <section className="common-sec user-backup-sec">
            <div className="container-fluid">
              <div className="user-backup-table-wrapp">
                <table className="custom-table">
                  <tbody>
                    <tr>
                      <th>Receipt ID</th>
                      <th>Date</th>
                      <th>Amountt</th>
                      <th>Received By</th>
                      <th className="text-center">Download</th>
                      <th className="text-center">Action</th>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>MA</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>AM</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>Sa</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>FD</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>GF</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>GF</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>GF</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>GF</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>GF</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>GF</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#434243</td>
                      <td>07-21-2022</td>
                      <td>$50</td>
                      <td>GF</td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span className="icon">
                            <img
                              src="/asset/img/download.png"
                              alt="Download"
                              className="iconBlack"
                            />
                            <img
                              src="/asset/img/download-white.png"
                              alt="Download"
                              className="iconBlue"
                            />
                          </span>
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="icon-btn download">
                          <span>
                            <img src="/asset/img/view.png" alt="View" />
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
      {/* wrapper */}
    </>
  );
}
