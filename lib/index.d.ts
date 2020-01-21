/// <reference path="../typings/qferror.d.ts" />
import TestSuite from './test_suite';
import TestPhase from './test_phase';
import TestCycle from './test_cycle';
import TestSuiteVersion from './test_suite_version';
import TestCase from './test_case';
import TestResult from './test_result';
import User from './user';
import Project from './project';
import Request from './request';
import TestSuiteAssignment from './test_suite_assignment';
declare class QualityForward {
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
    constructor(apiKey: string);
    getTestSuites(): Promise<TestSuite[]>;
    getTestPhases(): Promise<TestPhase[]>;
    TestSuite(): TestSuite;
    TestPhase(): TestPhase;
    TestSuiteVersion(): TestSuiteVersion;
    getUrl(path: string): string;
}
export { QualityForward, TestSuite, TestPhase, TestSuiteAssignment, TestSuiteVersion, TestCycle, TestResult, TestCase, Project, User };
