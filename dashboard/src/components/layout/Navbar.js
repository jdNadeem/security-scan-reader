import React from 'react';
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Security Scans
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link className="dropdown-item" to="/form">Create</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link className="dropdown-item" to="/">View List</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}

export default Navbar;
