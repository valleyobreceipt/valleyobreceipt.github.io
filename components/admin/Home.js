import Header from "@/components/admin/Header";
import Link from "next/link";

export default function Home() {
  return (
    <section id="wrapper">
      <Header />

      <main className="site-main">
        <section className="user-backup-sec">
          <div className="container-fluid">
            <div className="user-backup-table-wrapp">
              <div className="user-popup-btns">
                <Link href="/admin/add-user">
                  <button className="custom-btn">Add New User</button>
                </Link>
                <Link href="/admin/backup">
                  <button className="custom-btn">Backup</button>
                </Link>
              </div>
              {/* user-popup-btns */}
              <table className="custom-table custom-admin-table">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <th>Passwords</th>
                    <th>History</th>
                    <th> Ip Address</th>
                    <th />
                    <th />
                  </tr>
                  <tr>
                    <td>brandon.banks@gmail.com</td>
                    <td>Walter@123</td>
                    <td>10 days</td>
                    <td>0.0.0.0</td>
                    <td>
                      <button className="tb-btn delete">
                        <span className="icon">
                          <img src="/asset/img/share-clock.png" alt="History" />
                        </span>
                      </button>
                    </td>
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
