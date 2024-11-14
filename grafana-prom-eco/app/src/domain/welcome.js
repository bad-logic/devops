// import contextManagerMiddleware from '../utils/contextManager.js';

class Welcome {
  greet() {
    // const id = contextManagerMiddleware.getStore().get('requestId');
    return {
      msg: 'Welcome',
      version: '1.0.0',
    };
  }
}

export default new Welcome();
