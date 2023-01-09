import { readFileSync } from 'fs';
import { resolve } from 'path';
import request from "supertest";

const app = "http://localhost:5000";
let mock_data;

beforeAll(async () => {
  const raw_data1 = readFileSync(resolve('mock','mock.profile.test.json'));
  mock_data = JSON.parse(raw_data1);
  await request(app)
    .post("/api/profile/add")
    .send(mock_data[0])
    .expect(200)
    .then(async (res) => {
      expect(res.body.success).toBe(true);
    });

  const raw_data2 = readFileSync(resolve('mock','mock.vote.test.json'));
  const mock_data2 = JSON.parse(raw_data2);
  await request(app)
    .post("/api/vote/add")
    .send(mock_data2[0])
    .expect(200)
    .then(async (res) => {
      expect(res.body.success).toBe(true);
    });

  const raw_data3 = readFileSync(resolve('mock','mock.comment.test.json'));
  const mock_data3 = JSON.parse(raw_data3);
  await request(app)
    .post("/api/comment/add")
    .send(mock_data3[0])
    .expect(200)
    .then(async (res) => {
      expect(res.body.success).toBe(true);
    });
});

afterAll(async () => {
  await request(app)
              .delete(`/api/profile/deleteAll`);
}); 


describe('1 - Profile CRUD', () => { 
  

  it("POST /api/profile/add = CREATE Profile API", async () => {
    const res = await request(app)
      .post("/api/profile/add")
      .send(mock_data[1])
      .expect(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('name');
    expect(res.body.data).toHaveProperty('description');
    expect(res.body.data).toHaveProperty('image');
    

  });        
  
  it("PUT /api/profile/edit/:id = UPDATE Profile API", async () => {
    const res = await request(app)
      .put(`/api/profile/edit/${mock_data[1]._id}`)
      .send(mock_data[2])
      .expect(200);
      expect(res.body.success).toBe(true);
  });

  it("Get /api/profile/ = Get All Profile", async () => {
    const res = await request(app)
      .get(`/api/profile/`)
      .expect(200);
      expect(res.body).toBeDefined();
      expect(typeof res.body.data).toBe('object');
      expect(res.body.success).toBe(true);
      
  });  
});