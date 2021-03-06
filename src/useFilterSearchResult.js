import { counsulates,delegationTypes } from './ReferenceData';
const useFilterSearchResult = (searchResultArr,searchFilterObj,keyMap) => {
    const getMappedKey= (oldKey) =>{
        const mapElement = keyMap.find(element => element.key === oldKey);
        if(!mapElement) return oldKey;
        return mapElement.value;
    }
    const replaceObjKeys = (obj) =>{
        let replacedItems = Object.keys(obj).map((key) => {
            const newKey = getMappedKey(key) || key;
            return { [newKey] : obj[key] };
          });
          return replacedItems.reduce((a, b) => Object.assign({}, a, b));
    }
    const searchResultArrWithNewKeys = searchResultArr.map((item) => {
        return {...item.entry, properties: replaceObjKeys(item.entry.properties,keyMap)};
    });

    const findTranslatedKey = (arrayOfReferenceValues,keyToTranslate) =>{
        const element = arrayOfReferenceValues.find((element) => element.key === keyToTranslate);
        return element.value;
    }

    const filteredOut = searchResultArrWithNewKeys.filter((element)=>{
        let matching = false;
        Object.keys(searchFilterObj).forEach((key) =>{
            if(searchFilterObj[key] && searchFilterObj[key]!==''){
                if(key === 'counsulate'){
                    const translatedValue = findTranslatedKey(counsulates,searchFilterObj[key]);
                    if(element.properties[key] === translatedValue) {
                        matching = true;
                    }
                } else if(key === 'delegationType'){
                    const translatedValue = findTranslatedKey(delegationTypes,searchFilterObj[key]);
                    if(element.properties[key] === translatedValue) {
                        matching = true;
                    }
                }
                else if(element.properties[key] === searchFilterObj[key]){
                    matching = true;
                }else{
                    matching = false;
                }
            }
        })
        return matching;
    })
    if(filteredOut.length === 0){
        return [null];
    }
    
    return [filteredOut];
}

export default useFilterSearchResult;

