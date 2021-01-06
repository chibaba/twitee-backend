const Router = require('express').Router()
const { deleteImages, uploadImages } = require('../controller/picture')

// Remove uploaded images
Router.delete('/:image', deleteImages)

// Upload images
Router.post('/upload', uploadImages)

module.exports = Router