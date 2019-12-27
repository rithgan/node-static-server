var static = require('node-static');
 
var fileServer = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request,response, (e,res)=>{
            if(e && (e.status === 404)){
                fileServer.serveFile('/error.html',404,{},request,response)
            }
        });

        // fileServer.serveFile('./about.html',500,{},request, response);
    }).resume();
}).listen(8080);