const { Savepostcare, poastcarelist, poastcaredetails, Savepostcareadmin, poastcarelistAdmin, poastcaredetailsAdmin, poastcaredeleteAdmin, sendemailtocustomer } = require("../../Services/PostCareservice");
const { Successmessage } = require("../../utils/Customerresponse");
const { errResponse } = require("../../utils/response");
const SentEmail = require('../../models/SentEmail');
const ClickEvent = require('../../models/ClickEvent');
module.exports = {
    Savepostcare: async (req, res) => {
        try {


            req.body.salon_id = req.user._id;
            var information = await Savepostcare(req.body);
            

            return Successmessage(res, 'Post-care  has been successfully save', information)
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },
    getpostcarelist: async (req, res) => {
        try {
            req.body.salon_id = req.user._id;
            let emaillist = await poastcarelist(req.body);

            return Successmessage(res, 'Post-care list', emaillist)

        } catch (error) {
            console.log(error)
            return errResponse(res, 500, error);
        }
    },

    sendtocustomer: async (req, res) => {
        try {

            console.log(req.user._id, "check authorizATION");

            var emaillist = await sendemailtocustomer(req.body, req.user);

            return Successmessage(res, 'Post-care list', emaillist)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    emailsentdetails: async (req, res) => {
        try {
            console.log(req.user._id, "auth check");

            var userId = req.user._id; // Assuming the token contains the user ID
            var filterRecentlyUpdated = req.body.filter_recentlyupdated || 'recent'; // Default to 'recent' if no filter_recentlyupdated is provided
            var searchName = req.body.searchname; // Extract search name from request body

            // Extract from and to dates from the request body
            var fromDate = req.body.fromDate;
            var toDate = req.body.toDate;

            console.log(`Filtering from: ${fromDate} to: ${toDate}`);

            let sortOrder;
            if (filterRecentlyUpdated === 'recent') {
                sortOrder = { createdAt: -1 }; // Most recent sent
            } else if (filterRecentlyUpdated === 'oldest') {
                sortOrder = { createdAt: 1 }; // Oldest sent
            } else if (filterRecentlyUpdated === 'acknowledge') {
                sortOrder = { status: 1 }; // Sort by status 1
            } else {
                sortOrder = {}; // Default to no specific sorting if filterRecentlyUpdated is not recognized
            }

            // Construct the base query
            let query = SentEmail.find({ salon_id: userId })
                .populate('customer_id')
                .populate('salon_id')
                .populate('precare_id');

            // Apply sorting if specified
            if (Object.keys(sortOrder).length > 0) {
                query = query.sort(sortOrder);
            }

            // Parse fromDate and toDate to Date objects and add date range filter if provided
            if (fromDate && toDate) {
                let fromDateObj = new Date(fromDate);
                let toDateObj = new Date(toDate);

                // Ensure toDate covers the entire day
                toDateObj.setHours(23, 59, 59, 999);

                // Add date range filter
                query = query.where('createdAt').gte(fromDateObj).lte(toDateObj);
            }

            // Add status filter if filterRecentlyUpdated is 'pending' or 'acknowledge'
            if (filterRecentlyUpdated === 'pending') {
                query = query.where('status', 0);
            } else if (filterRecentlyUpdated === 'acknowledge') {
                query = query.where('status', 1);
            }

            // Add search filter based on customer first name (case-insensitive regex search)
            // if (searchName) {
            //     console.log(`Searching for customers with first name containing: ${searchName}`);
            //     query = query.where('customer_id.first_name', new RegExp(searchName, 'i'));

            //     // Check if data exists with the given searchName
            //     let count = await SentEmail.countDocuments({ salon_id: userId, });

            //     // console.log(count.customer_id);return
            //     if (count) {
            //         console.log(`Found  records with first name containing '${searchName}'`);
            //     } else {
            //         console.log(`No records found with first name containing '${searchName}'`);
            //     }
            // }

            // Add filter based on 'recently_updated' key if provided
            if (filterRecentlyUpdated === "recentlydata") {
                query = query.sort({ recently_updated: -1 });
            }

            // Execute the query
            let datasent = await query.exec();
            console.log(`Found ${datasent.length} records`);

            // Sort the data manually if filter_recentlyupdated is "recentlydata"
            if (filterRecentlyUpdated === "recentlydata") {
                datasent.sort((a, b) => {
                    let aDate = new Date(a.recently_updated);
                    let bDate = new Date(b.recently_updated);
                    let aCreated = new Date(a.createdAt);
                    let bCreated = new Date(b.createdAt);

                    if (aDate.getTime() === bDate.getTime()) {
                        return bCreated - aCreated; // Sort by createdAt within the same 'recently_updated' date
                    }
                    return bDate - aDate; // Sort by 'recently_updated'
                });
            }

            // Return success response with filtered and sorted data
            return Successmessage(res, 'Email sent details', datasent);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

   
    getpoastcaredetails: async (req, res) => {
        try {


            var details = await poastcaredetails(req.body);

            return Successmessage(res, 'Post-care details', details)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },



    //For admin

    SavepostcareAdmin: async (req, res) => {
        try {

            console.log(req.body)
            req.body.admin_id = req.identity._id;
            var information = await Savepostcareadmin(req.body);

            return Successmessage(res, 'Post-care  has been successfully save', information)
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },
    getpostcarelistAdmin: async (req, res) => {
        try {
            req.body.admin_id = req.identity._id;

            var postcarelist = await poastcarelistAdmin(req.body);

            return Successmessage(res, 'Post-care list', postcarelist)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },
    getpoastcaredetailsAdmin: async (req, res) => {
        try {


            var details = await poastcaredetailsAdmin(req.body);

            return Successmessage(res, 'Post-care details', details)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },
    poastcaredeleteByAdmin: async (req, res) => {
        try {


            var details = await poastcaredeleteAdmin(req.body);

            return Successmessage(res, 'Post-care Dleted', details)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },


}