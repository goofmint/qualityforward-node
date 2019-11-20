/// <reference path="../typings/test_suite_result.d.ts" />
/// <reference path="../typings/test_suite_version_result.d.ts" />

import { QualityForward, TestSuiteVersion } from '../index';

class TestSuite {
  qf: QualityForward;
  id: number;
  project_id: number;
  name: string;
  label_category1: string;
  use_category1: boolean;
  label_category2: string;
  use_category2: boolean;
  label_category3: string;
  use_category3: boolean;
  label_category4: string;
  use_category4: boolean;
  label_category5: string;
  use_category5: boolean;
  label_category6: string;
  use_category6: boolean;
  label_category7: string;
  use_category7: boolean;
  label_category8: string;
  use_category8: boolean;
  label_category9: string;
  use_category9: boolean;
  label_category10: string;
  use_category10: boolean;
  label_category11: string;
  use_category11: boolean;
  label_category12: string;
  use_category12: boolean;
  label_category13: string;
  use_category13: boolean;
  label_category14: string;
  use_category14: boolean;
  label_category15: string;
  use_category15: boolean;
  label_category16: string;
  use_category16: boolean;
  label_category17: string;
  use_category17: boolean;
  label_category18: string;
  use_category18: boolean;
  label_category19: string;
  use_category19: boolean;
  label_category20: string;
  use_category20: boolean;
  label_category21: string;
  use_category21: boolean;
  label_category22: string;
  use_category22: boolean;
  label_category23: string;
  use_category23: boolean;
  label_category24: string;
  use_category24: boolean;
  label_category25: string;
  use_category25: boolean;
  label_content1: string;
  use_content1: boolean;
  label_content2: string;
  use_content2: boolean;
  label_content3: string;
  use_content3: boolean;
  label_content4: boolean;
  use_content4: boolean;
  label_content5: boolean;
  use_content5: boolean;
  label_content6: boolean;
  use_content6: boolean;
  label_content7: boolean;
  use_content7: boolean;
  label_content8: boolean;
  use_content8: boolean;
  label_content9: boolean;
  use_content9: boolean;
  label_content10: boolean;
  use_content10: boolean;
  coverage_panel_column: number;
  created_at: Date;
  updated_at: Date;
  
  constructor(qf: QualityForward) {
    this.qf = qf;
  }
  
  async get(): Promise<TestSuite[]> {
    const path = '/api/v2/test_suites.json';
    const url = this.qf.getUrl(path);
    const json: TestSuiteResults = await this.qf.request.get(url);
    const ary: TestSuite[] = [];
    for (let params of json.test_suites) {
      const ts = new TestSuite(this.qf);
      ts.set(params);
      ary.push(ts);
    }
    return ary;
  }
  
  async save() {
    const path = this.id == null ? '/api/v2/test_suites.json' : `/api/v2/test_suites/${this.id}.json`;
    const url = this.qf.getUrl(path);
    const method = this.id == null ? 'post' : 'patch';
    try {
      const json: TestSuiteResult = await this.qf.request[method](url, this.toJSON());
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
  
  async destroy() {
    const path = `/api/v2/test_suites/${this.id}.json`;
    const url = this.qf.getUrl(path);
    try {
      await this.qf.request.destroy(url);
      return true;
    } catch (e) {
      this.qf.error = {
        code: e.status,
        text: null
      }
      return false;
    }
  }
  
  set(params: TestSuiteResult): TestSuite{
    for (let key in params) {
      if (['created_at', 'updated_at'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else {
        this[key] = params[key];
      }
    }
    return this;
  }
  
  toJSON(): object {
    const result = {};
    for (let key of Object.keys(this)) {
      if (typeof this[key] === 'function') {
        continue;
      }
      if (['qf', 'id', 'project_id', 'created_at', 'updated_at'].indexOf(key) > -1) {
        continue;
      }
      result[key] = this[key];
    }
    return result;
  }
  
  async getVersions(): Promise<TestSuiteVersion[]>  {
    const path = `/api/v2/test_suites/${this.id}/test_suite_versions.json`;
    const url = this.qf.getUrl(path);
    const json: TestSuiteVersionResults = await this.qf.request.get(url);
    const ary: TestSuiteVersion[] = [];
    for (let v of json.test_suite_versions) {
      const t = new TestSuiteVersion(this.qf);
      t.set(v);
      ary.push(t);
    }
    return ary;
  }
}

export default TestSuite;