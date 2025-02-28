class PushAdapterMock {
  config;
  constructor(config: any) {
    this.config = config;
  }

  // Simulates the behavior of the `send` method
  send = (data: any, installations: any) => {};

  // Simulates the behavior of the `getValidPushTypes` method
  getValidPushTypes = () => {
    return ['ios', 'android'];
  };
}

export default PushAdapterMock;
