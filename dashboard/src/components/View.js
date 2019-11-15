import React, { Component, Fragment } from 'react';
import Axios from "axios";

class View extends Component {
    constructor() {
        super();
        this.state = {
            scan: {},
            errors: ""
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:5000/scan/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ scan: response.data });
        })
        .catch(err => {
            err && this.setState({ errors: " Error Occured While Fetching Data "});
        });
    }

    render() {
        const { scan, errors } = this.state;
        return (
            errors ? <h1 className="text-center my-4">{errors}</h1> : 
            <Fragment>
                <h1 className="text-center mt-5">Findings</h1>
                <table className="table table-striped table-bordered my-4">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">RuleId</th>
                            <th scope="col">Description</th>
                            <th scope="col">Severity</th>
                            <th scope="col">Path Name</th>
                            <th scope="col">Line Of Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scan.file === undefined ? ( 
                        <tr> 
                            <th>Fetching</th> 
                            <td>No Data Found</td>
                        </tr>) : (
                            scan.file.findings.map(item => {
                            return (
                                <tr key={item.ruleId}>
                                    <th scope="row">{item.ruleId}</th>
                                    <td>{item.metadata.description}</td>
                                    <td>{item.metadata.severity}</td>
                                    <td>{item.location.path}</td>
                                    <td>{item.location.positions.begin.line}</td>
                                </tr>
                            );
                        }))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default View;
