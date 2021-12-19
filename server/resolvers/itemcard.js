const ItemCard = {
    category: (parent, args, {categories}) => {
        console.log(categories.slug)
        return categories.find((category) => {
            return category.id === parent.category
        })
    }
}

module.exports = ItemCard;