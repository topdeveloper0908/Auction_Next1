import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Layout1 from '../components/Layout/Layout1'

const NewAuction: NextPage = () => {
    return (
        <Layout1>
            <div className="container-fluid">
    
                <h1 className="h3 mb-2 text-gray-800">New Auction</h1>
    
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Create new Auction</h6>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Auction Name</label>
                                        <input type="text" className="form-control small" placeholder="Enter Auction..." aria-label="Search" aria-describedby="basic-addon2" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Currency</label>
                                        <select name='dataTable_length' aria-controls='dataTable' className='custom-select form-control form-control-sm'>
                                            <option value="dollar">$ (US Dollar)</option>
                                            <option value="pound">$ (British Pound)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Start Price</label>
                                        <input type="number" className="form-control small" placeholder="Enter Start Price..." aria-label="Search" aria-describedby="basic-addon2" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Bottom Price</label>
                                        <input type="number" className="form-control small" placeholder="Enter Bottom Price..." aria-label="Search" aria-describedby="basic-addon2" required />
                                    </div>
                                </div>
                                <div className="mx-auto">
                                    <button type="submit" className="btn btn-success btn-icon-split">
                                        <span className="icon text-white-50">
                                            <FontAwesomeIcon icon={faCheck} size='lg'/>
                                        </span>
                                        <span className="text">Create</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    
                </div>
        </Layout1>
      )
}

export default NewAuction