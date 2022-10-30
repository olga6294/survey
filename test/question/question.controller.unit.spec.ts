import { app } from "../../src/app";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { question } from "./utils";

describe("questions controller", () => {
    it("return 200 response code when retrieving questions", async () => {
        const response = await request(app)
            .get("/questions")
        expect(response.status).toEqual(200);
    });

    it("should return 200 response code when retrieving question by id", async () => {
        const response = await request(app)
            .get("/questions/:questionId".replace(":questionId", faker.datatype.uuid()))
        expect(response.status).toEqual(200);
    });

    it("should return 201 response code when adding a question", async () => {
        const response = await request(app)
            .post("/questions")
            .send(question);
        expect(response.status).toEqual(201);
    });

});