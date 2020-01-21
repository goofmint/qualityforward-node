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
    get(): Promise<TestPhase[]>;
    save(): Promise<boolean>;
    destroy(): Promise<boolean>;
    set(params: TestPhaseResult): TestPhase;
    toJSON(): object;
}
export default TestPhase;
