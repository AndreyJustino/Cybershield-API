import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config()

async function testConnection(){
    let response;
    
    try{
        response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/helloWord")
    } catch{
        response = false
    }

    return response
}

export default testConnection