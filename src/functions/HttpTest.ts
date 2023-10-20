import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HttpTest(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    // context.log(`Http function processed request for url "${request.url}"`);

    // const name = request.query.get('name') || await request.text() || 'world';
   
   //get json mockdata 
   const jsonData = { value: "test" }
  

    return {
        body: JSON.stringify(jsonData)
     };
};

app.http('HttpTest', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HttpTest
});
