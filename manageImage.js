const sharp = require('sharp')
const image = sharp('./public/images/jogging.jpg')

image.jpeg({ progressive: true, quality: 90 }).toFile('./public/images/progressive-jogging.jpg')
