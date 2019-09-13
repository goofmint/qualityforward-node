import TestSuite from './libs/test_suite';
import { TestPhase } from './libs/test_phase';
import { TestCycle } from './libs/test_cycle';
import Project from './libs/project';
import Request from './libs/request';
import TestSuiteAssignment from './libs/test_suite_assignment';

const BASE_URL = 'https://cloud.veriserve.co.jp';

interface QFError {
  code: number;
  text: object;
}

class QualityForward {
  apiKey: string;
  testSuite: TestSuite;
  testPhase: TestPhase;
  testSuiteAssignment: TestSuiteAssignment;
  testCycle: TestCycle;
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
    this.testCycle = new TestCycle(this);
    this.project = new Project(this);
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
  
  getUrl(path:string): string {
    return `${this.baseUrl}${path}?api_key=${this.apiKey}`;
  }
}

export {
  QualityForward,
  TestSuite,
  TestPhase,
  TestSuiteAssignment,
  TestCycle,
  Project
};
