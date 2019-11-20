import parseMustache from "../../src/utils/parseMustache";

describe('parseMustache', () => {
    test('should render correct html', () => {
        const temp = `<div>Name: {{name}}</div>`
        const data = {name: 'John Doe'}
        expect(parseMustache(temp, data)).toEqual("<div>Name: John Doe</div>")
    })
})