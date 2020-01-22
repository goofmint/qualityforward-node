/// <reference path="../typings/test_suite_version_result.d.ts" />
import { QualityForward, TestCase } from '../index';
import User from './user';
declare class TestSuiteVersion {
    qf: QualityForward;
    id: number;
    user: User;
    test_suite_id: number;
    name: string;
    status: string;
    note: string;
    latest_test_cycle_duration_sec: number;
    lock: boolean;
    lock_memo: string;
    created_at: Date;
    updated_at: Date;
    constructor(qf: QualityForward);
    set(params: TestSuiteVersionResult): TestSuiteVersion;
    getTestCases(): Promise<TestCase[]>;
    save(): Promise<boolean>;
    toJSON(): object;
}
export default TestSuiteVersion;
