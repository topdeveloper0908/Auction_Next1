import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import Layout1 from '../components/Layout/Layout1'

const Auctions: NextPage = () => {
  return (
    <Layout1>
      <div className="container-fluid">

        <h1 className="h3 mb-2 text-gray-800">My Auctions</h1>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Auction List</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Auctions</th>
                                <th>Start Price</th>
                                <th>Bottom Price</th>
                                <th>Current Price</th>
                                <th>Sold For</th>
                                <th>Ended At</th>
                                <th>Status</th>
                                <th>Approved</th>
                                <th style={{width:'1rem'}}></th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Auctions</th>
                                <th>Start Price</th>
                                <th>Bottom Price</th>
                                <th>Current Price</th>
                                <th>Sold For</th>
                                <th>Ended At</th>
                                <th>Status</th>
                                <th>Approved</th>
                                <th></th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td><a href="#">fast.co.uk</a></td>
                                <td>$2000</td>
                                <td>$500</td>
                                <td>$1600</td>
                                <td></td>
                                <td>2011/04/25</td>
                                <td>Active</td>
                                <td>Yes</td>
                                <td>
                                    <button className="btn btn-danger btn-icon-split">
                                        <span className="icon text-white-50">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#">fast.co.uk</a></td>
                                <td>$2000</td>
                                <td>$500</td>
                                <td>$1000</td>
                                <td>$1000</td>
                                <td>2011/04/25</td>
                                <td>Completed</td>
                                <td>Yes</td>
                                <td>
                                    <button className="btn btn-danger btn-icon-split">
                                        <span className="icon text-white-50">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="#">fast.co.uk</a></td>
                                <td>$2000</td>
                                <td>$500</td>
                                <td></td>
                                <td></td>
                                <td>2011/04/25</td>
                                <td>InActive</td>
                                <td>No</td>
                                <td>
                                    <button className="btn btn-danger btn-icon-split">
                                        <span className="icon text-white-50">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        </div>
    </Layout1>
  )
}

export default Auctions