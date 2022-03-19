import products from '../models/products'
const products = [
    {id: 1, name: "Sản phẩm 1"},
    {id: 2, name: "Sản phẩm 2"}
]
export const listProduct = (request,response) => {
    // response.json(products);
}
export const listProductDetail = (request,response) => {
    try{

    }catch(error){
        response
    }
    //  const product = products.at(item => item.id === +request.params.id)
    // response.json(product)
}
export const creatProduct  = (request,response) => {
    try {
        const product = product(request.body).save()
        response.json(product)
    }catch (error) {
        response.status(400).json({message:"khong the them san pham"})

    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteProduct  = (request,response) => {
    // const product =  products.filter(item => item.id != +request.params.id);
    // response.json(product)
}
export const updateProduct = (request,response) => {
    // response.json(products.map(item => item.id === +request.params.id ? request.body : item))
}