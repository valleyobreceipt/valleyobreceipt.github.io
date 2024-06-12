"use client";

import Link from "next/link";

import Modal from "@/components/ui/Modal";
import gasFetch from "@/gasFetch";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import "./client.css";
import "./font-awesome.min.css";

export default function Home() {
  const [state, setState] = useState({
    month: "",
    date: "",
    year: "",
    loading: false,
    error: "",
    success: false,
  });
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  async function handleSubmit(e) {
    e.preventDefault();

    setState((state) => {
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      };
    });

    if (!state.date) {
      return setState((state) => {
        return {
          ...state,
          loading: false,
          error: "Please enter Date",
        };
      });
    }

    if (!state.month) {
      return setState((state) => {
        return {
          ...state,
          loading: false,
          error: "Please enter Month",
        };
      });
    }

    if (!state.year) {
      return setState((state) => {
        return {
          ...state,
          loading: false,
          error: "Please enter Year",
        };
      });
    }

    let date = `${state.month.padStart(2, "0")}-${state.date.padStart(
      2,
      "0"
    )}-${state.year}`;

    let response = await gasFetch("/verify", {
      dob: date,
      id: id || "",
    });

    let resposneJson = await response.json();

    if (resposneJson.status) {
      return setState((state) => {
        return {
          ...state,
          loading: false,
          success: true,
        };
      });
    } else {
      return setState((state) => {
        return {
          ...state,
          loading: false,
          error: resposneJson.error.split(". (")[0],
        };
      });
    }
  }

  return (
    <>
      <section id="wrapper">
        <header className="site-header">
          <div className="container-fluid">
            <nav className="navbar site-navigation">
              <div className="navbar-brand">
                <Link href="/">
                  <img src="/asset/img/client-Valley-Logo.svg" alt="Logo" />
                </Link>
              </div>
            </nav>
          </div>
          {/* container */}
        </header>
        <main className="site-main">
          <section className="common-sec">
            <div className="container-fluid">
              <form onSubmit={handleSubmit} className="date-of-birth-fields">
                <h4 className="heading">
                  Please enter your Date of Birth to read the message
                </h4>
                <div className="dob-wrapp">
                  <div className="dob-select dob-month">
                    <select
                      value={state.month}
                      onChange={(e) => {
                        setState((state) => {
                          return {
                            ...state,
                            month: e.target.value,
                          };
                        });
                      }}
                      disabled={state.loading}
                      required
                      className="form-control"
                      id=""
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => {
                        let monthInStr = new Date(0, i).toLocaleString(
                          "default",
                          {
                            month: "short",
                          }
                        );

                        return (
                          <option key={i} value={i + 1}>
                            {monthInStr}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="dob-select dob-date">
                    <select
                      value={state.date}
                      onChange={(e) => {
                        setState((state) => {
                          return {
                            ...state,
                            date: e.target.value,
                          };
                        });
                      }}
                      disabled={state.loading}
                      required
                      className="form-control"
                      id=""
                    >
                      <option value="">Date</option>
                      {Array.from({ length: 31 }, (_, i) => {
                        return (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="dob-select dob-year">
                    <select
                      value={state.year}
                      onChange={(e) => {
                        setState((state) => {
                          return {
                            ...state,
                            year: e.target.value,
                          };
                        });
                      }}
                      disabled={state.loading}
                      required
                      className="form-control"
                      id=""
                    >
                      <option value="">Year</option>

                      {Array.from(
                        { length: new Date().getFullYear() - 1934 },
                        (_, i) => {
                          let year = new Date().getFullYear() - i;
                          return (
                            <option key={i} value={year}>
                              {year}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </div>
                <div className="input-submit">
                  <button
                    disabled={state.loading}
                    type="submit"
                    className="custom-btn"
                  >
                    {state.loading ? "Verifying..." : "Submit"}
                  </button>
                </div>
                {state.error && <p className="msg-error">{state.error}</p>}
              </form>
              {/* date-of-birth-fields */}
            </div>
            {/* container */}
          </section>
          {/* common-sec */}
        </main>
      </section>
      {/* wrapper */}

      {state.success && (
        <Modal opened hideCloseBtn>
          <div className="text-center">
            <div className="img mb-4">
              <img src="asset/img/verified.png" alt="Success" />
            </div>
            <h3 className="modal-title text-center">Thank You!</h3>
            <p>Please Check Your Email.</p>
          </div>
        </Modal>
      )}
    </>
  );
}
