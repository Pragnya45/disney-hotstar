import { useInfiniteQuery } from "@tanstack/react-query";
import { handleApi } from "../Services/api";

export const usePaginationApi = ({
  query,
  url,
  body,
  queryKey,
  enabled = true,
}) => {
  const obj = useInfiniteQuery({
    queryKey: [queryKey],
    enabled,
    queryFn: async ({ pageParam = 1 }) => {
      try {
        return await handleApi({
          query: `?page=${pageParam}${query ? query : ""}`,
          url,
          body,
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      try {
        const addPage = lastPage?.response?.page + 1;
        const totalPages = lastPage?.response?.totalPages;

        if (!addPage && !totalPages) {
          const resultObj = pages[pages?.length - 1];
          if (resultObj && !resultObj?.response?.results?.length) {
            return undefined;
          }
          return lastPageParam ? lastPageParam + 1 : 2;
        }

        return totalPages >= addPage ? addPage : undefined;
      } catch (error) {
        console.error(error);
      }
    },
    select: (data) =>
      data.pages.flatMap((obj) => obj?.response?.results).filter((obj) => obj),
  });

  return obj;
};
