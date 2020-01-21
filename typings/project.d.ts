import { QualityForward } from '../index';
import { Tenant } from './tenant';

declare interface Project {
  qf: QualityForward;
}

declare interface ProjectResult {
  id: number;
  name: string;
  tenant: Tenant;
  description: string;
  label_pass: string;
  label_fail: string;
  label_skip: string;
  label_cut: string;
  label_block: string;
  label_na: string;
  label_qa: string;
  excluded_from_progress_pass: boolean;
  excluded_from_progress_fail: boolean;
  excluded_from_progress_skip: boolean;
  excluded_from_progress_cut: boolean;
  excluded_from_progress_block: boolean;
  excluded_from_progress_na: boolean;
  excluded_from_progress_qa: boolean;
  supplement_pass: string;
  supplement_fail: string;
  supplement_skip: string;
  supplement_cut: string;
  supplement_block: string;
  supplement_na: string;
  supplement_qa: string;
  default_label_category1: string;
  default_label_category2: string;
  default_label_category3: string;
  default_label_category4: string;
  default_label_category5: string;
  default_label_category6: string;
  default_label_category7: string;
  default_label_category8: string;
  default_label_category9: string;
  default_label_category10: string;
  default_label_category11: string;
  default_label_category12: string;
  default_label_category13: string;
  default_label_category14: string;
  default_label_category15: string;
  default_label_category16: string;
  default_label_category17: string;
  default_label_category18: string;
  default_label_category19: string;
  default_label_category20: string;
  default_label_category21: string;
  default_label_category22: string;
  default_label_category23: string;
  default_label_category24: string;
  default_label_category25: string;
  default_label_content1: string;
  default_label_content2: string;
  default_label_content3: string;
  default_label_content4: string;
  default_label_content5: string;
  default_label_content6: string;
  default_label_content7: string;
  default_label_content8: string;
  default_label_content9: string;
  default_label_content10: string;
  created_at: string;
  updated_at: string;
}

