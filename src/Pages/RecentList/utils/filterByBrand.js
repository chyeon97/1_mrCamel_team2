export function filterByBrand(filterBName, items, dislike){
    if(filterBName.length === 0){
        return items
    }

    let filterdItems = [];
   

    for(let idx =0 ; idx < filterBName.length; idx++){
        for(let itemData of items){
            if(filterBName[idx] === itemData.brand){
                filterdItems.push(itemData)
            }
        }
    }
    return filterdItems;
}