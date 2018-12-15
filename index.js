const fs = require('fs');
const filename = '/tmp/app-initialized';

fs.closeSync(fs.openSync(filename, 'w'));