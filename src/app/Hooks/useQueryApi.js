import { handleApi } from "../Services/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryApi({
  query,
  url,
  body,
  queryKey,
  enabled = true,
}) {
  const obj = useQuery({
    queryKey: [queryKey],
    enabled,
    queryFn: () =>
      handleApi({
        query: `${query ? query : ""}`,
        url,
        body,
      }),
  });

  return obj;
}
