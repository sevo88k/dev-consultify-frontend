const Category = require("../../../models/category");
const Forum = require("../../../models/forum");
const { successResponse, errResponse } = require("../../../utils/response");

const createForum = async (req, res) => {
  try {
    const {
      title
    } = req.body;

    const forum = await Forum.create({
      title
    });


    return successResponse(res, 200, "Forum added successfully", forum);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const updateForum = async (req, res) => {
  try {
    const {
      title
    } = req.body;

    const forum = await Forum.findByIdAndUpdate(
      req.body.id,
      {
        $set: {
          title
        },
      },
      { upsert: true, new: true }
    );
    return successResponse(res, 200, 'Forum updated successfully.', forum);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getForum = async (req, res) => {
  try {
    const totalServices = await Forum.countDocuments();
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;

    const forum = await Forum.find({
      $or: [{ title: { $regex: req.query.search, $options: "i" } }],
    })
      .sort({ createdAt: -1 })
      .skip(skipIndex)
      .limit(limit);

    return successResponse(res, 200, "Forum list.", { forum, totalServices });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getForumById = async (req, res) => {
  try {
    const id = req.query.id;
    const forum = await Forum.findById(id);

    return successResponse(res, 200, "Fetched Successfully.", forum);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};


const deleteForum = async (req, res) => {
  try {
    const data = await Forum.findByIdAndDelete(req.query.id);
    return successResponse(res, 200, "Forum deleted successfully.", data);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createCategory = async (req, res) => {
  try {
    const {
      title, desc
    } = req.body;

    const forum = await Category.create({
      title,
      desc
    });


    return successResponse(res, 200, "Category added successfully", forum);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const {
      title, desc
    } = req.body;

    const forum = await Category.findByIdAndUpdate(
      req.body.id,
      {
        $set: {
          title,
          desc
        },
      },
      { upsert: true, new: true }
    );
    return successResponse(res, 200, 'Category updated successfully.', forum);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getCategory = async (req, res) => {
  try {
    const totalCategory = await Category.countDocuments();
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;

    const category = await Category.find({
      $or: [{ title: { $regex: req.query.search, $options: "i" } }],
    })
      .sort({ title: 1, createdAt: -1 })
      .skip(skipIndex)
      .limit(limit);

    return successResponse(res, 200, "Category list.", { category, totalCategory });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.query.id;
    const forum = await Category.findById(id);

    return successResponse(res, 200, "Fetched Successfully.", forum);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};


const deleteCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.query.id);
    return successResponse(res, 200, "Category deleted successfully.", data);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};


module.exports = {
  createForum,
  updateForum,
  getForum,
  getForumById,
  deleteForum,
  createCategory,
  updateCategory,
  getCategory,
  getCategoryById,
  deleteCategory
}