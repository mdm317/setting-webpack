module.exports= function myLoader(content){
    
    return content.replace('console.log(','alert(' );
}