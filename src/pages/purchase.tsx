import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import Layout1 from '../components/Layout/Layout1'

const Purchase: NextPage = () => {
    return (
        <Layout1>
            <div className="container-fluid">
    
                <h1 className="h3 mb-2 text-gray-800">My Purchases</h1>
    
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
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Seller</th>
                                        <th style={{width:'1rem'}}></th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Auctions</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Seller</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td><a href="#">fast.co.uk</a></td>
                                        <td>$2000</td>
                                        <td>2011/04/25</td>
                                        <td>topdeveloper0908@gmail.com</td>
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

export default Purchase