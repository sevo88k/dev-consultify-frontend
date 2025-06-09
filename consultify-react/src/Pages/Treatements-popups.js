import React from "react";



const treatmentpopup = () => {
    return (
<>
        <div className="client_consulation">
            <div className="container">
                <form>
                    <h2>New Category</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <input className="form-control" placeholder="Category Title Here" />
                        </div>
                        <div className="submit-btn">
                            <button type="submit" class="btn mb-3">Save</button>
                        </div>
                        <div className="cancel-btn">
                            <button type="submit" class="btn mb-3">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

                    <div className="client_consulation">
            <div className="container">
                <form>
                    <h2>New Treatment</h2>
                    <div className="row">
                       <div className="col-lg-12">
                            <input className="form-control" placeholder="Treatment Name" />
                        </div>
                        <div className="col-lg-12">
                            <label for="exampleFormControlInput1" className="form-label">Give your Treatment a short description</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                             <div className="col-lg-6">
                            <input className="form-control" placeholder="£ Set a price for this treatment" />
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control" placeholder="£ Set a deposit (optional)" />
                            </div>
                            <div className="col-lg-12">
                            <button className="add_on" type="button"> <img src={require('../assets/img/plus.png')} alt='' />Add-On</button>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" class="btn mb-3">Save</button>
                        </div>
                        <div className="cancel-btn">
                            <button type="submit" class="btn mb-3">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>


               <div className="client_consulation">
            <div className="container">
                <form>
                    <h2>Create New Staff Member</h2>
                    <div className="row">
                       <div className="col-lg-12">
                            <input type="text" className="form-control" value="" placeholder="Staff Member Name" />
                        </div>
                             <div className="col-lg-12">
                            <input type="text" className="form-control" value="" placeholder="Staff Member Email" />
                        </div>
                        <div className="submit-btn">
                            <button type="submit" class="btn mb-3">Save</button>
                        </div>
                        <div className="cancel-btn">
                            <button type="submit" class="btn mb-3">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            
              <div className="client_consulation">
            <div className="container">
                <form>
                    <h2>New Treatment</h2>
                    <div className="row">
                       <div className="col-lg-12">
                            <input className="form-control" placeholder="Frown Lines Treatment" />
                        </div>
                        <div className="col-lg-12">
                      
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Our non-surgical cosmetic procedure that uses botulinum toxin injections to temporarily smooth and reduce the appearance of fine lines and wrinkles between the eyebrows and on the forehead" />
                        </div>
                             <div className="col-lg-6">
                            <input className="form-control" placeholder="£ 200.00" />
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control" placeholder="£20 deposit" />
                            </div>
                            <hr />
                                <h2 className="mt-2">Add ons</h2>
                    <div className="row">
                       <div className="col-lg-12">
                            <input className="form-control" placeholder="Add on Name" />
                        </div>
                             <div className="col-lg-6">
                            <input className="form-control" placeholder="£ 200.00" />
                        </div>
                                <div className="col-lg-6">
                                    <input className="form-control" placeholder="£ Set a price for this add on" />
                                </div>
                                </div>
                            <div className="col-lg-12">
                            <button className="add_on" type="button"> <img src={require('../assets/img/plus.png')} alt='' />Add-On</button>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" class="btn mb-3">Save</button>
                        </div>
                        <div className="cancel-btn">
                            <button type="submit" class="btn mb-3">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>

        </>

    )
}
export default treatmentpopup;