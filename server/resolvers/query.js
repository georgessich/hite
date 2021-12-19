


const Query = {
    itemCards: (parent, args, {itemCards}) => itemCards,
    itemCard: (parent, args, {itemCards}) => {
        let itemCard = itemCards.find((itemCard) => {
            return itemCard.slug === args.slug
        })
        return itemCard
    },
    categories: (parent, args, {categories}) => categories,
    category: (parent, args, {categories}) => {
        let category = categories.find((category) => {
            return category.slug === args.slug
        })
        return category
    },
}

module.exports = Query