/// <reference path="../typings/test_suite_assignment_result.d.ts" />
/// <reference path="../typings/test_phase_result.d.ts" />

import { QualityForward, TestSuiteAssignment, TestSuiteVersion } from '../index';

class TestPhase {
  qf: QualityForward;
  id: number;
  project_id: number;
  name: string;
  start_on: Date;
  end_on: Date;
  redmine_issues_url: string;
  test_suite_assignments: TestSuiteAssignment[];
  test_suite_versions: TestSuiteVersion[];
  
  created_at: Date;
  updated_at: Date;
  
  constructor(qf: QualityForward) {
    this.qf = qf;
    this.test_suite_versions = [];
  }
  
  async get() {
    const path = '/api/v2/test_phases.json';
    const url = this.qf.getUrl(path);
    const json: TestPhaseResults = await this.qf.request.get(url);
    const ary: TestPhase[] = [];
    for (let params of json.test_phases) {
      const ts = new TestPhase(this.qf);
      ts.set(params);
      ary.push(ts);
    }
    return ary;
  }
  
  async save() {
    const path = this.id == null ? '/api/v2/test_phases.json' : `/api/v2/test_phases/${this.id}.json`;
    const url = this.qf.getUrl(path);
    const method = this.id == null ? 'post' : 'patch';
    try {
      const json: TestPhaseResult = await this.qf.request[method](url, this.toJSON());
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
    const path = `/api/v2/test_phases/${this.id}.json`;
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
  
  set(params: TestPhaseResult): TestPhase{
    for (let key in params) {
      if (['created_at', 'updated_at', 'start_on', 'end_on'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else if (key === 'test_suite_assignments') {
        this[key] = [];
        for (let obj of params.test_suite_assignments) {
          const t = new TestSuiteAssignment(this.qf);
          t.set(obj);
          this[key].push(t)
        }
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
      if (key === 'test_suite_versions') {
        result['test_suite_version_ids'] = this[key].map(t => t.id);
        continue;
      }
      if (['start_on', 'end_on'].indexOf(key) > -1) {
        result[key] = `${this[key].getFullYear()}-${(this[key].getMonth() + 1)}-${this[key].getDate()}`;
        continue;
      }
      if (['qf', 'id', 'project_id', 'created_at', 'updated_at'].indexOf(key) > -1) {
        continue;
      }
      result[key] = this[key];
    }
    return {test_phase: result};
  }
  
}

export default TestPhase;
