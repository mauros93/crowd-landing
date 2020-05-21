function prueba(val){
    document.getElementById("demo1").innerHTML = val
}

var dinero = 0;
function prueba(val){
    dinero = val
    dinero2 = "$ " + new Intl.NumberFormat("de-DE").format(val);
    document.getElementById("demo1").innerHTML = dinero2;
    document.getElementById("valor").innerHTML = dinero2;
    var intereses = dinero * 0.025;
    var seguro = 2000 + dinero * 0.013;
    var administracion = 3000 + dinero * 0.0102;
    var total = Number(dinero) + Number(intereses) + Number(seguro) + Number(administracion);    
    document.getElementById("intereses").innerHTML = "$ " + new Intl.NumberFormat("de-DE").format(intereses);
    document.getElementById("seguro").innerHTML = "$ " + new Intl.NumberFormat("de-DE").format(seguro);
    document.getElementById("administracion").innerHTML = "$ " + new Intl.NumberFormat("de-DE").format(administracion);
    document.getElementById("total").innerHTML = "$ " + new Intl.NumberFormat("de-DE").format(total); 
       
}


