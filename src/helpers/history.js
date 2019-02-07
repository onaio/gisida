import { createBrowserHistory } from 'history';

class History {
  static history;
  constructor() {
    if (!this.history) {
      this.history = createBrowserHistory();
    }
    return this.history;
  }
}

export default new History();
