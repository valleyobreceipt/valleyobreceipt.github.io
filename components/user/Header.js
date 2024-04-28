"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className="site-header">
      <div className="container-fluid">
        <nav className="navbar site-navigation">
          <div className="navbar-brand">
            <Link href="/user">
              <img src="/asset/img/logo.svg" alt="Logo" />
            </Link>
          </div>
          {path.includes("/user/history") && (
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
          )}
          <ul className="navbar-nav">
            <li>
              <Link href="/user" className={path == "/user" ? "active" : ""}>
                <span className="txt">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/user/history"
                className={path.includes("/user/history") ? "active" : ""}
              >
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
  );
}
