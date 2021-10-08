
// import rp from 'request-promise';
const rp = require ('request-promise')

module.exports = () => {
    const id = "27810857"
    const type = "msg"
    const getDocument = require('../Gateways/GetDocument')
    
    console.log("In use case")
    const document = getDocument()
    console.log("Finished usecase",document)

    let result  = document.execute(id,type)
    return result
    // return { document }
};
