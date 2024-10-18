export const Header = () => {
  return (
    <div
      className="bg-white relative z-[999] bg-no-repeat shadow-md"
      style={{
        backgroundImage: `
          linear-gradient(0deg, var(--bg-fade), transparent 76%),
          linear-gradient(90deg, var(--bg-blue) 0, var(--bg-blue) 50%, var(--bg-red) 0, var(--bg-red))
        `,
        backgroundSize: `100% 94px`
      }}
    >
      <div className="h-[94px] w-full bg-origin-content bg-no-repeat border-separate table mx-auto lg:max-w-[1024px] md:max-w-[762px] sm:max-w-[500px] max-w-[300px]"
        style={{
          backgroundImage: `linear-gradient(0deg,var(--bg-fade) 0,transparent 76%),linear-gradient(to right,var(--bg-blue) 0,var(--bg-blue) 78px,var(--bg-red) 78px,var(--bg-red) 100%)`,
          backgroundSize: `100% 94px`
        }} >
        <div className="site-header__col site-header__col--branding xl:w-[280px] lg:w-[200px] table-cell text-white align-middle">
          <a href="/" className="
              logo block relative h-[42px] w-[220px] before:h-[200px] xl:before:-left-[99%] lg:before:-left-[80%] xl:before:max-w-[900px] lg:before:max-w-[820px] 
              before:pointer-events-none before:absolute before:top-1/2 before:w-[90vw] before:-rotate-2"
          >
            {/* <img className="svg-logo__image" src="/assets/Sky-Sports-Logo-transparent.svg" alt="Sky Sports" onerror="this.onerror=null;this.src='/assets/Sky-Sports-Logo-transparent.png'"> */}
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 313.4 60" className="max-w-full relative white text-white fill-white"><style>.st0</style><path className="st0" d="M67.5 58.9c.8.4 2.4.9 4.5 1 3.5.1 5.4-1.3 6.9-4.4l18.9-42.2c-.8-.4-2.5-.9-3.9-.9-2.4 0-5.7.5-7.8 5.4L80 32.2 68 12.6c-.8-.2-2.7-.6-4.1-.6-4.2 0-6.6 1.6-9.1 4.2L43.1 29l9.4 14.8c1.7 2.7 4 4.1 7.7 4.1 2.4 0 4.5-.6 5.4-1L54.3 29.8l8-8.5L75.5 42l-8 16.9zm-24.8-16c0 3.1-1.2 4.9-7.3 4.9-.8 0-1.5-.1-2.2-.2V6.4c0-3.1 1.1-6.4 7.2-6.4.8 0 1.6.1 2.3.2v42.7zm-12.6-6.2c0 5.8-3.8 10-11.5 10.9-5.5.6-13.6-.1-17.5-.6-.1-.6-.3-1.4-.3-2 0-5.1 2.7-6.2 5.3-6.2 2.7 0 6.9.5 10 .5 3.4 0 4.5-1.2 4.5-2.3 0-1.5-1.4-2.1-4.1-2.6L9.3 33C3.2 31.8 0 27.6 0 23.2c0-5.4 3.8-10 11.4-10.8 5.7-.6 12.7.1 16.5.5.1.7.2 1.3.2 2 0 5.1-2.7 6.2-5.2 6.2-2 0-5-.4-8.5-.4-3.6 0-5 1-5 2.2 0 1.3 1.4 1.8 3.6 2.2l7 1.3c7.1 1.2 10.1 5.3 10.1 10.3M122.7 45.7c-.3-2.8.6-4.3 2-4.3 1.6 0 5.5 1.8 11 1.8 5.8 0 8.1-2.2 8.1-4.9 0-1.9-.8-3.5-6.2-4.9l-6-1.7c-6.4-1.7-9-4.9-9-9 0-4.9 3.9-9.4 12.9-9.4 4 0 9 1 12 2.2.3 2.7-.6 4.2-1.9 4.2-1.5 0-5.1-1.7-10.2-1.7-5.4 0-7.4 1.9-7.4 4.5 0 1.7.8 3.2 5.6 4.6l6.1 1.7c6.7 1.9 9.5 5.1 9.5 9.3 0 5.2-4.1 9.9-13.7 9.9-4.3 0-9.6-1-12.8-2.3zM189.1 30.6c0 10.8-7.6 17.3-16.1 17.3-5.1 0-9.3-2.4-11.7-5.8v15.8c0 1.3-.7 2.1-2.9 2.1-1 0-2-.1-2.5-.3V14.1c.5-.1 1.5-.3 2.5-.3 2.2 0 2.9.8 2.9 2.1v3.3c2.4-3.5 6.5-5.8 11.7-5.8 8.5 0 16.1 6.5 16.1 17.2zm-5.5 0c0-7.4-4.9-12.5-11.6-12.5-4.6 0-8.8 2.6-10.7 6.5v12.1c1.9 3.8 6.1 6.5 10.7 6.5 6.6 0 11.6-5 11.6-12.6zM194.8 30.6c0-9.9 7.3-17.3 17.1-17.3S229 20.7 229 30.6c0 10-7.3 17.3-17.1 17.3-9.8.1-17.1-7.3-17.1-17.3zm28.7 0c0-7.7-5.2-12.5-11.6-12.5s-11.6 4.8-11.6 12.5 5.2 12.6 11.6 12.6 11.6-4.8 11.6-12.6zM256.5 16.4c0 2-.9 2.5-2.9 2.5-3.8 0-9.3 1.3-12 7.4v19.2c0 1.3-.7 2.1-2.9 2.1-1 0-2-.1-2.5-.3V14.1c.5-.1 1.5-.3 2.5-.3 2.2 0 2.9.8 2.9 2.1v4c3.1-4.4 8.4-6.8 14.6-5.8.1.5.3 1.4.3 2.3zM281.7 45.7c-2.9 1.4-6.2 2.2-9.6 2.2-6.5 0-10.5-3.8-10.5-10.2V9.1c0-1.3.7-2.1 2.9-2.1 1 0 2 .2 2.5.4v6.7h13.3c.1.4.2 1.3.2 2.2 0 1.9-.8 2.6-2 2.6H267v18.4c0 4 1.9 5.8 5.7 5.8 3.4 0 5.4-1.3 7-1.3 1.5 0 2.2 1.4 2 3.9zM286.8 45.7c-.3-2.8.6-4.3 2-4.3 1.6 0 5.5 1.8 11 1.8 5.8 0 8.1-2.2 8.1-4.9 0-1.9-.8-3.5-6.2-4.9l-6-1.7c-6.4-1.7-9-4.9-9-9 0-4.9 3.9-9.4 12.9-9.4 4 0 9 1 12 2.2.3 2.7-.6 4.2-1.9 4.2-1.5 0-5.1-1.7-10.2-1.7-5.4 0-7.4 1.9-7.4 4.5 0 1.7.8 3.2 5.6 4.6l6.1 1.7c6.7 1.9 9.5 5.1 9.5 9.3 0 5.2-4.1 9.9-13.7 9.9-4.3 0-9.6-1-12.8-2.3z" /></svg>
          </a>
        </div>

        <div className="text-right text-white sm:table-cell align-middle hidden">
          <div className=" text-white inline-block p-[1px]" data-role="site-login">
            <ul className="site-login__links inline-block list-none p-0">
              <li className="inline-block mr-[4px]"><a href="/watch/get-sky" className="block text-sm/[16px] font-bold max-w-[150px] overflow-hidden px-[5px] py-[9px]">Get Sky Sports</a></li>
              <li className="inline-block mr-[4px]"><a className="block text-sm/[16px] font-bold max-w-[150px] overflow-hidden px-[5px] py-[9px]" href="https://skyid.sky.com/signin/sports?successUrl=https%3A%2F%2Fwww.skysports.com%2Ffootball%2Ffc-porto-vs-man-utd%2Freport%2F521767" data-mobile-url="/sso/signin/mobile" data-desktop-url="/sso/signin/desktop" data-lite="true"><span className="site-login__link--user-icon"></span> Log In</a></li>
            </ul>
          </div>
        </div>

        <a className="site-header__col site-header__col--hamburger site-header__nav-button-hit-area hidden" data-role="open-left-hand-nav" href="#no-js-nav" aria-controls="site-nav-desktop-wrap">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2048 2048" xmlSpace="preserve" className="site-header__nav-button">
            <rect y="384" width="2048" height="256"></rect>
            <rect y="896" width="2048" height="256"></rect>
            <rect y="1408" width="2048" height="256"></rect>
          </svg>
        </a>
      </div>
      {/* BELOW HERE PLEASE GRAHAM */}
      <div className="h-[52px] mx-auto max-w-[1024px] md:max-w-[762px] sm:max-w-[684px] px-[24px] hidden md:block">
        <div className="site-nav-desktop items-center flex h-[52px] justify-between pointer-events-none" role="navigation" aria-label="Main" data-role="main-nav" id="site-nav-desktop-wrap">
          <div className="site-login site-login--mobile hidden" data-role="site-login">

            <ul className="site-login__links">
              <li className="site-login__item site-login__item--promo"><a href="/watch/get-sky" className="site-login__link">Get Sky Sports</a></li>
              <li className="site-login__item"><a className="site-login__link site-login__link--user callfn" href="https://skyid.sky.com/signin/sports?successUrl=https%3A%2F%2Fwww.skysports.com%2F" data-mobile-url="/sso/signin/mobile" data-desktop-url="/sso/signin/desktop" data-lite="true"><span className="site-login__link--user-icon"></span> Log In</a></li>
            </ul>
          </div>
          <ul className="site-nav-desktop__body inline-block list-none p-0">
            <li className="-ml-[10px] cursor-pointer inline-block text-lg/[14px] font-normal relative">
              <a href="/" className="px-[16px] py-[10px]">Home</a>
            </li>
            <li className="-ml-[10px] cursor-pointer inline-block text-lg/[14px] font-normal relative">
              <a href="#no-js-nav" className="px-[16px] py-[10px] site-nav-desktop__item-link--more" aria-expanded="false" aria-controls="site-nav-desktop-sports-more-nav" id="site-nav-desktop-sports-more">
                Sports<svg viewBox="0 0 2048 2048" className="fill-[#707070] inline-block h-[8px] mb-[4px] relative align-middle w-[8px]">
                  <path d="M1024.21 1662.938L2048 638.906l-254.016-253.844-769.773 769.594-769.89-769.594L0 639.022l977.914 977.5"></path>
                </svg>
              </a>
              <nav className="site-nav-desktop__menu hidden" aria-labelledby="site-nav-desktop-sports-more" id="site-nav-desktop-sports-more-nav">
                <div className="site-nav-desktop__menu-body">
                  <ul className="site-nav-desktop__menu-links">
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/football">Football</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/f1">F1</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/cricket">Cricket</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/rugby-union">Rugby Union</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/rugby-league">Rugby League</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/golf">Golf</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/boxing">Boxing</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/olympics">Olympics</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/nfl">NFL</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/tennis">Tennis</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/racing">Racing</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/darts">Darts</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/netball">Netball</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/mma">MMA</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/more-sports">More Sports</a></li>
                  </ul>
                </div>
              </nav>
            </li>
            <li className="-ml-[10px] cursor-pointer inline-block text-lg/[14px] font-normal relative"><a href="/live-scores" className="px-[16px] py-[10px]">Scores</a></li>
            <li className="-ml-[10px] cursor-pointer inline-block text-lg/[14px] font-normal relative"><a href="/watch" className="px-[16px] py-[10px]" data-tracking-key="header|watch-link">Watch</a></li>
            <li className="-ml-[10px] cursor-pointer inline-block text-lg/[14px] font-normal relative"><a href="https://m.skybet.com?aff=9749&amp;dcmp=ss_main_nav" className="px-[16px] py-[10px]" data-tracking-key="header|sky-bet" target="_blank">Sky Bet</a></li>
            <li className="-ml-[10px] cursor-pointer inline-block text-lg/[14px] font-normal relative"><a href="https://shop.skysports.com/en/?_s=bm-fi-skysports-prtsite-web-header-en" className="px-[16px] py-[10px]" target="_blank">Shop</a></li>
            <li className="-ml-[10px] cursor-pointer inline-block text-lg/[14px] font-normal relative">
              <a href="#no-js-nav" className="px-[16px] py-[10px] site-nav-desktop__item-link--more" aria-expanded="false" aria-controls="site-nav-desktop-more-more-nav" id="site-nav-desktop-more-more">More
                <svg viewBox="0 0 2048 2048" className="fill-[#707070] inline-block h-[8px] mb-[4px] relative align-middle w-[8px]">
                <path d="M1024.21 1662.938L2048 638.906l-254.016-253.844-769.773 769.594-769.89-769.594L0 639.022l977.914 977.5"></path>
              </svg></a>
              <div className="site-nav-desktop__menu site-nav-desktop__menu--right" aria-labelledby="site-nav-desktop-more-more" id="site-nav-desktop-more-more-nav">
                <div className="site-nav-desktop__menu-body">
                  <ul className="site-nav-desktop__menu-links hidden">
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/podcasts">Podcasts</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/watch/sport-on-sky">Live on Sky</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/get-sky?dcmp=gss_more_dropdown">Get Sky Sports</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/mobile">Sky Sports App</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="https://www.nowtv.com/watch-sky-sports-online?dcmp=ilc_SSNTV_skysports_hardcode_moredropdownlink" target="_blank">NOW</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="https://www.kickitout.org/forms/online-reporting-form" target="_blank">Kick It Out</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/football/news/topic/8724/black-lives-matter">Black Lives Matter</a></li>
                    <li className="site-nav-desktop__menu-item"><a className="site-nav-desktop__menu-link" href="/football/news/topic/9087/south-asians-in-football">British South Asians in Football</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <a href="/watch" className="site-nav-desktop__watch-button no-default-hover no-default-active" data-tracking-key="header|watch-button"><span className="site-nav-desktop__watch-button__label">Watch Sky Sports</span></a>
        </div>
      </div>
    </div>
  );
}