"use client";

import gasFetch from "@/gasFetch";
import CustomPassWordInput from "@/lib/custom-password";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm({ type = "admin" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    if (!username) {
      setError("Username is required");
      setLoading(false);
      return;
    }

    if (!password) {
      setError("Password is required");
      setLoading(false);
      return;
    }

    try {
      let response = await gasFetch(`/${type}/login`, {
        username,
        password,
      });

      let data = await response.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      if (data.data) {
        localStorage.setItem(
          "tokenInfo",
          JSON.stringify({
            token: data.token,
            expire: new Date().getTime() + 1000 * 60 * 60 * 6,
          })
        );
      }
    } catch (error) {
      setError("An error occurred. Please try again");
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleLogin} className="icon-form">
      <div className="row">
        <div className="col-sm-12">
          <div className="input-bx">
            <input
              value={username}
              disabled={loading}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              className="form-control"
              autoComplete="off"
              required=""
              placeholder="Username"
            />
          </div>
        </div>
        {/* col */}
      </div>
      {/* row */}
      <div className="row">
        <div className="col-sm-12">
          <div className="input-bx pass-bx">
            <CustomPassWordInput
              disabled={loading}
              onChange={(e) => setPassword(e)}
              name="password"
              id="password"
              className="form-control"
              autoComplete="off"
              required=""
              placeholder="Password"
            />
          </div>
          {type === "admin" && (
            <div className="text-right my-1">
              <Link href="/admin/forgetPassword">Forgot Password</Link>
            </div>
          )}
        </div>
        {/* col */}
      </div>
      {/* row */}
      <div className="submit mt-4">
        <button
          disabled={loading}
          type="submit"
          className="custom-btn round-btn"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
