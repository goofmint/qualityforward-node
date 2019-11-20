declare interface TestSuiteVersionResults {
  total_pages: number;
  current_page: number;
  next_url: string;
  test_suite_versions: TestSuiteVersionResult[];
}

declare interface TestSuiteVersionResult {
  id: number;
  test_suite_id: number;
  name: string;
  status: string;
  note: string,
  latest_test_cycle_duration_sec: number;
  lock: boolean;
  lock_memo: string,
  created_at: string;
  updated_at: string;
}

