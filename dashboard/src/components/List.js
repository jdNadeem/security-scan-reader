import React,{ Component, Fragment }from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";

class List extends Component {
    constructor() {
        super();
        this.state = {
            scans: [],
            errors: ""
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/')
        .then(response => {
            this.setState({ scans: response.data });
        })
        .catch(err => {
            err && this.setState({ errors: " Error Occured While Fetching Data "});
        });
    }
    
    render() {
        const { errors, scans } = this.state;
        return (
            errors ? <h1 className="text-center my-4">{errors}</h1> :
            <Fragment>
                {scans.length === 0 ? <h1 className="text-center my-4">Security Scans List Is Empty</h1> :
                    <>
                        <h1 className="text-center mt-5">Security Scans</h1>
                        <table className="table table-striped table-bordered my-4">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Repo Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Time Stamp</th>
                                    <th scope="col">Findings</th>
                                    <th scope="col">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scans.map((scan,index) => {
                                    return (
                                        <tr key={scan._id}>
                                            <th scope="row">{index+1}</th>
                                            <td>{scan.name}</td>
                                            <td>{scan.status}</td>
                                            <td>
                                                {String(scan.status) === "Queued" && scan.QueuedAt}
                                                {String(scan.status) === "In Progress" && scan.ScanningAt}
                                                {(String(scan.status) === "Success" || String(scan.status) === "Failure") && scan.FinishedAt}
                                            </td>
                                            <td>
                                                <h3>
                                                    <span className="badge badge-dark">{scan.file === undefined ?0 : scan.file.findings.length}</span>
                                                </h3>
                                            </td>
                                            <td>
                                                <Link to={`/scan/${scan._id}`}>
                                                    <button className="btn btn-dark btn-sm">
                                                        View
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                }
            </Fragment>
        );
    }
}

export default List;
