function getProductoDestacados(id){
    // const prodDestacados = getProductoDestacadosFromDB(id)
    const prodDestacados = []
    return prodDestacados
}

function testGetProductosDestacadosOk(){
    const id = 3// id de una persona que si tiene productos destacados
    const resultado = getProductoDestacados(id)
    if(resultado === []){
        console.log("Test getProductoDestacados failed");
    }  else {
        console.log("Test getProductoDestacados success");
    }
}


