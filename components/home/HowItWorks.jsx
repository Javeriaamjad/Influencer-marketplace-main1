const HowItWorks = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="row-holder">
        <h2 className="row-title text-pink-500 font-extrabold text-6xl funky-title" id="howitworks">
          How Influenzar Works
        </h2>
        <h3 className="row-subtitle text-gray-700 font-bold">
          Everything you need to run your influencer campaigns, and more.
        </h3>
        <div className="steps-holder grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="step-holder relative border-2 border-pink-400 p-4 rounded-lg shadow-lg shadow-purple-300">
            <div className="step-img-holder relative w-full h-48 overflow-hidden rounded-lg">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1683584405772-ae58712b4172?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBpYyUyMGZvciUyMCUyMnNlYXJjaCUyMGluZmx1ZW5jZXIlMjIlMjBoYXZpbmclMjBsaWdodCUyMHB1cnBsZSUyMHRoZW1lfGVufDB8fDB8fHww"
                alt="Influencer posing"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="step-txt-holder mt-4">
              <div className="step-num text-purple-700 text-3xl font-bold">1</div>
              <h3 className="step-title text-2xl font-semibold">Search Influencers</h3>
              <div className="step-txt text-gray-600">
                Search through thousands of vetted Instagram, Facebook, and YouTube influencers.
              </div>
            </div>
          </div>
          <div className="step-holder relative border-2 border-pink-400 p-4 rounded-lg shadow-lg shadow-purple-300">
            <div className="step-img-holder relative w-full h-48 overflow-hidden rounded-lg">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1674506652942-409ccf9ee0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xnYUtyOEx1VXpLa3x8ZW58MHx8fHx8"
                alt="Influencer posing"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="step-txt-holder mt-4">
              <div className="step-num text-purple-700 text-3xl font-bold p-2">2</div>
              <h3 className="step-title text-2xl font-semibold p-2">Purchase Securely</h3>
              <div className="step-txt text-gray-600 p-2">
                Safely purchase through us. We hold your payment until the work is completed.
              </div>
            </div>
          </div>
          <div className="step-holder relative border-2 border-pink-400 p-4 rounded-lg shadow-lg shadow-purple-300">
            <div className="step-img-holder relative w-full h-48 overflow-hidden rounded-lg">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1506480704700-d4a381ecd2f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fCUyMnF1YWxpdHklMjBjb250ZW50JTIyJTIwZm9yJTIwaW5mbHVlbmNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Influencer posing"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="step-txt-holder mt-4">
              <div className="step-num text-purple-700 text-3xl font-bold p-2">3</div>
              <h3 className="step-title text-2xl font-semibold p-2">Receive Quality Content</h3>
              <div className="step-txt text-gray-600 p-2">
                Receive your high quality content from influencers directly through the platform.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-holder mt-12">
        <div className="features-holder grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="feature-holder bg-white p-4 rounded-lg shadow-md border-2 border-purple-400 shadow-lg shadow-pink-300">
            <div className="feature-title flex items-center text-black-700 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/money.svg"
                alt="Money icon"
                loading="lazy"
              />
              No Upfront Cost
            </div>
            <div className="feature-txt mt-2 text-gray-600">
              Search influencers for free. No subscriptions, contracts or hidden fees.
            </div>
          </div>
          <div className="feature-holder bg-white p-4 rounded-lg shadow-md border-2 border-purple-400 shadow-lg shadow-pink-300">
            <div className="feature-title flex items-center text-black-700 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/check.svg"
                alt="Check icon"
                loading="lazy"
              />
              Vetted Influencers
            </div>
            <div className="feature-txt mt-2 text-gray-600">
              Every influencer is vetted by us. Always receive high-quality, professional content.
            </div>
          </div>
        <div className="feature-holder bg-white p-4 rounded-lg shadow-md border-2 border-purple-400 shadow-lg shadow-pink-300">
            <div className="feature-title flex items-center text-black-700 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/chat.svg"
                alt="Chat icon"
                loading="lazy"
              />
              Instant Chat
            </div>
            <div className="feature-txt mt-2 text-gray-600">
              Instantly chat with influencers and stay in touch throughout the whole transaction.
            </div>
          </div>
          <div className="feature-holder bg-white p-4 rounded-lg shadow-md border-2 border-purple-400 shadow-lg shadow-pink-300">
            <div className="feature-title flex items-center text-black-700 font-semibold">
              <img
                className="feature-img w-6 h-6 mr-2"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/secure.svg"
                alt="Lock icon"
                loading="lazy"
              />
              Secure Purchases
            </div>
            <div className="feature-txt mt-2 text-gray-600">
              Your money is held safely until you approve the influencer’s work.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
