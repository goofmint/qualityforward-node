import {
  TestSuite,
  TestSuiteAssignment,
  TestSuiteVersion,
  TestCase,
  TestResult,
  TestCycle,
  TestPhase,
  Project,
} from '../index';

import {Request} from './request';

declare interface QualityForward {
  apiKey: string;
  testPhase: TestPhase;
  project: Project;
  request: Request;
  testSuite: TestSuite;
  testSuiteAssignment: TestSuiteAssignment;
  testSuiteVersion: TestSuiteVersion;
  testCycle: TestCycle;
  testCase: TestCase;
  testResult: TestResult;
  baseUrl: string;
  error: QFError;
}
