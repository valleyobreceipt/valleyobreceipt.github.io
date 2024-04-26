"use client";

import Header from "@/components/admin/Header";
import { useGASFetch } from "@/gasFetch";
import Link from "next/link";

export default function Home() {
  const { data, isLoading, error } = useGASFetch("/admin/get-users", {});
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

              {isLoading && <p>Loading...</p>}

              {error && !isLoading && <p>{error}</p>}

              {data && (
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
                    {data.map(({ email, password, history, ip, id }, i) => {
                      return (
                        <tr key={i}>
                          <td>{email}</td>
                          <td>{password}</td>
                          <td>{history} days</td>
                          <td>
                            {ip.split("\n").map((v, i) => {
                              return <p key={i}>{v}</p>;
                            })}
                          </td>
                          <td>
                            <Link href={`/admin/history/${id}`}>
                              <button className="tb-btn delete">
                                <span className="icon">
                                  <img
                                    src="/asset/img/share-clock.png"
                                    alt="History"
                                  />
                                </span>
                              </button>
                            </Link>
                          </td>
                          <td>
                            <Link href={`/admin/delete-user/${id}`}>
                              <button className="tb-btn delete">
                                <span className="icon">
                                  <img
                                    src="/asset/img/Icon-feather-trash.png"
                                    alt="Trash"
                                  />
                                </span>
                              </button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          {/* container */}
        </section>
        {/* common-sec */}
      </main>
    </section>
  );
}
