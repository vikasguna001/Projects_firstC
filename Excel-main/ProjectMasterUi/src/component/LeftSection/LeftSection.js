import React from 'react'
import { Link } from "react-router-dom";
function LeftSection() {
  return (
    <>





    <div id="left-sidebar" className="sidebar ">
      <h5 className="brand-name">
        HHG{" "}
        <a href="#" className="menu_option float-right">
          <i
            className="fa fa-bars"
            data-toggle="tooltip"
            data-placement="left"
            title="Grid & List Toggle"
          />
        </a>
      </h5>
      <nav id="left-sidebar-nav" className="sidebar-nav">
        <ul className="metismenu">
          <li className="g_heading">Project</li>
          <li>
            <Link to="/">
              <i className="fa fa-dashboard" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/BusinessUnit">
              <i className="fa fa-user" />
              <span>Business Unit</span>
            </Link>
          </li>
          <li>
            <Link to="/FunctionalGroup">
              <i className="fa fa-comments" />
              <span>Functional Group</span>
            </Link>
          </li>
          <li>
            <Link to="/Project">
              <i className="fa fa-check-square-o" />
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link to="/RecourceDetail">
              <i className="fa fa-address-book" />
              <span>Recource Detail</span>
            </Link>
          </li>
          <li>
            <Link to="/ProjectRecourceDetail">
              <i className="fa fa-calendar  " />
              <span>Project Recource</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default LeftSection;