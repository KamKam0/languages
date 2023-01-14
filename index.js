exports.version = require("./package.json").version
/**
 * 
 * @param {string} iso 
 * @returns {string}
 */
exports.getName = (iso) => {
    if(!iso) return 'error ISO'
    iso = String(iso).toLowerCase()
    if(!require("./datas.json")[iso]) return 'invalid ISO'
    else return require("./datas.json")[iso].name
}
/**
 * 
 * @param {string} iso 
 * @returns {string}
 */
exports.getOriginalName = (iso) => {
    if(!iso) return 'error ISO'
    iso = String(iso).toLowerCase()
    if(!require("./datas.json")[iso]) return 'invalid ISO'
    else return require("./datas.json")[iso].nativeName
}
/**
 * 
 * @param {string} iso 
 * @returns {object}
 */
exports.getAllNames = (iso) => {
    if(!iso) return 'error ISO'
    iso = String(iso).toLowerCase()
    if(!require("./datas.json")[iso]) return 'invalid ISO'
    else return require("./datas.json")[iso]
}
/**
 * 
 * @param {string} Language 
 * @returns {object}
 */
exports.getISObyName = (Language) => {
    if(!Language) return 'error ISO'
    Language = String(Language).toLowerCase()
    let Languages = Object.entries(require("./datas.json"))
    let search = Languages.find(la => la[1].name.toLowerCase() === Language)
    if(!search) return 'invalid language'
    else return search[0]
}
/**
 * 
 * @param {string} Language 
 * @returns {object}
 */
exports.getISObyFullName = (Language) => {
    if(!Language) return 'error ISO'
    Language = String(Language).toLowerCase()
    let Languages = Object.entries(require("./datas.json"))
    let search = Languages.find(la => la[1].nativeName.toLowerCase() === Language)
    if(!search) return 'invalid language'
    else return search[0]
}