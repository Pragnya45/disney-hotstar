import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";
import DetailedView from "@/app/Components/DetailedView";
import { releases, cardData } from "../utils/data";
import useQueryApi from "@/app/Hooks/useQueryApi";
import { urlObj } from "@/app/utils/url";
import { useEffect } from "react";
import useApi from "@/app/Hooks/useApi";
import { profileState } from "@/app/Redux/profileSlice";
import { useSelector } from "react-redux";
import useNotification from "@/app/Hooks/useNotification";

export default function SportDetails() {
  const searchParams = useSearchParams();
  const releaseId = searchParams.get("releaseId");
  const { email } = useSelector(profileState);
  const [apiFn] = useApi();
  const { showMessage } = useNotification();
  const { data: videoData, refetch } = useQueryApi({
    url: `${urlObj.video}/${releaseId}`,
    queryKey: `videodata`,
  });
  useEffect(() => {
    refetch();
  }, [releaseId]);
  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await apiFn({
        url: `${urlObj.user}/add-watch-history`,
        options: {
          method: "POST",
          body: {
            email: email,
            videoId: releaseId,
          },
        },
      });
      if (error) {
        showMessage({ value: error, type: "error" });
        return;
      }
      console.log(response);
    };
    if (email) {
      fetchData();
    }
  }, [releaseId]);
  const details = releases.find((release) => release.id === releaseId);
  return (
    <Wrapper>
      <DetailedView details={videoData?.response} />
      <SliderCardWrapper>
        <SliderComponent title="More Like This" />
        <SliderComponent title="Thriller Shows" data={cardData} />
      </SliderCardWrapper>
    </Wrapper>
  );
}
const SliderCardWrapper = styled.div`
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
