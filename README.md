# Streaming parser + serializer for various mime-types
This is mainly a meta package compiling various parsers and serializers to work with a stream of JSON objects.

Support the following mime types :
 * [text/csv](https://tools.ietf.org/html/rfc4180)
 * [application/json](https://tools.ietf.org/html/rfc4627)
 * [application/x-ndjson](http://ndjson.org/)


## Usage
Install with npm :
```
npm install --save mime-type-stream
```

```
const mimeTypeStream = require('mime-type-stream')
const fs = require('fs')

fs.createReadStream('/path/to/file.ndjson')
  .pipe(mimeTypeStream('application/x-ndjson').parser())
  // Manipulate a stream of JSON objects here
  .pipe(mimeTypeStream('text/csv').serializer())
  .pipe(fs.createWriteStream('/path/to/file.csv'))
```
