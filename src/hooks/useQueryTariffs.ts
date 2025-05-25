import { useQuery } from "@tanstack/react-query";
import { tariffsApi } from "../mocks/tariffs";

export const useQueryTariffs = () => {
const {data, isLoading, isError} = useQuery({
    queryKey: ['tariffs'],
    queryFn: () => tariffsApi.getTariffs(),
});

return {data, isLoading, isError};
}