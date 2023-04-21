import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCheck } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>
        <h4 className="mx-auto">Welcome To Our Store</h4>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Active Auctions</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                          </div>
                          <div className="col-auto">
                              <FontAwesomeIcon icon={faDollarSign} size='2x'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                  Completed Auctions</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">155,000</div>
                          </div>
                          <div className="col-auto">
                              <FontAwesomeIcon icon={faDollarSign} size='2x'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                  Future Auctions</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                          </div>
                          <div className="col-auto">
                            <FontAwesomeIcon icon={faDollarSign} size='2x'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Active Auctions</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="activeTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Active Auctions</th>
                        <th>Current Price</th>
                        <th>Time Out</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Active Auctions</th>
                        <th>Current Price</th>
                        <th>Time Out</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td><a href="#">Tiger Nixon</a></td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                    </tr>
                    <tr>
                        <td><a href="#">Garrett Winters</a></td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                    </tr>
                    <tr>
                        <td><a href="#">Ashton Cox</a></td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Completed Auctions</h6>
          </div>
          <div className="card-body">
              <div className="table-responsive">
                  <table className="table table-bordered" id="completeTable" width="100%" cellSpacing="0">
                      <thead>
                          <tr>
                              <th>Finished Auctions</th>
                              <th>Sold For</th>
                              <th>Ended At</th>
                              <th style={{width: '4rem'}}>Action</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr>
                              <th>Finished Auctions</th>
                              <th>Sold For</th>
                              <th>Ended At</th>
                              <th>Action</th>
                          </tr>
                      </tfoot>
                      <tbody>
                          <tr>
                              <td><a href="#">fast.co.uk</a></td>
                              <td>£500</td>
                              <td>4/20/2023</td>
                              <td>
                                  <button className="btn btn-success btn-icon-split">
                                      <span className="icon text-white-50">
                                          <FontAwesomeIcon icon={faCheck} size='lg'/>
                                      </span>
                                      <span className="text">Details</span>
                                  </button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Future Auctions</h6>
          </div>
          <div className="card-body">
              <div className="table-responsive">
                  <table className="table table-bordered" id="completeTable" width="100%" cellSpacing="0">
                      <thead>
                          <tr>
                              <th>Domain</th>
                              <th>Auction Date</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr>
                              <th>Domain</th>
                              <th>Auction Date</th>
                          </tr>
                      </tfoot>
                      <tbody>
                          <tr>
                              <td><a href="#">fast.co.uk</a></td>
                              <td>1/5/2023</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      </div>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></Script>
      <Script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js"></Script>
    </Layout>
  )
}
