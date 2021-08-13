export function sortByPrice(originItem){
    let originData = [];
    for(let itemData of originItem){
      originData.push(itemData)
    }
    let newProductList = originData.sort((a, b) => {
        return a.price - b.price;
      });
    return newProductList
}