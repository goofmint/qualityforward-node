import { QualityForward, User } from '../index';
declare class TestResult {
    qf: QualityForward;
    id: number;
    user: User;
    test_case_id: number;
    test_case_no: number;
    test_cycle_id: number;
    result: string;
    result_supplement: string;
    executed_at: Date;
    content1: string;
    content2: string;
    content3: string;
    created_at: Date;
    updated_at: Date;
    constructor(qf: QualityForward);
    get(test_phase_id: any, test_suite_assignment_id: any, test_cycle_id: any): Promise<TestResult[]>;
    set(params: any): TestResult;
}
export default TestResult;
