import welcome from '../domain/welcome.js';
// import contextManagerMiddleware from '../utils/contextManager.js';

class WelcomeController {
  welcome(req, res, next) {
    // const id = contextManagerMiddleware.getStore().get('requestId');
    // console.log({ id });
    return res.json(welcome.greet());
  }
}

export default new WelcomeController();
