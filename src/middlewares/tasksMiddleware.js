/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined) {
        return res.status(400).json({ message: 'The field "title" is require' });
    }
    if (body.title == '') {
        return res.status(400).json({ message: 'title cannot be empty' });
    }
   next();
};

module.exports = {
    validateBody,
};