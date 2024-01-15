const index = require('./index')

console.log('getAllNames: ' + (index.getAllNames('fr') ? JSON.stringify(index.getAllNames('fr')) : index.getAllNames('fr')))
console.log('getISObyFullName: ' + (index.getISObyFullName('Français') ? JSON.stringify(index.getISObyFullName('Français')) : index.getISObyFullName('Français')))
console.log('getISObyName: ' + (index.getISObyName('French') ? JSON.stringify(index.getISObyName('French')) : index.getISObyName('French')))
console.log('getName: ' + (index.getName('fr') ? JSON.stringify(index.getName('fr')) : index.getName('fr')))
console.log('getOriginalName: ' + (index.getOriginalName('fr') ? JSON.stringify(index.getOriginalName('fr')) : index.getOriginalName('fr')))