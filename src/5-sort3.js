// Given any array person objects will sort them by age
// you can also pass the sorting mode asc or desc
/**
 
Sorting Options is an array of object:
{
    fieldName: string
    sortingMode: asc|desc
}

now instead of just sorting on one field, you will have to sort
apply sorting on more field

ex:
    {
        name: 'jf',
        age: 37
    },
    {
        name: 'dana',
        age: 12
    },
    {
        name: 'roger',
        age: 56
    },
    {
        name: 'Luc',
        age: 37
    }

    with [
        {fieldName:'age',sortingMode:asc},
        {fieldName:'name',sortingMode:desc},
    ]

    will be:
    {
        name: 'dana',
        age: 12
    },
    {
        name: 'Luc',
        age: 37
    }
    {
        name: 'jf',
        age: 37
    },
    {
        name: 'roger',
        age: 56
    }    
 */

const sortByMany = function (persons, sortingsOptions) {
    // todo
}


export default sortByMany;