import React from 'react'

const Subscriptions = () => {
  return (
    <div className="row">
                        <div className="col-xl-12">
                            <div className="tbl_user_info">

                                <div className="card">
                                    <div className="card-body custom-card-height">

                                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                                            <h4 className="title_text">Invoices</h4>                                                
                                        </div>
        
        
                                       <div className="table-responsive">
                                        <table className="table  vehicles_table  w-100 small-table-font">
                                            <thead>
                                            <tr>                                                    
                                                <th>Date</th>
                                                {/* <!-- <th>Time</th>
                                                <th>Tradesperson</th>
                                                <th>Category</th>    
                                                <th>Location</th>   
                                                <th></th>                                                --> */}
                                            </tr>
                                            </thead>
        
        
                                            <tbody className="td_color">
                                            <tr valign="middle">                                                    
                                                {/* <!-- <td>12/12/2023</td>
                                                <td>12:35pm</td>
                                                <td><a href="#" className="blue_text">James Pearlman LTD</a></td>
                                                <td>Plasterers</td> 
                                                <td>SW6, London</td>     
                                                <td><a href="#" className="blue_text">View</a></td>                                              --> */}
                                            </tr>    
                                                             
                                            </tbody>
                                        </table>
                                       </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Subscriptions