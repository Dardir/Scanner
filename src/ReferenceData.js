export const counsulates = [
    {
        key: 'Riyadh',
        value: 'الرياض'
    },
    {
        key: 'Damam',
        value: 'الدمام'
    },
    {
        key: 'Qaseem',
        value: 'القصيم'
    },
    {
        key: 'AlJawf',
        value: 'الجوف'
    },
    {
        key: 'Arar',
        value: 'عرعر'
    },
    {
        key: 'Ehsaa',
        value: 'الاحساء'
    },
    {
        key: 'hael',
        value: 'حائل'
    }

];

export const delegationTypes = [
    {
        key: 'delegation',
        value: 'توكيل'
    },
    {
        key: 'confirmation',
        value: 'تصديق'
    },
    {
        key: 'commercial',
        value: 'تجاري'
    }
];


export const keyMap = [
    {
        key: 'dc:Embassy',
        value: 'counsulate'
    },
    {
        key: 'dc:POADate',
        value: 'transactionDate'
    },
    {
        key: 'dc:POAFrom',
        value: 'delegator'
    },
    {
        key: 'dc:POAFromPass',
        value: 'delegatorPassport'
    },
    {
        key: 'dc:POAPhone',
        value: 'delegatorPhone'
    },
    {
        key: 'dc:POAKeyword',
        value: 'keySearch'
    },
    {
        key: 'dc:POANumber',
        value: 'delegationNumber'
    },
    {
        key: 'dc:POASubject',
        value: 'delegationSubject'
    },
    {
        key: 'dc:POAType',
        value: 'delegationType'
    }

];

export const mockingSearchResults =
{
    "data": {
        "list": {
            "pagination": {
                "count": 2,
                "hasMoreItems": false,
                "totalItems": 2,
                "skipCount": 0,
                "maxItems": 100
            },
            "entries": [
                {
                    "entry": {
                        "createdAt": "2020-04-23T15:42:02.868+0000",
                        "isFolder": false,
                        "isFile": true,
                        "createdByUser": {
                            "id": "admin",
                            "displayName": "Administrator"
                        },
                        "modifiedAt": "2020-04-23T15:42:02.868+0000",
                        "modifiedByUser": {
                            "id": "admin",
                            "displayName": "Administrator"
                        },
                        "name": "123.pdf",
                        "id": "a9b55958-8e30-4724-87dc-d8f87ac9239f",
                        "nodeType": "dc:PowerOfAttorney",
                        "properties": {
                            "cm:versionType": "MAJOR",
                            "cm:versionLabel": "1.0",
                            "dc:POAType": "توكيل",
                            "cm:lastThumbnailModification": [
                                "doclib:1587671681277"
                            ],
                            "cm:description": "123,2020-04-25,الرياض,محمد,110,2020-04-25,على,10245,قضية الارض,123,قضايا,محمود,45856,توكيل قضايا",
                            "dc:POAFrom": "على",
                            "dc:POADate": "2020-04-25T00:00:00.000+0000",
                            "cm:author": "Tamer Mahrous",
                            "dc:POASubject": "قضايا",
                            "dc:POAFromPass": "10245",
                            "dc:POAPhone":"01000100010",
                            "dc:Embassy": "الرياض",
                            "dc:POANumber": "123",
                            "dc:POAKeyword": "قضية الارض"
                        },
                        "content": {
                            "mimeType": "application/pdf",
                            "mimeTypeName": "Adobe PDF Document",
                            "sizeInBytes": 69318,
                            "encoding": "UTF-8"
                        },
                        "parentId": "c61a3e51-bf50-4a4e-ac45-a85cdaeec7ff"
                    }
                },
                {
                    "entry": {
                        "createdAt": "2020-04-23T23:12:01.311+0000",
                        "isFolder": false,
                        "isFile": true,
                        "createdByUser": {
                            "id": "admin",
                            "displayName": "Administrator"
                        },
                        "modifiedAt": "2020-04-23T23:12:01.311+0000",
                        "modifiedByUser": {
                            "id": "admin",
                            "displayName": "Administrator"
                        },
                        "name": "12345.pdf",
                        "id": "8cf25080-dfd2-4b6d-94a4-adb413bb8db2",
                        "nodeType": "dc:PowerOfAttorney",
                        "properties": {
                            "cm:versionType": "MAJOR",
                            "cm:versionLabel": "1.0",
                            "dc:POAType": "تصديق",
                            "cm:description": "12345,2020-04-25,جدة,محمد,110,2020-04-25,خالد,784511,بنك\nالقاهرة\nتوكيل,12345,بنك القاهرة,سامح,7884,توكيل بنكي",
                            "dc:POAFrom": "خالد",
                            "dc:POADate": "2020-04-25T00:00:00.000+0000",
                            "cm:author": "Tamer Mahrous",
                            "dc:POASubject": "بنك القاهرة",
                            "dc:POAFromPass": "784511",
                            "dc:POAPhone":"01000100010",
                            "dc:Embassy": "جدة",
                            "dc:POANumber": "12345",
                            "dc:POAKeyword": "بنك\nالقاهرة\nتوكيل"
                        },
                        "content": {
                            "mimeType": "application/pdf",
                            "mimeTypeName": "Adobe PDF Document",
                            "sizeInBytes": 69318,
                            "encoding": "UTF-8"
                        },
                        "parentId": "c61a3e51-bf50-4a4e-ac45-a85cdaeec7ff"
                    }
                }
            ]
        }
    }
}
    ;
export const mockingFileURL = 'http://www.orimi.com/pdf-test.pdf'