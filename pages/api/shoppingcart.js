import Products from '../../models/Products';
import User from '../../models/User'
import { connectToDatabase } from '../../util/db/db'
import { getSession } from 'next-auth/client'

export default async(req, res) => {
    switch (req.method) {
        case "POST":
            await toggleShoppingCart(req, res)
            break;
        case "GET":
            await getShoppingCart(req, res)
            break;
    }
}

const toggleShoppingCart = async(req, res) => {
    const session = await getSession({ req })
    const prodId = req.body.prodId
    if (session) {
        try {
            const user = await User.findOne({ email: session.user.email })
            const product = await Products.findById(prodId)
            console.log(user)
            console.log('toggle', product)
            const shoppingcart = user.shoppingCart.items
            const itemIndex = shoppingcart.map(item => item.productId).indexOf(prodId)
            console.log('shoppingcart', shoppingcart)
            console.log('itemIndex', itemIndex)
            if (itemIndex >= 0) {
                user.removeProductFromShoppingCart(product)
                res.status(201).json({ message: 'Remove product from shopping cart', shoppingCart: shoppingcart })
            } else if (itemIndex < 0) {
                user.addToShoppingCart(product)
                res.status(201).json({ message: 'Add product to shopping cart', shoppingCart: shoppingcart })
            }
        } catch (err) {
            console.log(err)
        }
    }
    if (!session) {
        res.send('You need to log in first')
    }

}


const getShoppingCart = async(req, res) => {
    const session = await getSession({ req })
    console.log('getShoppingCart', session)
    if (session) {
        try {
            const user = await User.findOne({ email: session.user.email })
            console.log('getShoppingCart', user)
            const shoppingcart = user.shoppingCart.items
            console.log('shoppingcart', shoppingcart)
            const detailedproducts = await user.populate('shoppingCart.items.productId').execPopulate()

            console.log('detailedproducts', detailedproducts.shoppingCart.items)
            res.status(200).json({ shoppingCart: detailedproducts.shoppingCart.items })
        } catch (err) {
            console.log(err)
        }
    }
    if (!session) {
        res.send('You need to log in first')
    }
}