import Link from "next/link";

export default function History() {
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
                <Link href="/amdin">
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
                <Link href="/admin/history" className="active">
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
                    <th className="text-center">View</th>
                    <th
                      className="text-center position-relative"
                      style={{ minWidth: 100 }}
                    >
                      <button
                        className="custom-btn popSubmit"
                        style={{
                          position: "absolute",
                          top: 5,
                          left: 0,
                          right: 0,
                          margin: "0 auto",
                          fontSize: 14,
                          padding: "10px 20px",
                          maxWidth: 130,
                        }}
                      >
                        Delete All
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>SP</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>SP</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>GU</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
                    <td>#434243</td>
                    <td>07-21-2022</td>
                    <td>$50</td>
                    <td>MG</td>
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
                      <button className="icon-btn mr-2">
                        <span>
                          <img src="/asset/img/view.png" alt="View" />
                        </span>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="tb-btn-smpl delete">
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
