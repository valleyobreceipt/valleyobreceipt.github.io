"use client";

import Header from "@/components/admin/Header";
import gasFetch from "@/gasFetch";
import { useState } from "react";

export default function Report() {
  const [state, setState] = useState({
    startDate: "",
    endDate: "",
    isLoading: false,
    error: "",
    success: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState((state) => {
      return { ...state, isLoading: true, error: "", success: "" };
    });

    try {
      if (!state.startDate) {
        throw new Error("Start Date is required!");
      }

      if (!state.endDate) {
        throw new Error("End Date is required!");
      }

      if (
        !/^(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])\-\d{4}$/.test(
          state.startDate
        )
      ) {
        throw new Error("Invalid Start Date. It should be MM-DD-YYYY");
      }

      if (
        !/^(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])\-\d{4}$/.test(
          state.endDate
        )
      ) {
        throw new Error("Invalid End Date. It should be MM-DD-YYYY");
      }

      if (new Date(state.startDate) > new Date(state.endDate)) {
        throw new Error("Start Date must be less then or equal End Date.");
      }

      let response = await gasFetch("/admin/export-report", {
        startDate: state.startDate,
        endDate: state.endDate,
      });

      let responseJSON = await response.json();

      if (responseJSON.status) {
        // Create a blob from the data csv
        let blob = new Blob([responseJSON.data], {
          type: "text/csv",
        });

        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = `report_${state.startDate}_${state.endDate}.csv`;
        a.click();

        setState((state) => {
          return {
            ...state,
            isLoading: false,
            success: "Report exported successfully",
            startDate: "",
            endDate: "",
          };
        });
      } else {
        setState((state) => {
          return {
            ...state,
            isLoading: false,
            error: responseJSON.error,
          };
        });
      }
    } catch (err) {
      setState((state) => {
        return {
          ...state,
          isLoading: false,
          error: err.message ?? err,
        };
      });
    }
  };

  return (
    <section id="wrapper">
      <Header />

      <main className="site-main">
        <section id="wrapper">
          <section className="common-sec login-page-sec">
            <div className="container">
              <form onSubmit={handleSubmit} className="analysis-wrapp mx-auto">
                <div className="mdl-input-bx">
                  <label>Start Date</label>
                  <input
                    type="text"
                    value={state.startDate}
                    onChange={(e) =>
                      setState({ ...state, startDate: e.target.value })
                    }
                    className="form-control"
                    autoComplete="off"
                    required
                    disabled={state.isLoading}
                    placeholder="Enter Start Date"
                  />
                </div>
                <div className="mdl-input-bx">
                  <label>End Date</label>
                  <input
                    type="text"
                    value={state.endDate}
                    onChange={(e) =>
                      setState({ ...state, endDate: e.target.value })
                    }
                    className="form-control"
                    autoComplete="off"
                    required
                    disabled={state.isLoading}
                    placeholder="Enter End Date"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.isLoading}
                  className="custom-btn w-100 text-uppercase"
                >
                  {state.isLoading ? "Loading..." : "Export Report"}
                </button>
                {state.error && (
                  <div className="alert alert-danger mt-3">{state.error}</div>
                )}
                {state.success && (
                  <div className="alert alert-success mt-3">
                    {state.success}
                  </div>
                )}
              </form>
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
