/// <reference path="../typings/test_suite_assignment_result.d.ts" />
/// <reference path="../typings/test_phase_result.d.ts" />
import { QualityForward, TestSuiteAssignment, TestSuiteVersion } from '../index';
declare class TestPhase {
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
    constructor(qf: QualityForward);
    get(queries?: {}): Promise<TestPhase[]>;
    save(): Promise<boolean>;
    destroy(): Promise<boolean>;
    set(params: TestPhaseResult): TestPhase;
    toJSON(): object;
}
export default TestPhase;
