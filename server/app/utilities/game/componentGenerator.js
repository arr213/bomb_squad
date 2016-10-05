const _ = require('lodash');
const componentGenerator = {};
module.exports = componentGenerator;

componentGenerator.generate = function() {
    const components = [];
    components.push(serialNumberGenerator());
    _.times(_.random(0, 3), function() {
        components.push({ type: 'battery' });
    })
    return components;
}

//Serial number can range from 000000 999999;
function serialNumberGenerator() {
    let serial = String(_.random(0, 10000));
    while (serial.length < 6) {
        serial = '0' + serial;
    }
    return {
        type: 'serialNumber',
        content: serial
    };
}
