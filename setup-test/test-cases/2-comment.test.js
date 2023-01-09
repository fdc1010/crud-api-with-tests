import { readFileSync } from 'fs';
import { resolve } from 'path';
import request from "supertest";

const app = "http://localhost:5000";
let mock_data;

beforeAll(async () => {
    const raw_data = readFileSync(resolve('mock','mock.comment.test.json'));
    mock_data = JSON.parse(raw_data);

    await request(app)
        .post("/api/comment/add")
        .send(mock_data[0])
        .expect(200)
        .then(async (res) => {
            expect(res.body.success).toBe(true);
        });
});

afterAll(async () => {
    await request(app)
                .delete(`/api/comment/deleteAll`);
});

describe('2 - Comment CRUD', () => {


    it("POST /api/comment/add = CREATE Comment API", async () => {
        const res = await request(app)
        .post("/api/comment/add")
        .send(mock_data[1])
        .expect(200);
        
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty('commented_profile');
        expect(res.body.data).toHaveProperty('content');
        
    });


    it("PUT /api/comment/edit/:id = UPDATE Comment API", async () => {
        const res = await request(app)
            .put(`/api/comment/edit/${mock_data[1]._id}`)
            .send(mock_data[2])
            .expect(200);
            expect(res.body.success).toBe(true);
            
    });

    
    it("Get /api/comment/ = Get All Comment", async () => {
        const res = await request(app)
        .get(`/api/comment/`)
        .expect(200);  
        expect(res.body).toBeDefined();
        expect(typeof res.body.data).toBe('object');
        expect(res.body.success).toBe(true);
        
    });  
});