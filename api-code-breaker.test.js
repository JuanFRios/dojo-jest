const request = require("supertest");
const api = require('./app');



describe("testing /codebreaker path", () => {
    test("it should return status code 200", done => {
        request(api)
        .get("/api/v1/codebreaker") // Act
        .then(response => {
            expect(response.statusCode).toBe(200); //Assert
            done();
        });
    });

    test("it should return application/json content.type", done => {
        request(api)
        .get("/api/v1/codebreaker") // Act
        .then(response => {
            expect(response.type).toBe("application/json");
            done();
        });
    });

    test("it should return a valid json object", done => {
        request(api)
        .get("/api/v1/codebreaker") // Act
        .then(response => {
            expect(response.body).not.toBeNull();
            expect(response.body.result).not.toBeUndefined();
            done();
        });
    });

    test("it should return a valid json object", done => {
        request(api)
        .get("/api/v1/codebreaker") // Act
        .then(response => {
            expect(response.body).not.toBeNull();
            expect(response.body.number).not.toBeUndefined();
            done();
        });
    });

})