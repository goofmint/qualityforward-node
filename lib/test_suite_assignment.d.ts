/// <reference path="../typings/test_suite_assignment_result.d.ts" />
import { QualityForward, TestCycle } from '../index';
declare class TestSuiteAssignment {
    qf: QualityForward;
    id: number;
    test_phase_id: number;
    test_suite_version_id: number;
    constructor(qf: QualityForward);
    set(params: TestSuiteAssignmentResult): TestSuiteAssignment;
    getTestCycles(): Promise<TestCycle[]>;
}
export default TestSuiteAssignment;
