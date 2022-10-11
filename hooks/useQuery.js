import { useQuery } from "@tanstack/react-query";

const useQueryCustom = ({
    queryKey,
    invalidateOptions = null,
    fetchFn,
    fetchArgs
}) => {
    return useQuery([queryKey, invalidateOptions], () => fetchFn(fetchArgs))
}

export default useQueryCustom;