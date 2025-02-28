export const cloudFunctionsTests = () => {
  describe('Cloud Functions', () => {
    test('Call Cloud Function helloWorld', async () => {
      const result = await Parse.Cloud.run('helloWorld');
      expect(result).toBe('Hello world!');
    });
  });
};
