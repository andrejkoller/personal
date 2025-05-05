export const CookieBanner = () => {
  return (
    <div id="cookie-banner" className="cookie-banner-container">
      <div class="cookie-banner-content">
        <div class="cookie-info">
          <span>
            This website uses cookies due to the integration of youtube videos.
          </span>
          <a
            href="https://policies.google.com/technologies/cookies?hl=en-US"
            target="_blank"
          >
            More info
          </a>
        </div>
        <div class="cookie-button-container">
          <button onclick="closeCookie()">Got It!</button>
        </div>
      </div>
    </div>
  );
};
