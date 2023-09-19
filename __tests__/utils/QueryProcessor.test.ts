import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return andrew id', ()=>{
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("kmisheel"))
    })
    test('should answer name', ()=>{
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("Khuslen"))
    })
    test('should answer minus', ()=>{
        const query = "What is 65 minus 59?";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("6"))
    })
});