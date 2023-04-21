import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWindowClose } from '@fortawesome/free-solid-svg-icons'

import Layout1 from '../components/Layout/Layout1'

const Profile: NextPage = () => {
    return (
        <Layout1>
            <div className="container-fluid">
    
                <h1 className="h3 mb-2 text-gray-800">My Profile</h1>
    
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Edit Profile</h6>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Name</label>
                                        <input type="text" className="form-control small" aria-label="Search" aria-describedby="basic-addon2" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Email</label>
                                        <input type="password" className="form-control small" aria-label="Search" aria-describedby="basic-addon2" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Password</label>
                                        <input type="password" className="form-control small" aria-label="Search" aria-describedby="basic-addon2" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group align-items-center mb-4">
                                        <label className="mb-0 mr-2">Password * </label>
                                        <input type="password" className="form-control small" aria-label="Search" aria-describedby="basic-addon2" required />
                                    </div>
                                </div>
                                <div className="mx-auto">
                                    <button type="submit" className="btn btn-success btn-icon-split mx-2">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-check"></i>
                                            <FontAwesomeIcon icon={faCheck} size='lg' />
                                        </span>
                                        <span className="text">Save</span>
                                    </button>
                                    <button type="button" className="btn btn-danger btn-icon-split mx-2">
                                        <span className="icon text-white-50">
                                            <FontAwesomeIcon icon={faWindowClose} size='lg' />
                                        </span>
                                        <span className="text">Cancel</span>
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

export default Profile