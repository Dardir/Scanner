const useValidateMandatoryFields = (objectToValidate, mandatoryKeys) =>{
    debugger;
    let nullArray = [];
    Object.keys(objectToValidate).forEach(key => {
        if(mandatoryKeys.includes(key)){
            if(objectToValidate[key] === null || objectToValidate[key] === ''){
                nullArray.push(true);
            }else{
                nullArray.push(false);
            }
        }
    })
    return [nullArray.includes(true)];
}

export default useValidateMandatoryFields;