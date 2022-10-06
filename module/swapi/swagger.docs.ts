import swaggerJsDoc from 'swagger-jsdoc';
const swaggerOtps: swaggerJsDoc.Options = {
    swaggerDefinition: {
        info: {
            title: 'Swapi APIs',
            description: 'Front end API Swapi',
            version: '1.0.0',
            contact: {
                name: 'Mina Hany',
                email: 'mina.hany460@gmail.com'
            },
            servers: [`http://localhost:${process.env.PORT}`]
        }
    },
    apis: ['./routes/swapi.routes.ts']
}
export const swaggerDocs = swaggerJsDoc(swaggerOtps);
