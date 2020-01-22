/// <reference path="../typings/test_suite_version_result.d.ts" />

import { QualityForward, TestCase } from '../index';
import User from './user';

class TestSuiteVersion {
  qf: QualityForward;
  id: number;
  user: User;
  test_suite_id: number;
  name: string;
  status: string;
  note: string;
  latest_test_cycle_duration_sec: number;
  lock: boolean;
  lock_memo: string;
  created_at: Date;
  updated_at: Date;
    
  constructor(qf: QualityForward) {
    this.qf = qf;
  }

  set(params: TestSuiteVersionResult): TestSuiteVersion{
    for (let key in params) {
      if (['created_at', 'updated_at'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else if (key === 'user') {
        this.user = new User;
        this.user.set(params[key]);
      } else {
        this[key] = params[key];
      }
    }
    return this;
  }
  
  async getTestCases(): Promise<TestCase[]> {
    return await this.qf.testCase.get(this.test_suite_id, this.id);
  }
  
  async save() {
    const path = this.id == null ? `/api/v2/test_suites/${this.test_suite_id}/test_suite_versions.json` : `/api/v2/test_suites/${this.test_suite_id}/test_suite_versions/${this.id}.json`;
    const url = this.qf.getUrl(path);
    const method = this.id == null ? 'post' : 'patch';
    try {
      const json: TestSuiteVersionResult = await this.qf.request[method](url, this.toJSON());
      this.set(json);
      return true;
    } catch (e) {
      this.qf.error = {
        code: e.status,
        text: JSON.parse(e.response.text)
      }
      return false;
    }
  }

  toJSON(): object {
    const result = {};
    for (let key of Object.keys(this)) {
      if (typeof this[key] === 'function') {
        continue;
      }
      if (['qf', 'id', 'created_at', 'updated_at'].indexOf(key) > -1) {
        continue;
      }
      result[key] = this[key];
    }
    return result;
  }
}

export default TestSuiteVersion;
