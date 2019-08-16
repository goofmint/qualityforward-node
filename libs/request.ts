import { QualityForward } from '../index';
import * as request from 'superagent';

class Request {
  qf: QualityForward;
  constructor(qf: QualityForward) {
    this.qf = qf;
  }
  
  async get(url: string) {
    const results = await request
      .get(url)
      .set('Accept', 'application/json')
    return results.body;
  }
  
  async post(url: string, data: object) {
    const results = await request
      .post(url)
      .set('Accept', 'application/json')
      .send(data);
    return results.body;
  }
  
  async patch(url: string, data: object) {
    const results = await request
      .patch(url)
      .set('Accept', 'application/json')
      .send(data);
    return results.body;
  }
  
  async destroy(url: string) {
    const results = await request
      .delete(url)
      .set('Accept', 'application/json');
    return results.body;
  }
}

export default Request;