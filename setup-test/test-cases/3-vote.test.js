import { readFileSync } from 'fs';
import { resolve } from 'path';
import request from "supertest";

const app = "http://localhost:5000";
let mock_data;

beforeAll(async () => {
    const raw_data = readFileSync(resolve('mock','mock.vote.test.json'));
    mock_data = JSON.parse(raw_data);

    await request(app)
        .post("/api/vote/add")
        .send(mock_data[0])
        .expect(200)
        .then(async (res) => {
            expect(res.body.success).toBe(true);
        });
});

afterAll(async () => {
    await request(app).delete(`/api/vote/deleteAll`);
});

describe('3 - Vote CRUD', () => {

    it("POST /api/vote/add = CREATE Vote API", async () => {
        const res = await request(app)
        .post("/api/vote/add")
        .send(mock_data[1])
        .expect(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty('user');
        expect(res.body.data).toHaveProperty('voted_profile');
        
    });


    it("PUT /api/vote/edit/:id = UPDATE Vote API", async () => {
        const res = await request(app)
            .put(`/api/vote/edit/${mock_data[1]._id}`)
            .send(mock_data[2])
            .expect(200);
            expect(res.body.success).toBe(true);
            
    });
    
    it("Get /api/vote/ = Get All Vote", async () => {
        const res = await request(app)
        .get(`/api/vote/`)
        .expect(200);
        
        expect(res.body).toBeDefined();
        expect(typeof res.body.data).toBe('object');
        expect(res.body.success).toBe(true);
        
    });  
});