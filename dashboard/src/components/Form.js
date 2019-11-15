import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            file: "",
            name: "",
            status: "",
            display: "none",
            displayFileAlert: "none",
            success: "none"
        }
    }

    setAlert(name) {
        if(name === "name") {
            setTimeout(() => {
                this.setState({ display: "block" });
            },0);
            setTimeout(() => {
                this.setState({ display: "none" });
            },1000);
        }
        if(name === "file") {
            setTimeout(() => {
                this.setState({ displayFileAlert: "block" });
            },0);
            setTimeout(() => {
                this.setState({ displayFileAlert: "none" });
            },1000);
        }
        if(name === "success") {
            setTimeout(() => {
                this.setState({ success: "block" });
            },0);
            setTimeout(() => {
                this.setState({ success: "none" });
            },1500);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.name === "") {
            this.setAlert("name");
        }
        if(this.state.file === "") {
            this.setAlert("file");
        }
        if(this.state.name !== "" && this.state.file !== "") {
            let reader = new FileReader();
            reader.onload =  e => {
                Axios.post('http://localhost:5000/scan', {
                    name: this.state.name,
                    status: this.state.status === "" ? "Queued" : this.state.status,
                    file: JSON.parse(e.target.result)
                })
                .then((response) => {
                    this.setAlert("success");
                    this.setState({ 
                        name: ""
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            };
            reader.readAsText(this.state.file);
        }
    }

    render() {
        return (
            <Fragment>
                <h1 className="text-center mt-5"> New Security Scan </h1>
                <div className="row justify-content-center mt-5">
                    <form>
                        <div className="alert alert-success" role="alert" style={{
                            display: this.state.success
                        }}>
                            Successfully Submitted
                        </div>
                        <div className="alert alert-danger" role="alert" style={{
                            display: this.state.display
                        }}>
                            Name Cannot Be Empty
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Repository Name</label>
                                <input type="text" className="form-control" value={this.state.name}placeholder="Repo Name" onChange={(e) => this.setState({ name: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Status</label>
                                <select className="form-control" onChange={(e) => this.setState({status: e.target.value})}>
                                    <option>Queued</option>
                                    <option>In Progress</option>
                                    <option>Success</option>
                                    <option>Failure</option>
                                </select>
                            </div>
                        </div>
                        <div className="alert alert-danger" role="alert" style={{
                            display: this.state.displayFileAlert
                        }}>
                            Please Select A File
                        </div>
                        <div className="input-group my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" accept=".json" className="custom-file-input" aria-describedby="inputGroupFileAddon01" onChange={(e) => this.setState({file: e.target.files[0]})}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default Form;
