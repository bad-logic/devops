import { AsyncLocalStorage } from 'node:async_hooks';
import { randomUUID } from 'node:crypto';

class RequestLocalContextManager {
  static #INSTANCE;
  #store;
  constructor() {
    this.#store = new AsyncLocalStorage();
  }

  // attached to the prototype and shared among all instances of the class. memory efficient unlike the arrow syntax
  // traditional method syntax does not appear on the objects but arrow methods do appear while logging the objects
  static getInstance() {
    if (RequestLocalContextManager.#INSTANCE === undefined) {
      RequestLocalContextManager.#INSTANCE = new RequestLocalContextManager();
    }
    return RequestLocalContextManager.#INSTANCE;
  }

  deploy = () => async (req, res, next) => {
    // @TODO when are these request scoped store destroyed
    // check flame graphs and all
    const map = new Map();
    const reqId = randomUUID();
    req.headers.reqId = reqId;
    map.set('requestId', reqId);
    this.#store.run(map, () => next());
  };

  getStore = () => {
    return this.#store.getStore();
  };

  get = (key) => {
    return this.#store.getStore().get(key);
  };

  set = (key, value) => {
    this.#store.getStore().set(key, value);
  };
}

const contextManagerMiddleware = RequestLocalContextManager.getInstance();
export default contextManagerMiddleware;
