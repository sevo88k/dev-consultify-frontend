import React from 'react'
import Layout from '../components/layout/Layout'
import Search from '../components/search/Search'

const ManageAdmins = () => {
  return (
    <Layout>
        <div className="main-content">

<div className="page-content">
    <div className="container-fluid">

        {/* <!-- start page title --> */}
        <div className="row">
            <div className="col-12">

                <div className="page-title-box d-sm-flex align-items-center justify-content-between">

                    <div>
                        <span className="small_text">Smart Choice Traders</span>
                        <h4 className="mb-sm-0 font-size-28">Manage Admin 
                            <span className="green-top-text">32</span>  
                        </h4>                                     
                        
                    </div>

                    <div className="page-title-right">
                        {/* <!-- App Search--> */}
                        {/* <form className="app-search d-none d-lg-block ">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative w-100">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <span className="bx bx-search"></span>
                                </div>
                            </div>

                        </form> */}
                        <Search />
                    </div>

                </div>
            </div>
        </div>
        {/* <!-- end page title --> */}
      
    </div> 
    {/* <!-- container-fluid --> */}
</div>
{/* <!-- End Page-content --> */}




</div>
    </Layout>
  )
}

export default ManageAdmins