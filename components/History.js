"use client";

import Loading from "@/components/Loading";
import Header from "@/components/admin/Header";
import Modal from "@/components/ui/Modal";
import Pagination from "@/components/ui/Pagination";
import UserHeader from "@/components/user/Header";
import gasFetch, { useGASFetch } from "@/gasFetch";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function History({ type = "admin" }) {
  let search = useSearchParams();
  let uid = search.get("uid") || undefined;
  let page = search.get("page") || 1;
  let query = search.get("q") || "";
  let sort = search.get("sort") || "desc";

  const { data, isLoading, error, mutate } = useGASFetch(
    `/${type}/get-history`,
    {
      uid,
    }
  );

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

  let [state, setState] = useState({
    isOpen: false,
    confirmShow: false,
    isLoading: false,
    error: "",
    isSucess: false,
    title: "Are you sure you want to delete all history?",
    payload: {},
  });

  async function deleteHandler() {
    setState((state) => {
      return { ...state, isLoading: true, error: "", isSucess: false };
    });

    let response = await gasFetch("/admin/delete-history", state.payload);

    let responseJSON = await response.json();

    if (responseJSON.error) {
      setState((state) => {
        return { ...state, error: responseJSON.error, isLoading: false };
      });
      return;
    } else {
      mutate();
      setState((state) => {
        return {
          ...state,
          isOpen: false,
          isLoading: false,
          isSucess: true,
          confirmShow: false,
        };
      });
    }
  }

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
                  {uid && (
                    <h4 className="text-center">
                      <b>History of {uid}</b>
                    </h4>
                  )}
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
                                cursor: "pointer",
                                maxWidth: 130,
                              }}
                              onClick={() => {
                                setState((state) => {
                                  return {
                                    ...state,
                                    confirmShow: true,
                                    isOpen: true,
                                    payload: {
                                      uid,
                                      deleteAll: true,
                                    },
                                  };
                                });
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
                          username,
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
                                  <button
                                    onClick={() => {
                                      setState((state) => {
                                        return {
                                          ...state,
                                          confirmShow: true,
                                          isOpen: true,
                                          payload: {
                                            uid: username,
                                            id: id,
                                          },
                                          title: `Are you sure you want to delete receipt #${receiptId}${receivedBy}?`,
                                        };
                                      });
                                    }}
                                    className="tb-btn-smpl delete"
                                  >
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

        {!state.isLoading && state.confirmShow && (
          <Modal
            opened={state.isOpen}
            onClose={() => {
              setState((state) => {
                return { ...state, isOpen: false };
              });

              setTimeout(() => {
                setState((state) => {
                  return { ...state, confirmShow: false };
                });
              }, 500);
            }}
          >
            <h3 className="text-center">{state.title}</h3>

            {state.error && (
              <p className="inline-status error">{state.error}</p>
            )}

            <div className="d-flex justify-content-end mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setState((state) => {
                    return { ...state, isOpen: false };
                  });
                }}
              >
                Close
              </button>
              <button className="btn btn-danger ml-4" onClick={deleteHandler}>
                Cormfirm
              </button>
            </div>
          </Modal>
        )}

        {state.isSucess && (
          <Modal
            opened
            onClose={() => {
              setState((state) => {
                return { ...state, isSucess: false };
              });
            }}
          >
            <div className="text-center">
              <div className="img mb-4">
                <img src="/asset/img/verified.png" alt="Success" />
              </div>
              <h3 className="modal-title text-center">Successfully deleted!</h3>
            </div>
          </Modal>
        )}

        {state.isLoading && <Loading />}
      </main>
    </section>
  );
}
