module.exports = async function (context, req) {
    context.log('HttpCollabothon function processed a request.');
    
    //mock json data
    const jsonData = { value: "test 1" }
 
    context.res = {
        status: 200, 
        body: JSON.stringify(jsonData)
    };
}