var fs = require("fs")
var template = require(`${__dirname}/src/config/template.json`)
var locales = require(`${__dirname}/src/config/locales.json`)
var mockup = require("etty-mockup").default

locales.forEach(locale => {
    var path = `${__dirname}/static/translations/${locale}.json`
    var prefill = {}
    try {
        prefill = require(path)
    } catch (e) {}
    var translate = mockup(template, locale, prefill)
    // fs.writeFile(path, JSON.stringify(translate, null, 2), (err, data) => {
    //     if (err)
    //         console.log(`Failed to write ${locale}.json`, err)
    //     else
    //         console.log(`Successfully created ${locale}.json`)
    // })
    fs.writeFileSync(path, JSON.stringify(translate, null, 2))
    console.log(`Successfully wrote ${locale}.json`)
})