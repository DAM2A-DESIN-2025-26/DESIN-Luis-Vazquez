var arr1=[true,1,"Casa",function(){}]

function tiposArray(arr) {
    
    let arrayDevolver = []
    
    for (let i = 0; i < arr.length; i++) {
        arrayDevolver[i] = typeof arr[i];
        
    }

    console.log(arrayDevolver)
}

tiposArray(arr1)