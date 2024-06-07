const HowItWorks = () => {
  return (
    <div className="p-8 bg-gray-400">
      <div className="row-holder">
        <h2
          className="row-title text-white font-extrabold text-6xl funky-title text-center mb-12"
          id="howitworks"
        >
          How Influenzar Works
        </h2>
        <br></br>
        <br></br>
       
      </div>
      <div className="row-holder mt-12">
        <div className="features-holder grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="feature-holder bg-gray-800 p-4 rounded-lg  border-2 border-gray-800">
            <div className="feature-title flex items-center text-purple-300 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/money.svg"
                alt="Money icon"
                loading="lazy"
              />
              No Upfront Cost
            </div>
            <div className="feature-txt mt-2 text-gray-300">
              Search influencers for free. No subscriptions, contracts or hidden
              fees.
            </div>
          </div>
          <div className="feature-holder bg-gray-800 p-4 rounded-lg  border-2 border-gray-800">
            <div className="feature-title flex items-center text-purple-300 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/check.svg"
                alt="Check icon"
                loading="lazy"
              />
              Vetted Influencers
            </div>
            <div className="feature-txt mt-2 text-gray-300">
              Every influencer is vetted by us. Always receive high-quality,
              professional content.
            </div>
          </div>
          <div className="feature-holder bg-gray-800 p-4 rounded-lg  border-2 border-gray-800">
            <div className="feature-title flex items-center text-purple-300 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/chat.svg"
                alt="Chat icon"
                loading="lazy"
              />
              Instant Chat
            </div>
            <div className="feature-txt mt-2 text-gray-300">
              Instantly chat with influencers and stay in touch throughout the
              whole transaction.
            </div>
          </div>
          <div className="feature-holder bg-gray-800 p-4 rounded-lg  border-2 border-gray-800">
            <div className="feature-title flex items-center text-purple-300 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/secure.svg"
                alt="Lock icon"
                loading="lazy"
              />
              Secure Purchases
            </div>
            <div className="feature-txt mt-2 text-gray-300">
              Your money is held safely until you approve the influencer’s work.
            </div>
          </div>
          <div className="feature-holder bg-gray-800 p-4 rounded-lg  border-2 border-gray-800">
            <div className="feature-title flex items-center text-purple-300 font-semibold">
              <img
                className="feature-img w-30 h-25 mr-2"
                src="/assets/searchlogo.png"
                alt="Check icon"
                loading="lazy"
              />
              Search Influencers
            </div>
            <div className="feature-txt mt-2 text-gray-300">
              Search through thousands of vetted Instagram, Facebook, and
              YouTube influencers.
            </div>
          </div>
          <div className="feature-holder bg-gray-800 p-4 rounded-lg  border-2 border-gray-800">
            <div className="feature-title flex items-center text-purple-300 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/check.svg"
                alt="Check icon"
                loading="lazy"
              />
              Receive Quality Content
            </div>
            <div className="feature-txt mt-2 text-gray-300">
              Receive your high quality content from influencers directly
              through the platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
