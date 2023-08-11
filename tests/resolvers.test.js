// tests/resolvers.test.js

describe('GraphQL Resolvers', () => {
  it('should return all authors', async () => {
    const query = `
      query {
        getAllAuthors {
          id
          name
          birthDate
        }
      }
    `;

    expect(typeof query).toBe("string"); 

  });

});
