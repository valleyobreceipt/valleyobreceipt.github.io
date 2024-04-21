export default function Login() {
  return (
    <>
      <section id="wrapper">
        <section className="common-sec login-page-sec">
          <div className="container">
            <div className="logo-dv text-center">
              <a className="navbar-brand" href="index.php">
                <span className="site-logo">
                  <img src="/asset/img/logo.svg" alt="Logo" />
                </span>
              </a>
            </div>
            <div className="login-form-dv">
              <section className="custom-form-sec">
                <form className="icon-form" action="" method="post">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-bx">
                        <input
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
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          autoComplete="off"
                          required=""
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    {/* col */}
                  </div>
                  {/* row */}
                  <div className="submit mt-4">
                    <button type="submit" className="custom-btn round-btn">
                      Login
                    </button>
                  </div>
                </form>
              </section>
              {/* custom-form-sec */}
            </div>
            {/* login-form-dv */}
          </div>
          {/* container */}
        </section>
        {/* common-sec */}
      </section>
      {/* wrapper */}
    </>
  );
}
