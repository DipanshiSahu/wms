import React, { Component } from 'react'
import $ from 'jquery';
import moment from 'moment';
import axios from 'axios';

class Taxsaving extends Component {

  constructor(props) {
    super(props);
    this.handlechange1 = this.handlechange1.bind(this);
    this.state = {
      data1: [],
      data2: [],
      data3: [],
    };
  }


  handlechange1() {
    var sel = document.getElementById("finanyear").value;
    var fromyear = sel.split('-')[0];
    var toyear = sel.split('-')[1];
    $(".loader").css("display", "block");
    $("#example1").css("display", "none");
    $.ajax({
      url: "http://localhost:3001/api/gettaxsaving",
      type: "POST",
      data: { fromyear: fromyear, toyear: toyear },
      success: function (res1) {
        console.log("res1",res1)
        this.setState({
          data1: res1.data,
          msg: res1.message
        });
        $(".loader").css("display", "none");
        $("#example1").css("display", "block");
      }.bind(this),
      error: function (jqXHR) {
        console.log(jqXHR);
      }
    });
  }

  changeApplicant = (e) => {
    console.log("hello")
    document.title = "WMS | Folio Detail"
    var sel = document.getElementById("getcalender").value;
    var mon = sel.split('-')[1];
    var yer = sel.split('-')[0];
    alert(mon)
    alert(yer)
    $.ajax({
      url: "http://localhost:3001/api/getsipstpuserwise",
      type: "GET",
      data: { month: mon, year: yer, pan: e.target.value },
      success: function (res3) {
        this.setState({
          data3: res3.data,
          msg3: res3.message
        });
      }.bind(this),
      error: function (jqXHR) {
        console.log(jqXHR);
      }
    });
  }
  componentDidMount() {
    document.title = "WMS | Folio Detail"
    var sel = document.getElementById("finanyear").value;
   
    var fromyear = sel.split('-')[0];
    var toyear = sel.split('-')[1];

    $.ajax({
      url: "http://localhost:3001/api/gettaxsaving",
      type: "POST",
      data: { fromyear: fromyear, toyear: toyear },
      success: function (res1) {
        this.setState({
          data1: res1.data,
          msg: res1.message
        });
      }.bind(this),
      error: function (jqXHR) {
        console.log(jqXHR);
      }
    });
    $.ajax({
      url: "http://localhost:3001/api/getapplicant",
      type: "GET",
      success: function (res2) {
        this.setState({ data2: res2 });
      }.bind(this),
      error: function (jqXHR) {
        console.log(jqXHR);
      }
    });
  }

  render() {
    var today = new Date();
    const values = {
      todate: today.getFullYear() + '-' + (("0" + (today.getMonth() + 1)).slice(-2)) 
    }

    return (
      <>
        <style jsx>
          {`
      .list-group-item{
        border:none!important;
      }
      .list-group-item:hover{
        border:none!important;
      }
      .normal-table .table td, .normal-table .table th {
        padding: .30rem;
      }
      .table-fix-height{
        height:500px;
      }
      `}
        </style>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>My SIP / STP</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">My SIP / STP</li>
                  </ol>
                </div>
              </div>
            </div>{/* /.container-fluid */}
          </section>

          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 offset-md-4 mt-3">
                  <div className="form-group">
                    <label>Select Month</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="far fa-calendar-alt" />
                        </span>
                      </div>
                      <div>
                      <select className="form-control" onChange={this.handlechange1}  id="finanyear" >
                                <option value="2021-2022">2021-2022</option>
                                <option value="2020-2021">2020-2021</option>
                                <option value="2019-2020">2019-2020</option> 
                                <option value="2018-2019">2018-2019</option>
                                <option value="2017-2018">2017-2018</option>
                                <option value="2016-2017">2016-2017</option>
                                <option value="2015-2016">2015-2016</option>
                                <option value="2014-2015">2014-2015</option>
                                <option value="2013-2014">2013-2014</option>
                                <option value="2012-2013">2012-2013</option>
                                <option value="2011-2012">2011-2012</option>
                                <option value="2010-2011">2010-2011</option>
                                <option value="2009-2010">2009-2010</option>
                                <option value="2008-2009">2008-2009</option>
                                <option value="2007-2008">2007-2008</option>
                                <option value="2006-2007">2006-2007</option>
                                <option value="2005-2006">2005-2006</option>
                              </select>    
                        {/* <input type="month" className="form-control" defaultValue={values.todate} style={{ height: '30px' }} id="getcalender" onChange={this.handlechange1} /> */}
                      </div>

                    </div>
                    {/* /.input group */}
                  </div>
                </div>
              </div>

              <div className="container">
                {/* Nav pills */}
                <ul className="nav nav-pills " role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" onClick={this.handlechange1} href="#home">All</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu1">Userwise</a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">

                  <div id="home" className="container tab-pane active"><br />
                    {/* /.card */}
                    <div className="card">
                      <div className="card-header">
                        {/* <h3 className="card-title">DataTable with default features</h3> */}
                      </div>
                      {/* /.card-header */}
                      <div className="container">
                        <table id="example" className="table table-bordered table-striped">
                          <thead className="bg-primary">
                            <tr>
                              <th>S. No.</th>
                              <th>Date</th>
                              <th>Folio no</th>
                              <th>Scheme</th>
                              <th>Amount</th>
                              <th>Trxn Type</th>
                            </tr>
                          </thead>
                          <tbody>



                            {this.state.data1.map((item, index) => (

                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.TRADDATE}</td>
                                <td>{item.FOLIO_NO}</td>
                                <td>{item.SCHEME}</td>
                                <td>{item.AMOUNT}</td>
                                {(item.TRXN_NATUR.match(new RegExp(`${"Systematic - To"}`))) ? (
                                  <td>STP</td>) : (item.TRXN_NATUR.match(new RegExp(`${"Systematic"}`)) && (Math.sign(item.AMOUNT) === -1)) ? (
                                    <td>SIP Reversal</td>) : (
                                  <td>SIP</td>)}
                              </tr>

                            ))}

                          </tbody>



                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  <div id="menu1" className="container tab-pane fade" ><br />
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Minimal</label>
                        <div id="getuser">
                          <select className="form-control select2" id="user" onChange={this.changeuser}>
                            <option>Select Applicant</option>
                            {this.state.data2.map((item, index) => (
                              <option value={item.PAN}>{item.INVNAME}/{item.PAN}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
export default Taxsaving;
