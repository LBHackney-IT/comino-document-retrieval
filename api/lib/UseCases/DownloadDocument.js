

const downloadDocument = () => {

    const id = "27810857"
    const type = "msg"
    console.log("In use case")
    import getDocument from "../Gateways/GetDocument";
    console.log("In use case2")
    const document = getDocument(id, type);
    console.log("Finished usecase")
    return { document }
}
export default downloadDocument


// export default options => {
//     const id = "27810857"
//     const type = "msg"


//     console.log("In use case")
//     const document = getDocument(id, type);
//     console.log("Finished usecase")
//     return { document }
// }