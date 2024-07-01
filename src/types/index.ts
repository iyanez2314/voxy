export interface SessionType {
  id: string;
  grade: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type DbUser = {
  id: string;
  clerk_id: string;
  full_name: string;
  ai_id: string;
  current_session: string;
  session_count: number;
  sub_type: SUB_TYPE;
};

enum SUB_TYPE {
  FREE = "FREE",
  PAID = "PRO",
}
