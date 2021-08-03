import { useState, Suspense } from "react";
import Loading from "../shared/Loading";
import SectionContainer from "../../Layout/SectionContainer";
import {
  IconPlay,
  ImgVideoPreview,
  ImgVideoPreviewSmall,
  ImgVideoPreviewMedium,
} from "../../utils/imgLoader";
const VideoPreview = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <SectionContainer>
      <div className="content-width-extra-large page-title">
        <h2 className="large-heading" data-aos="fade-in-down">
          We have your back through your life journey.
        </h2>
        <div className="large-text" data-aos="fade-in-down">
          We can easily and quickly tell you if you policy matches your current
          needs, without any obligations on your part!
        </div>
      </div>
      <div className="wide-video-wrapper">
        <div>
          <div className="video-wrapper shadow-large">
            <img
              src={ImgVideoPreview}
              sizes="100vw"
              srcSet={`
                    ${ImgVideoPreviewSmall} 500w,
                    ${ImgVideoPreviewMedium} 800w,
                    ${ImgVideoPreview} 939w
                  `}
              alt="Video preview"
            />
            <button
              className="video-button w-inline-block w-lightbox"
              onClick={() => setShowVideo(!showVideo)}
            >
              <img src={IconPlay} alt="Video play" />
            </button>
          </div>
        </div>
      </div>

      {showVideo && (
        <Suspense fallback={<Loading />}>
          <div className="w-lightbox-show">
            <div className="w-lightbox-container">
              <div className="w-lightbox-content">
                <div className="w-lightbox-view">
                  <div className="w-lightbox-frame">
                    <figure className="w-lightbox-figure">
                      <img
                        className="w-lightbox-img w-lightbox-image"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg%20
                    xmlns=%22http://www.w3.org/2000/svg%22%20width=%22940%22%20height=%22528%22/%3E"
                        data-nsfw-filter-status="sfw"
                        alt="video file"
                      />
                      <iframe
                        className="embedly-embed w-lightbox-embed"
                        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2F2sg8dhb00j&amp;display_name=Wistia%2C+Inc.&amp;url=https%3A%2F%2Fstarga.wistia.com%2Fmedias%2F2sg8dhb00j&amp;image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F20dfa1d9fb5e57b5e69088dd56f418a31cfcc6e7.jpg%3Fimage_crop_resized%3D640x360&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=wistia"
                        width="940"
                        height="528"
                        scrolling="no"
                        title="Wistia, Inc. embed"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen={true}
                      ></iframe>
                    </figure>
                  </div>
                </div>
                <div className="w-lightbox-spinner w-lightbox-hide"></div>
                <div
                  className="w-lightbox-control w-lightbox-close"
                  onClick={() => setShowVideo(!showVideo)}
                ></div>
              </div>
            </div>
          </div>
        </Suspense>
      )}
    </SectionContainer>
  );
};

export default VideoPreview;
