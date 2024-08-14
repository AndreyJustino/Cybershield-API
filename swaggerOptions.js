import swaggerJSDoc from "swagger-jsdoc"

const mySwagger =  {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Minha API',
        version: '1.0.0',
        description: 'Nossa api é feita baseada no tema:Cyber Segurança',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Servidor local',
        },
      ],
    },
    apis: [], 
  };
  
  export const swaggerSpecs = swaggerJSDoc(mySwagger);
  
  module.exports = swaggerSpecs; 