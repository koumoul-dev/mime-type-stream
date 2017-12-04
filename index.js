const ndjson = require('ndjson')
const JSONStream = require('JSONStream')
const csvParse = require('csv-parse')
const csvStringify = require('csv-stringify')

const types =   {
  'text/csv': {
    parser: () => csvParse({columns: true}),
    serializer: () => csvStringify({ header: true})
  },
  'application/json': {
    parser: () => JSONStream.parse('*'),
    serializer: JSONStream.stringify
  },
  'application/x-ndjson': {
    parser: ndjson.parse,
    serializer: ndjson.serialize
  }
}

module.exports = function(mimeType){
  return types[mimeType]
}
