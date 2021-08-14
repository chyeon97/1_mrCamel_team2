export function filterByDislike(recentItems, dislikeItems, filterBName){
    let dislikeTitles = dislikeItems.map(e=> e.title)
    let filterdData = recentItems.filter(data => !dislikeTitles.includes(data.title))

    if(filterBName.length > 0){
        filterdData = filterdData.filter(data => filterBName.includes(data.brand))
    }

   
    return filterdData
}