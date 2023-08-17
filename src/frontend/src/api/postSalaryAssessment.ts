//export salary assessment api calls

export const postSalaryAssessment = async () => {
  const response = await fetch(`/api/salaryAssessment`);
  return response.json();
}


