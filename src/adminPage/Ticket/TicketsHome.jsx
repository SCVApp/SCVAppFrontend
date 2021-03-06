import React, { Component } from "react";
import "./ticket.css";
import "./ticket1.css";
import { Link } from "react-router-dom";
import SidebarTicket from "./sidebarTicket";

export function TicketsHome({ children, refreshTickets, isLoading }) {
  async function refreshTicketsFromMail() {
    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin/ticket/mail`,
      {
        mode: "cors",
        credentials: "include",
        method: "GET",
      }
    );
    if (res.status === 200) {
      refreshTickets();
    }
  }

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          Ticket sistem - ŠCVApp
        </a>
        <script src="uikit/dist/js/uikit-icons.min.js"></script>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100 rounded-0 border-0"
          type="text"
          placeholder="Išči"
          aria-label="Search"
        ></input>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link className="nav-link px-3" to={"/admin"}>
              Nazaj
            </Link>
          </div>
        </div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </header>
      <div>
        <div className="container-fluid">
          <div className="row">
            <SidebarTicket />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={refreshTicketsFromMail}
                    >
                      Osveži iz pošte
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                  >
                    <span
                      data-feather="calendar"
                      className="align-text-bottom"
                    ></span>
                    This week
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                {!isLoading ? (
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Zap. število</th>
                        <th scope="col">Naslov</th>
                        <th scope="col">Zadeva</th>
                        <th scope="col">Pošiljatelj</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody className="ticket-table-tickets">{children}</tbody>
                  </table>
                ) : (
                  children
                )}
              </div>
            </main>
          </div>
        </div>
        {/* <script src="../assets/dist/js/bootstrap.bundle.min.js"></script> */}
      </div>
    </>
  );
}
