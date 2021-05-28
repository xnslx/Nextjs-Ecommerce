import { connectToDatabase } from '../../util/db/db'
import Products from '../../models/Products'

async function handler(req, res) {
    const {
        query: { productId },
        method
    } = req

    const client = await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const product = await Products.findById(productId)
                if (!product) {
                    return res.status(400).json({ message: 'Cannot load the product that you are browsing.' })
                }
                res.status(200).json({ product: product })
            } catch (err) {
                console.log(err)
                res.status(400).json({ message: 'Something went wrong.' })
            }
            break
        default:
            res.status(400).json({ message: 'Something went wrong.' })
            break
    }
};

export default handler;