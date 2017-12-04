const mimeTypeStream = require('..')
const fs = require('fs')
const path = require('path')

fs.createReadStream(path.join(__dirname, 'addresses.ndjson'))
  .pipe(mimeTypeStream('application/x-ndjson').parser)
  // Manipulate a stream of json objects here
  .pipe(mimeTypeStream('text/csv').serializer)
  .pipe(fs.createWriteStream(path.join(__dirname, 'addresses.csv')))
