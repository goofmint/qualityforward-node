import { QualityForward } from '../index';
declare class Request {
    qf: QualityForward;
    constructor(qf: QualityForward);
    get(url: string): Promise<any>;
    post(url: string, data: object): Promise<any>;
    patch(url: string, data: object): Promise<any>;
    destroy(url: string): Promise<any>;
}
export default Request;
