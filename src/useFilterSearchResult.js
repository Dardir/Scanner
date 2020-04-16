const useFilterSearchResult = (searchResultArr,searchFilterObj,keyMap) => {

    const replaceObjKeys = (obj,keyMap) =>{
        let replacedItems = Object.keys(obj).map((key) => {
            const newKey = keyMap[key] || key;
            return { [newKey] : obj[key] };
          });
          return replacedItems.reduce((a, b) => Object.assign({}, a, b));
    }
    const searchResultArrWithNewKeys = searchResultArr.map((item) => {
        return {...item, properties: replaceObjKeys(item.properties)};
    });

    
    return [null];
}

export default useFilterSearchResult;


/*
        {
  "list": {
    "pagination": {
      "count": 4,
      "hasMoreItems": false,
      "totalItems": 4,
      "skipCount": 0,
      "maxItems": 100
    },
    "entries": [
      {
        "entry": {
          "createdAt": "2020-04-12T12:03:34.428+0000",
          "isFolder": false,
          "isFile": true,
          "createdByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "modifiedAt": "2020-04-12T12:03:34.428+0000",
          "modifiedByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "name": "123.pdf",
          "id": "4e4a4379-2165-4b89-ae41-a054acfd4986",
          "nodeType": "dc:PowerOfAttorney",
          "properties": {
            "dc:POATo": "هشام",
            "cm:versionType": "MAJOR",
            "cm:versionLabel": "1.0",
            "dc:Barcode": "1123456",
            "dc:POAType": "توكيل قضايا",
            "dc:EmployeeNo": "100",
            "cm:lastThumbnailModification": [
              "doclib:1586693031126"
            ],
            "dc:POAFrom": "محمد",
            "dc:POAToPass": "123",
            "dc:POADate": "2020-04-13T00:00:00.000+0000",
            "cm:author": "Tamer Mahrous",
            "dc:POASubject": "توكيل خاص للقضايا",
            "dc:POAFromPass": "123456",
            "dc:EmployeeName": "أحمد",
            "dc:Embassy": "الرياض",
            "dc:POANumber": "1111",
            "dc:EDate": "2020-04-13T00:00:00.000+0000",
            "dc:POAKeyword": "بحث1\nبحث2"
          },
          "content": {
            "mimeType": "application/pdf",
            "mimeTypeName": "Adobe PDF Document",
            "sizeInBytes": 29027,
            "encoding": "UTF-8"
          },
          "parentId": "3a3ff9f6-30db-44b8-9ec1-99ee67f8fbd7"
        }
      },
      {
        "entry": {
          "createdAt": "2020-04-12T11:53:27.635+0000",
          "isFolder": false,
          "isFile": true,
          "createdByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "modifiedAt": "2020-04-12T11:53:27.635+0000",
          "modifiedByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "name": "12345.pdf",
          "id": "ae05d584-95bc-4d98-880b-d72c9bad8575",
          "nodeType": "dc:PowerOfAttorney",
          "properties": {
            "dc:POATo": "2020-04-13",
            "cm:versionType": "MAJOR",
            "cm:versionLabel": "1.0",
            "dc:Barcode": "1123456",
            "dc:POAType": "توكيل قضايا",
            "dc:EmployeeNo": "100",
            "cm:lastThumbnailModification": [
              "doclib:1586692421698"
            ],
            "dc:POAFrom": "محمد",
            "dc:POAToPass": "123",
            "dc:POADate": "2020-04-13T00:00:00.000+0000",
            "cm:author": "Tamer Mahrous",
            "dc:POASubject": "توكيل خاص للقضايا",
            "dc:POAFromPass": "123456",
            "dc:EmployeeName": "أحمد",
            "dc:Embassy": "الرياض",
            "dc:POANumber": "1111",
            "dc:EDate": "2020-04-13T00:00:00.000+0000",
            "dc:POAKeyword": "بحث1\\nبحث2"
          },
          "content": {
            "mimeType": "application/pdf",
            "mimeTypeName": "Adobe PDF Document",
            "sizeInBytes": 29027,
            "encoding": "UTF-8"
          },
          "parentId": "3a3ff9f6-30db-44b8-9ec1-99ee67f8fbd7"
        }
      },
      {
        "entry": {
          "createdAt": "2020-04-12T10:06:47.733+0000",
          "isFolder": false,
          "isFile": true,
          "createdByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "modifiedAt": "2020-04-12T10:06:47.733+0000",
          "modifiedByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "name": "123456.pdf",
          "id": "c38d9f40-642e-4037-8370-f30edb3cfe6b",
          "nodeType": "dc:PowerOfAttorney",
          "properties": {
            "cm:versionType": "MAJOR",
            "cm:versionLabel": "1.0",
            "dc:Barcode": "1123456",
            "dc:POAType": "توكيل قضايا",
            "dc:EmployeeNo": "100",
            "cm:lastThumbnailModification": [
              "doclib:1586687907382"
            ],
            "dc:POAFrom": "محمد",
            "dc:POAToPass": "123",
            "cm:author": "Tamer Mahrous",
            "dc:POASubject": "توكيل خاص للقضايا",
            "dc:POAFromPass": "123456",
            "dc:EmployeeName": "أحمد",
            "dc:Embassy": "الرياض",
            "dc:POANumber": "1111",
            "dc:POAKeyword": "بحث"
          },
          "content": {
            "mimeType": "application/pdf",
            "mimeTypeName": "Adobe PDF Document",
            "sizeInBytes": 29027,
            "encoding": "UTF-8"
          },
          "parentId": "3a3ff9f6-30db-44b8-9ec1-99ee67f8fbd7"
        }
      },
      {
        "entry": {
          "createdAt": "2020-04-12T11:55:19.515+0000",
          "isFolder": false,
          "isFile": true,
          "createdByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "modifiedAt": "2020-04-12T12:03:50.476+0000",
          "modifiedByUser": {
            "id": "admin",
            "displayName": "Administrator"
          },
          "name": "1234567.pdf",
          "id": "b105eae1-745c-4441-bc1f-e9ba4fa9e4d3",
          "nodeType": "dc:PowerOfAttorney",
          "properties": {
            "dc:POATo": "على",
            "cm:versionType": "MAJOR",
            "cm:versionLabel": "1.0",
            "dc:Barcode": "1123456",
            "dc:POAType": "توكيل قضايا",
            "dc:EmployeeNo": "100",
            "cm:lastThumbnailModification": [
              "doclib:1586692529856"
            ],
            "dc:POAFrom": "محمد",
            "dc:POAToPass": "123",
            "dc:POADate": "2020-04-13T00:00:00.000+0000",
            "cm:author": "Tamer Mahrous",
            "dc:POASubject": "توكيل خاص للقضايا",
            "dc:POAFromPass": "123456",
            "dc:EmployeeName": "أحمد",
            "dc:Embassy": "الرياض",
            "dc:POANumber": "1111",
            "dc:EDate": "2020-04-13T00:00:00.000+0000",
            "dc:POAKeyword": "بحث1\nبحث2"
          },
          "content": {
            "mimeType": "application/pdf",
            "mimeTypeName": "Adobe PDF Document",
            "sizeInBytes": 29027,
            "encoding": "UTF-8"
          },
          "parentId": "3a3ff9f6-30db-44b8-9ec1-99ee67f8fbd7"
        }
      }
    ]
  }
}
        */