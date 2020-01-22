/// <reference path="typings/qferror.d.ts" />
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
    match(params: Object, queries: Object): boolean;
    getTestSuites(params?: {}): Promise<TestSuite[]>;
    getTestPhases(params?: {}): Promise<TestPhase[]>;
    TestSuite(): TestSuite;
    TestPhase(): TestPhase;
    TestSuiteVersion(): TestSuiteVersion;
    getUrl(path: string): string;
}
export { QualityForward, TestSuite, TestPhase, TestSuiteAssignment, TestSuiteVersion, TestCycle, TestResult, TestCase, Project, User };
