exports.version = require("./package.json").version
exports.getName = (iso) => {
    if(!iso) return 'error ISO'
    iso = String(iso).toLowerCase()
    if(!require("./datas.json")[iso]) return 'invalid ISO'
    else return require("./datas.json")[iso].name
}
exports.getOriginalName = (iso) => {
    if(!iso) return 'error ISO'
    iso = String(iso).toLowerCase()
    if(!require("./datas.json")[iso]) return 'invalid ISO'
    else return require("./datas.json")[iso].nativeName
}
exports.getAllNames = (iso) => {
    if(!iso) return 'error ISO'
    iso = String(iso).toLowerCase()
    if(!require("./datas.json")[iso]) return 'invalid ISO'
    else return require("./datas.json")[iso]
}
exports.getISObyName = (Language) => {
    if(!Language) return 'error ISO'
    Language = String(Language).toLowerCase()
    let Languages = Object.entries(require("./datas.json"))
    let search = Languages.find(la => la[1].name.toLowerCase() === Language)
    if(!search) return 'invalid language'
    else return search[0]
}
exports.getISObyFullName = (Language) => {
    if(!Language) return 'error ISO'
    Language = String(Language).toLowerCase()
    let Languages = Object.entries(require("./datas.json"))
    let search = Languages.find(la => la[1].nativeName.toLowerCase() === Language)
    if(!search) return 'invalid language'
    else return search[0]
}