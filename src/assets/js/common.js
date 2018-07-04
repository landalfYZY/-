var API = 'http://47.106.219.49:8601/'
function http(method,url,data,cb){
    $.ajax({
        url:API+url,
        data:data,
        headers: {
            Accept: "application/json; charset=utf-8"
        },    
        dataType:'json',
        method:method,
        success(res){
            cb(res)
        }
    })
}

module.exports = {
    API:API,
    http:http
}