export interface ConsultationRequest {
  fullName: string;
  email: string;
  companyName: string;
  serviceInterest: string;
  message: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
