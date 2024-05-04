"use client";

import Loading from "@/components/Loading";
import Header from "@/components/admin/Header";
import Pagination from "@/components/ui/Pagination";
import UserHeader from "@/components/user/Header";
import { useGASFetch } from "@/gasFetch";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function History({ type = "admin" }) {
  const { data, isLoading, error } = useGASFetch(`/${type}/get-history`, {});
  let search = useSearchParams();

  let page = search.get("page") || 1;
  let query = search.get("q") || "";
  let sort = search.get("sort") || "desc";
  const perPage = 50;

  let finalData_ =
    data?.filter(({ receiptId, date, amount, receivedBy, downLoadUrl, id }) => {
      // anything is find in query
      if (query === "") {
        return true;
      }

      let finalReceiptId = `#${receiptId}${receivedBy}`;

      return (
        finalReceiptId?.toLowerCase()?.includes(query.toLowerCase()) ||
        date?.toLowerCase()?.includes(query.toLowerCase()) ||
        amount?.toLowerCase()?.includes(query.toLowerCase()) ||
        receivedBy?.toLowerCase()?.includes(query.toLowerCase())
      );
    }) || null;

  if (sort === "asc" && finalData_) {
    finalData_.sort((a, b) => {
      return a.receiptId - b.receiptId;
    });
  }

  let finalData =
    finalData_?.slice((page - 1) * perPage, page * perPage) || null;

  return (
    <section id="wrapper">
      {type === "admin" ? <Header /> : <UserHeader />}

      <main className="site-main">
        <section className="common-sec user-backup-sec">
          <div className="container-fluid">
            <div className="user-backup-table-wrapp">
              {isLoading && <Loading />}

              {error && !isLoading && <p>{error}</p>}
              {finalData && (
                <>
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Receipt ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Received By</th>
                        <th className="text-center">Download</th>
                        <th className="text-center">View</th>
                        {type === "admin" && (
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
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {finalData.map(
                        ({
                          receiptId,
                          date,
                          amount,
                          receivedBy,
                          downLoadUrl,
                          id,
                        }) => {
                          return (
                            <tr key={id}>
                              <td>
                                #{receiptId}
                                {receivedBy}
                              </td>
                              <td>{date}</td>
                              <td>{amount}</td>
                              <td>{receivedBy}</td>
                              <td className="text-center">
                                <Link target="_blank" href={downLoadUrl}>
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
                                </Link>
                              </td>
                              <td className="text-center">
                                <Link
                                  target="_blank"
                                  href={`https://drive.google.com/file/d/${downLoadUrl.replace(
                                    "https://drive.google.com/uc?export=download&id=",
                                    ""
                                  )}/view`}
                                >
                                  <button className="icon-btn mr-2">
                                    <span>
                                      <img
                                        src="/asset/img/view.png"
                                        alt="View"
                                      />
                                    </span>
                                  </button>
                                </Link>
                              </td>
                              {type == "admin" && (
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
                              )}
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
