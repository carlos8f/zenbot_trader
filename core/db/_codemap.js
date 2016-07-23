module.exports = {
  _ns: 'motley',
  _folder: 'db',
  'trades': require('./trades'),
  'collections[]': [
    '#db.trades'
  ]
}