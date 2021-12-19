const Category = {
    itemCards: (parent, args, {itemCards}) => {
        
        return itemCards.filter(itemCard => {
            console.log(itemCard.slug, args.slug)
            return itemCard.category === parent.id
        })
    }
}

module.exports = Category;