import { QualityForward } from '../index';
declare class TestCase {
    qf: QualityForward;
    id: number;
    test_suite_version_id: number;
    no: number;
    priority: string;
    category1: string;
    category2: string;
    category3: string;
    category4: string;
    category5: string;
    category6: string;
    category7: string;
    category8: string;
    category9: string;
    category10: string;
    category11: string;
    category12: string;
    category13: string;
    category14: string;
    category15: string;
    category16: string;
    category17: string;
    category18: string;
    category19: string;
    category20: string;
    category21: string;
    category22: string;
    category23: string;
    category24: string;
    category25: string;
    created_at: Date;
    updated_at: Date;
    constructor(qf: QualityForward);
    get(test_suite_id: any, test_suite_version_id: any): Promise<TestCase[]>;
    set(params: any): TestCase;
}
export default TestCase;
