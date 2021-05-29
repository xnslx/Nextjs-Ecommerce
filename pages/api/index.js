import Products from '../../models/Products';
import { connectToDatabase } from '../../util/db/db'

export default async function getProducts(req, res) {
    const client = await connectToDatabase();
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const products = await Products.find({})
                    // console.log(products)
                res.status(200).json({ products: products })
            } catch (err) {
                res.status(400).json({ message: 'Fail to fetch all the products.' })
            }
            break
        default:
            res.status(400).json({ message: 'Fail to fetch all the products' })
            break
    }
};