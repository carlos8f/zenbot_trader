var path = require('path')

module.exports = {
  _ns: 'zenbot',
  _maps: [
    require('./core/_codemap'),
    require('./utils/_codemap')
  ],
  'trader.config': function container (get, set, clear) {
    var p = path.join(__dirname, 'config-trader-sample.js')
    return get('utils.make_config')(p)
  }
}