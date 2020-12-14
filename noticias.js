var http = require('http');

//console.log('Criando um site de noticias com node js');

http.createServer(function(req, res){
    
    var categoria = req.url;

    if(categoria=="/tecnologia"){
        res.end("<html><body>Pagina tecnologia</body></html>");
    }else if (categoria='/moda'){
        res.end("<html><body>Pagina moda</body></html>");
    }else if (categoria='/beleza'){
        res.end("<html><body>Pagina beleza</body></html>");
    }else{
        res.end("<html><body>HOME PAGE</body></html>");
    }
    

    
}).listen(3000);

