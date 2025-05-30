import { useState } from "react";
import { env } from "../utils/env";
import { getAuthToken } from "../utils/helper";

const baseUrl = `${env.backendUrl}/v1`;

function useApi() {
  const [loading, setLoading] = useState(false);

  const authToken = getAuthToken();

  const apiFn = async ({ url, options }) => {
    try {
      const updateBody = (data) => {
        if (data instanceof FormData) {
          return data;
        }
        return JSON.stringify(data);
      };

      const updateHeaders = () => {
        let tempHeaders = {
          Authorization: authToken ? "Bearer " + authToken : undefined,
          "Content-Type": "application/json",
          ...options?.headers,
        };
        if (options?.body instanceof FormData) {
          delete tempHeaders["Content-Type"];
        }

        for (let header in tempHeaders) {
          if (!tempHeaders[header]) {
            delete tempHeaders[header];
          }
        }
        return tempHeaders;
      };
      const headers = updateHeaders();
      setLoading(true);
      const response = await fetch(baseUrl + url, {
        ...options,
        body: options?.body && updateBody(options?.body),
        headers: headers && Object.keys(headers).length ? headers : undefined,
      });
      console.log(response);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }

        const errorData = await response.json();
        const errorMessage = errorData?.message;
        setLoading(false);
        return {
          response: null,
          error: errorMessage ? errorMessage : "Error Occurred",
        };
      }

      setLoading(false);

      const result = await response.json();

      return { response: result, error: null };
    } catch (error) {
      setLoading(false);
      return {
        response: null,
        error: error?.message ? error?.message : "Error Occurred",
      };
    }
  };

  return [apiFn, loading];
}

export default useApi;
