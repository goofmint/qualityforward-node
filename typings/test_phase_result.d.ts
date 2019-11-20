declare interface TestPhaseResults {
  total_pages: number;
  current_page: number;
  next_url: string;
  test_phases: TestPhaseResult[];
}

declare interface TestPhaseResult {
  id: number;
  project_id: number;
  name: string;
  start_on: string;
  end_on: string;
  redmine_issues_url: string;
  test_suite_assignments: TestSuiteAssignmentResult[];
  created_at: string;
  updated_at: string;
}
