declare interface TestCycleResults {
  total_pages: number;
  current_page: number;
  next_url: string;
  test_cycles: TestCycleResult[];
}

declare interface TestCycleResult {
  id: number;
  status: string;
  name: string;
  target_priorities: string[]
  test_suite_assignment_id: number;
  start_on: string;
  end_on: string;
  created_at: string;
  updated_at: string;
}
