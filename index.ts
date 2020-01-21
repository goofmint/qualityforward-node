/// <reference path="./typings/qferror.d.ts" />

import TestSuite from './lib/test_suite';
import TestPhase from './lib/test_phase';
import TestCycle from './lib/test_cycle';
import TestSuiteVersion from './lib/test_suite_version';
import TestCase from './lib/test_case';
import TestResult from './lib/test_result';
import User from './lib/user';

import Project from './lib/project';
import Request from './lib/request';
import TestSuiteAssignment from './lib/test_suite_assignment';

const BASE_URL = 'https://cloud.veriserve.co.jp';

class QualityForward {
  apiKey: string;
  testSuite: TestSuite;
  testPhase: TestPhase;
  testSuiteAssignment: TestSuiteAssignment;
  testSuiteVersion: TestSuiteVersion;
  testCycle: TestCycle;
  testCase: TestCase;
  testResult: TestResult;
  project: Project;
  request: Request;
  baseUrl: string;
  error: QFError;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = BASE_URL;
    this.request = new Request(this);
    this.testSuite = new TestSuite(this);
    this.testPhase = new TestPhase(this);
    this.testSuiteAssignment = new TestSuiteAssignment(this);
    this.testSuiteVersion = new TestSuiteVersion(this);
    this.testCycle = new TestCycle(this);
    this.testCase = new TestCase(this);
    this.project = new Project(this);
    this.testResult = new TestResult(this);
  }
  
  async getTestSuites() {
    return await this.testSuite.get();
  }
  
  async getTestPhases() {
    return await this.testPhase.get();
  }
  
  TestSuite(): TestSuite {
    return new TestSuite(this);
  }
  
  TestPhase(): TestPhase {
    return new TestPhase(this);
  }
  
  TestSuiteVersion(): TestSuiteVersion {
    return new TestSuiteVersion(this);
  }
  
  getUrl(path:string): string {
    return `${this.baseUrl}${path}?api_key=${this.apiKey}`;
  }
}

export {
  QualityForward,
  TestSuite,
  TestPhase,
  TestSuiteAssignment,
  TestSuiteVersion,
  TestCycle,
  TestResult,
  TestCase,
  Project,
  User
};
