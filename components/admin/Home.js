"use client";

import Loading from "@/components/Loading";
import Header from "@/components/admin/Header";
import { useGASFetch } from "@/gasFetch";
import Link from "next/link";

import Pagination from "@/components/ui/Pagination";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const { data, isLoading, error } = useGASFetch("/admin/get-users", {});

  let search = useSearchParams();

  let page = search.get("page") || 1;
  let query = search.get("q") || "";
  let sort = search.get("sort") || "desc";
  const perPage = 50;

  let finalData_ =
    data?.filter(({ email, password, history, ip, id }) => {
      // anything is find in query
      if (query === "") {
        return true;
      }

      return email?.toLowerCase()?.includes(query.toLowerCase());
    }) || null;

  if (sort === "asc" && finalData_) {
    finalData_.sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
  }

  let finalData =
    finalData_?.slice((page - 1) * perPage, page * perPage) || null;

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

              {isLoading && <Loading />}

              {error && !isLoading && <p>{error}</p>}

              {finalData && (
                <>
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
                      {finalData.map(
                        ({ email, password, history, ip, id }, i) => {
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
                                <Link href={`/admin/history/?uid=${id}`}>
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
                                <Link href={`/admin/delete-user/?uid=${id}`}>
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
                        }
                      )}
                    </tbody>
                  </table>

                  <Pagination
                    totalEntries={finalData.length}
                    currentPage={page}
                    perPage={perPage}
                  />
                </>
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
