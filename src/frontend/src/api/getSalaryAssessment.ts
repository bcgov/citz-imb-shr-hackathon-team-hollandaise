//create api call to get salary assessment data
export const getSalaryAssessment = async () => {
  const response = await fetch(`/api/salaryAssessment`);
  return response.json();
}
