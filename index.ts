import TestSuite from './libs/test_suite';
import Request from './libs/request';
const BASE_URL = 'https://cloud.veriserve.co.jp';

interface QFError {
  code: number;
  text: object;
}

class QualityForward {
  apiKey: string;
  testSuite: TestSuite;
  request: Request;
  baseUrl: string;
  error: QFError;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = BASE_URL;
    this.request = new Request(this);
    this.testSuite = new TestSuite(this);
  }
  
  async getTestSuites() {
    return await this.testSuite.get();
  }
  
  TestSuite(): TestSuite {
    return new TestSuite(this);
  }
  
  getUrl(path:string): string {
    return `${this.baseUrl}${path}?api_key=${this.apiKey}`;
  }
}

export {
  QualityForward,
  TestSuite
};
