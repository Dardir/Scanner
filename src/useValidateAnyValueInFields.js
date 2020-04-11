const useValidateAnyValueInFields = (objectToValidate) => {
    debugger;
    let nullArray = [];
    Object.keys(objectToValidate).forEach(key => {
        if (objectToValidate[key] === null || objectToValidate[key] === '') {
            nullArray.push(true);
        } else {
            nullArray.push(false);
        }

    })
    return [nullArray.every(element => element === true)];
}

export default useValidateAnyValueInFields;