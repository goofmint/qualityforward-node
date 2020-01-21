/// <reference path="../typings/test_cycle_result.d.ts" />
import { QualityForward } from '../index';
declare class TestCycle {
    qf: QualityForward;
    id: number;
    test_suite_assignment_id: number;
    test_phase_id: number;
    status: string;
    name: string;
    target_priorities: string[];
    target_test_case_no_list: number[];
    start_on: Date;
    end_on: Date;
    created_at: Date;
    updated_at: Date;
    constructor(qf: QualityForward);
    get(): Promise<TestCycle[]>;
    set(params: TestCycleResult): TestCycle;
    getTestResults(): Promise<import("./test_result").default[]>;
}
export default TestCycle;
