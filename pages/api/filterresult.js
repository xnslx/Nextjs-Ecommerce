import Products from '../../models/Products';

export default async function getProductsByFilterResult(req, res) {
    console.log('req.query', req.query)
    let query = {};
    const { gender, size, category } = req.query
    if (req.method !== 'POST') {
        return
    }
    let payload = { "category": category, "size": size, "gender": gender }
    if (payload.category && payload.category.length > 0) query.category = { $in: payload.category }
    if (payload.size && payload.size.length > 0) query.size = { $in: payload.size };
    if (payload.gender && payload.gender.length > 0) query.gender = { $in: payload.gender };
    const result = await Products.find(query)
    console.log('result', result)
    if (result == '') {
        res.status(403).json({ message: 'Can not find the product that you are looking for.' })
        return;
    }
    res.status(201).json({ products: result })
}