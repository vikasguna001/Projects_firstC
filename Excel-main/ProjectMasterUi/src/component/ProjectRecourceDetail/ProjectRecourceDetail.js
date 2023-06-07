import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LeftSection from '../LeftSection/LeftSection';
import  CommonService from '../../services/commonService';
import { env } from '../../env'
import axios from 'axios';
import urlConstant from '../../constants/urlConstant';

function ProjectRecourceDetail() {
    const [id, setId] = useState(0)
    const [ProjectId, SetProjectId] = useState('')
    const [RecourceId, SetRecourceId] = useState('')
    const [CreateBy, SetCreateBy] = useState('')
    const [CreateDate, SetCreateDate] = useState('')
    const [ModifiedBy, SetModifiedBy] = useState('')
    const [ModifiedDate, SetModifiedDate] = useState('')
    const [List, setList] = useState([]);

    let common = new CommonService()
    
    const SubmitHandler = async (e) => {
        
        if (id == 0) {

            const data = {
                
                ProjectId: ProjectId,
                RecourceId:RecourceId,
                CreateBy: CreateBy,
                CreateDate: CreateDate,
                ModifiedBy: ModifiedBy,
                ModifiedDate: ModifiedDate,
            }
            try {
                // const res = await axios.post(env.apiURL + 'bussinessUnit/BusinessUnit_PostData', data)
                const postProjectRecourcedata = `${urlConstant.ProjectRecourceDetail.ProjectRecourcePostData}`
                common.httpPost(postProjectRecourcedata,data).then(()=>{
                    SetProjectId('');
                    SetRecourceId('');
                    SetCreateBy('');
                    SetCreateDate('');
                    SetModifiedBy('');
                    SetModifiedDate('');
                })
            } catch (error) {
                console.log(error);
            }
           
        }
        else{
            const data = {
                ProjectId: ProjectId,
                RecourceId:RecourceId,
                CreateBy: CreateBy,
                CreateDate: CreateDate,
                ModifiedBy: ModifiedBy,
                ModifiedDate: ModifiedDate,
            }
            try {
                const postProjectRecourcedata = `${urlConstant.ProjectRecourceDetail.ProjectRecourceUpdateData}/${id}`
                common.httpPost(postProjectRecourcedata,data).then((res)=>{
                BussinssUnitgetdata()
                })
                // const res = await axios.post(env.apiURL + `bussinessUnit/BusinessUnit_UpdateData/${id}`, data)
                // console.log(res);
                setId(0)
            } catch (error) {
                console.log(error);
            }
        }
        SetProjectId('');
        SetRecourceId('');
        SetCreateBy('');
        SetCreateDate('');
        SetModifiedBy('');
        SetModifiedDate('');



    }

    function BussinssUnitgetdata() {
        // axios.get(env.apiURL + `bussinessUnit/BusinessUnit_BussinssUnitgetdata`, {})
        const getProjectRecourcedata = `${urlConstant.ProjectRecourceDetail.getProjectRecourceData}`
        common.httpGet(getProjectRecourcedata)
            .then(function (res) {
                setList(res.data.data)
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    const deletehandler = async (id) => {
        const deleteProjectRecourcedata = `${urlConstant.ProjectRecourceDetail.ProjectRecourceDeleteData}/${id}`
                common.httpDelete(deleteProjectRecourcedata).then((res)=>{
                BussinssUnitgetdata()
                })
        // axios.delete(env.apiURL + `bussinessUnit/BusinessUnit_DeleteData/${id}`, {})
        // .then((res) => {
        //     BussinssUnitgetdata()
        // })
    }

    const Edithandler = async (id) => {
        const updateProjectRecourcedata = `${urlConstant.ProjectRecourceDetail.ProjectRecourceFindData}/${id}`
        common.httpGet(updateProjectRecourcedata)
            .then((result) => {
                setId(id)
                SetProjectId(result.data.data.ProjectId)
                SetRecourceId(result.data.data.RecourceId)
                SetCreateBy(result.data.data.CreateBy)
                SetCreateDate(result.data.data.CreateDate)
                SetModifiedBy(result.data.data.ModifiedBy)
                SetModifiedDate(result.data.data.ModifiedDate)
                console.log(result);

            })
    }

    useEffect(() => {
        BussinssUnitgetdata()
    }, [])
    
    return (
        <>
            <Header />
            <LeftSection />
            {/* Update PopUP [Model] */}
            <div className="page">
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Project RecourceDetail Update</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={SubmitHandler}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">ProjectId</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={ProjectId} onChange={(e) => { SetProjectId(e.target.value) }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">RecourceId</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={RecourceId} onChange={(e) => { SetRecourceId(e.target.value) }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">CreateBy</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={CreateBy} onChange={(e) => { SetCreateBy(e.target.value) }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">CreateDate</label>
                                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={CreateDate} onChange={(e) => { SetCreateDate(e.target.value) }} />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">ModifiedBy</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={ModifiedBy} onChange={(e) => { SetModifiedBy(e.target.value) }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">ModifiedDate</label>
                                        <input type="date" class="form-control" id="exampleInputPassword1" value={ModifiedDate} onChange={(e) => { SetModifiedDate(e.target.value) }} />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">

                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type='submit'  class="btn btn-primary" data-dismiss="modal" onClick={()=>{SubmitHandler()}}>Save changes</button>

                            </div>
                        </div>
                    </div>
                </div>




                <div id="page_top" className="section-body top_dark">
                    <div className="container-fluid">
                        <div className="page-header">
                            <div className="left">
                                <a href="javascript:void(0)" className="icon menu_toggle mr-3">
                                    <i className="fa  fa-align-left" />
                                </a>
                                <h1 className="page-title">Project Recource Detail</h1>
                            </div>
                            <div className="right">
                                <div 
                                    className="notification d-flex"
                                    style={{ display: "none !important" }}
                                >                             
                                    <div className="dropdown d-flex">
                                        <a
                                            className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                                            data-toggle="dropdown"
                                        >
                                            <i className="fa fa-user" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a className="dropdown-item" href="page-profile.html">
                                                <i className="dropdown-icon fe fe-user" /> Profile
                                            </a>
                                    
                                            <a className="dropdown-item" href="login.html">
                                                <i className="dropdown-icon fe fe-log-out" /> Sign out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-md-flex justify-content-between mb-2">
                                            <ul className="nav nav-tabs b-none">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        data-toggle="tab"
                                                        href="#list"
                                                    >
                                                        <i className="fa fa-list-ul" /> ProjectRecourceDetail List
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#addnew">
                                                        <i className="fa fa-plus" /> Add New
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Clinet Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Project"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="btn btn-primary btn-block mb-1"
                                                    title=""
                                                >
                                                    Search
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="list" role="tabpanel">
                                <div className="row clearfix">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped table-vcenter mb-0 text-nowrap">
                                                    <thead>

                                                        <tr>
                                                            <th>ID</th>
                                                            <th>ProjectId</th>
                                                            <th>RecourceId</th>
                                                            <th>CreateBy</th>
                                                            <th>CreateDate</th>
                                                            <th>ModifiedBy</th>
                                                            <th>ModifiedDate</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {List.map((item, i) => {
                                                            return (<>
                                                                <tr>
                                                                    <td>{i + 1}</td>
                                                                    <td>{item.ProjectId}</td>
                                                                    <th>{item.RecourceId}</th>
                                                                    <td>{item.CreateBy}</td>
                                                                    <td>{item.CreateDate}</td>
                                                                    <td>{item.ModifiedBy}</td>
                                                                    <td>{item.ModifiedDate}</td>
                                                                    <td>
                                                                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={() => Edithandler(item._id)}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                                                                            </svg>
                                                                        </button>&nbsp;
                                                                        <button type="button" class="btn btn-danger" onClick={() => deletehandler(item._id)}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr></>
                                                            )
                                                        })}


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="addnew" role="tabpanel">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Add Client</h3>
                                                <div className="card-options ">
                                                    <a
                                                        href="#"
                                                        className="card-options-collapse"
                                                        data-toggle="card-collapse"
                                                    >
                                                        <i className="fe fe-chevron-up" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="card-options-remove"
                                                        data-toggle="card-remove"
                                                    >
                                                        <i className="fe fe-x" />
                                                    </a>
                                                </div>
                                            </div>
                                            <form className="card-body" onSubmit={SubmitHandler}>
                                                <div className="row clearfix">
                                                <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>RecourceId</label>
                                                            <input type="text" className="form-control" value={ProjectId} onChange={(e) => { SetProjectId(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>ProjectId</label>
                                                            <input type="text" className="form-control" value={RecourceId} onChange={(e) => { SetRecourceId(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>CreateBy</label>
                                                            <input type="text" className="form-control" value={CreateBy} onChange={(e) => { SetCreateBy(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <div className="form-group">
                                                            <label>CreateDate</label>
                                                            <input
                                                                data-provide="datepicker"
                                                                data-date-autoclose="true"
                                                                type="date"
                                                                className="form-control"
                                                                placeholder="Date of Birth"
                                                                value={CreateDate}
                                                                onChange={(e) => { SetCreateDate(e.target.value) }}

                                                            />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-3 col-sm-12">
                                                        <label>Gender</label>
                                                        <select className="form-control show-tick">
                                                            <option value="">-- Gender --</option>
                                                            <option value={10}>Male</option>
                                                            <option value={20}>Female</option>
                                                        </select>
                                                    </div> */}
                                                    <div className="col-md-3 col-sm-12">
                                                        <div className="form-group">
                                                            <label>ModifiedBy</label>
                                                            <input type="text" className="form-control" value={ModifiedBy} onChange={(e) => { SetModifiedBy(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <div className="form-group">
                                                            <label>ModifiedDate</label>
                                                            <input type="date" className="form-control" value={ModifiedDate} onChange={(e) => { SetModifiedDate(e.target.value) }} />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12 ">
                                                        {/* <button type="submit" className="btn btn-primary" onClick={() => { SubmitHandler() }}>
                                                            Submit
                                                        </button> */}
                                                        <input type='submit' class="btn btn-primary" value='Submit'/>

                                                        <button
                                                            type="submit"
                                                            className="btn btn-outline-secondary mx-2"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProjectRecourceDetail;