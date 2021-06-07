import Products from '../../models/Products';
import User from '../../models/User'
import { connectToDatabase } from '../../util/db/db'
import { getSession } from 'next-auth/client'

export default async(req, res) => {
    switch (req.method) {
        case "POST":
            await toggleFavoriteList(req, res)
            break;
        case "GET":
            await getFavoriteList(req, res)
            break;
    }
}

const toggleFavoriteList = async(req, res) => {

    const session = await getSession({ req })

    const prodId = req.body.prodId
    if (session) {
        try {
            const user = await User.findOne({ email: session.user.email })
            const product = await Products.findById(prodId)
            console.log(user)
            console.log('toggle', product)
            const favList = user.favoriteList.items
            const itemIndex = favList.map(item => item.productId).indexOf(prodId)
            console.log('favList', favList)
            console.log('itemIndex', itemIndex)
            if (itemIndex > 0) {
                user.removeProductFromFavList(product)
                res.status(201).json({ message: 'Remove product from favorite list', favList: favList })
            } else if (itemIndex < 0) {
                user.addToFavoritesList(product)
                res.status(201).json({ message: 'Add product to favorite list', favList: favList })
            }
        } catch (err) {
            console.log(err)
        }
    }
    if (!session) {
        res.send('You need to log in first')
    }

}


const getFavoriteList = async(req, res) => {
    const session = await getSession({ req })
    console.log('getFavoriteList', session)
    if (session) {
        try {
            const user = await User.findOne({ email: session.user.email })
            console.log('getFaavoriteList', user)

            const favList = user.favoriteList.items
            res.status(200).json({ favoriteList: favList })
        } catch (err) {
            console.log(err)
        }
    }
    if (!session) {
        res.send('You need to log in first')
    }
}