var API = 'http://47.106.219.49:8601/'
function http(method,url,data,cb){
    $.ajax({
        type:method,
        url:API+url,
        data:data,
        dataType:'json',
        contentType: "application/json;",
        success(res){
            cb(res)
        }
    })
}

module.exports = {
    API:API,
    http:http
}