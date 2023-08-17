//create a react hook to get the salary assessment data using react-query and return the data and functions to update the data

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getSalaryAssessment, postSalaryAssessment } from "@/api";
import { SalaryAssessment } from "../../types";

export const useSalaryAssessment = () => {
  const queryClient = useQueryClient();
  
  const { data, isLoading, isError } = useQuery<SalaryAssessment>(
    "salaryAssessment",
    getSalaryAssessment
  );

  const mutation = useMutation(postSalaryAssessment, {
    onSuccess: () => {
      queryClient.invalidateQueries("salaryAssessment");
    },
  });

  return {
    data,
    isLoading,
    isError,
    postSalaryAssessment: mutation.mutate,
  };
}
