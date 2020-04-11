const useValidateAnyValueInFields = (objectToValidate) => {
    let nullArray = [];
    Object.keys(objectToValidate).forEach(key => {
        if (objectToValidate[key] === null || objectToValidate[key] === '') {
            nullArray.push(true);
        } else {
            nullArray.push(false);
        }

    })
    return [nullArray.every(true)];
}

export default useValidateAnyValueInFields;