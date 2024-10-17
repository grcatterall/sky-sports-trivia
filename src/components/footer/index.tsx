export const Footer = () => {
    return (
        <footer id="site-footer" className="
        bg-[var(--component-shade)]
        text-[var(--shade-3)]
        text-md/[var(--supporting-text)]
        font-normal
        " data-component-name="ui-digrev-footer" role="contentinfo" data-init="true">
            <div className="max-w-[1024px] md:max-w-[762px] mx-auto px-[24px] py-[calc(10px*4)]">
                <ul className="border-b-[1px] border-b-slate-300 list-none">
                    <li className="inline-block mr-6">
                        <a href="https://x.com/skysports" target="_blank" className="inline px-[1px] py-[1px] text-sm/[16px]">
                            <span className="h-[40px] mr-[4px] inline-block relative align-middle w-[40px]" aria-hidden="true">
                                <svg className="fill-[var(--shade-3)] h-full left-0 absolute -top-[0.1rem] w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M17.5 14.7948L23.3642 8.125H21.9751L16.881 13.9151L12.8154 8.125H8.125L14.2743 16.8815L8.125 23.875H9.51415L14.8902 17.7591L19.1847 23.875H23.8751M10.0155 9.15H12.1497L21.974 22.9004H19.8394"></path>
                                </svg>
                            </span>X
                        </a>
                    </li>
                    <li className="inline-block mr-6">
                        <a href="https://www.facebook.com/SkySports" target="_blank" className="inline px-[1px] py-[1px] text-sm/[16px]">
                            <span className="h-[40px] mr-[4px] inline-block relative align-middle w-[40px]" aria-hidden="true">
                                <svg className="fill-[var(--shade-3)] h-full left-0 absolute -top-[0.1rem] w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path d="M21 10.07V7.336c-2.826-.841-6.956-.21-6.956 3.154v3.365H11v3.365h3.044v7.781h3.696V17.22h2.609l.435-3.365h-3.261v-2.313c0-1.682 2.39-1.472 3.478-1.472z" clipRule="evenodd" fillRule="evenodd"></path>
                                </svg>
                            </span>Facebook
                        </a>
                    </li>
                    <li className="inline-block mr-6">
                        <a href="https://www.tiktok.com/@skysports" target="_blank" className="inline px-[1px] py-[1px] text-sm/[16px]">
                            <span className="h-[40px] mr-[4px] inline-block relative align-middle w-[40px]" aria-hidden="true">
                                <svg className="fill-[var(--shade-3)] h-full left-0 absolute -top-[0.1rem] w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path d="M21.3972 10.6078C20.4244 9.97567 19.7225 8.96387 19.5035 7.78513C19.4562 7.53052 19.4299 7.26823 19.4299 7H16.3251L16.3199 19.4018C16.268 20.7908 15.1211 21.9052 13.7151 21.9052C13.2782 21.9052 12.8667 21.7966 12.5044 21.6063C11.6735 21.1707 11.1048 20.3028 11.1048 19.3043C11.1048 17.8699 12.2759 16.7027 13.7148 16.7027C13.9836 16.7027 14.2411 16.7471 14.4847 16.8228V13.6638C14.2324 13.6292 13.9762 13.6083 13.7148 13.6083C10.5637 13.6083 8 16.1631 8 19.3043C8 21.2312 8.96578 22.9366 10.44 23.9676C11.368 24.6176 12.4974 25 13.7151 25C16.8665 25 19.4299 22.4448 19.4299 19.3043V13.0153C20.6477 13.8863 22.1398 14.3997 23.75 14.3997V11.3049C22.8827 11.3049 22.075 11.0482 21.3972 10.6078Z"></path>
                                </svg>
                            </span>TikTok
                        </a>
                    </li>
                    <li className="inline-block mr-6">
                        <a href="https://www.instagram.com/skysports" target="_blank" className="inline px-[1px] py-[1px] text-sm/[16px]">
                            <span className="h-[40px] mr-[4px] inline-block relative align-middle w-[40px]" aria-hidden="true">
                                <svg className="fill-[var(--shade-3)] h-full left-0 absolute -top-[0.1rem] w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <defs>
                                        <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            {/* <stop offset="0%" style="stop-color:#BB00B6;stop-opacity:1"></stop>
                                            <stop offset="22.779%" style="stop-color:#CE007C;stop-opacity:1"></stop>
                                            <stop offset="48.415%" style="stop-color:#F20000;stop-opacity:1"></stop>
                                            <stop offset="70.142%" style="stop-color:#FD6200;stop-opacity:1"></stop>
                                            <stop offset="100%" style="stop-color:#FFD700;stop-opacity:1"></stop> */}
                                        </linearGradient>
                                    </defs>
                                    <path className="insta-icon-path" fillRule="evenodd" clipRule="evenodd" d="M23.3267 19.6375C23.215 22.0563 22.0787 23.2158 19.6375 23.3268C18.688 23.3703 18.4045 23.3793 16 23.3793C13.597 23.3793 13.312 23.3703 12.3632 23.3268C9.91824 23.215 8.78499 22.0525 8.67399 19.6368C8.63049 18.688 8.62149 18.4038 8.62149 16C8.62149 13.597 8.63124 13.3128 8.67399 12.3633C8.78574 9.94303 9.92199 8.78504 12.3632 8.67404C13.3127 8.63129 13.597 8.62229 16 8.62229C18.403 8.62229 18.688 8.63129 19.6375 8.67479C22.0765 8.78579 23.2157 9.94304 23.3267 12.364C23.3702 13.3128 23.3785 13.5978 23.3785 16.0008C23.3785 18.4045 23.3695 18.6888 23.3267 19.6375ZM24.946 12.2898C24.799 9.02425 22.9833 7.20475 19.7118 7.05475C18.751 7.0105 18.4443 7 16 7C13.5558 7 13.2498 7.0105 12.2898 7.054C9.02125 7.204 7.20475 9.0175 7.05475 12.289C7.0105 13.2498 7 13.5558 7 16C7 18.4443 7.0105 18.751 7.054 19.711C7.204 22.9795 9.0175 24.796 12.289 24.946C13.2498 24.9895 13.5558 25 16 25C18.4443 25 18.751 24.9895 19.711 24.946C22.9765 24.796 24.7975 22.9825 24.9452 19.711C24.9895 18.751 25 18.4443 25 16C25 13.5558 24.9895 13.2498 24.946 12.2898Z"></path>
                                    <path className="insta-icon-path" fillRule="evenodd" clipRule="evenodd" d="M20.8044 10.1163C20.2074 10.1163 19.7236 10.6 19.7236 11.1963C19.7236 11.7925 20.2074 12.2763 20.8044 12.2763C21.4006 12.2763 21.8836 11.7925 21.8836 11.1963C21.8836 10.6 21.4006 10.1163 20.8044 10.1163Z"></path>
                                    <path className="insta-icon-path" fillRule="evenodd" clipRule="evenodd" d="M16.0004 19C14.3436 19 13.0004 17.6575 13.0004 16C13.0004 14.3433 14.3436 13 16.0004 13C17.6571 13 19.0004 14.3433 19.0004 16C19.0004 17.6575 17.6571 19 16.0004 19ZM16.0004 11.3785C13.4482 11.3785 11.3789 13.4478 11.3789 16C11.3789 18.5523 13.4482 20.6223 16.0004 20.6223C18.5527 20.6223 20.6219 18.553 20.6219 16C20.6219 13.4478 18.5527 11.3785 16.0004 11.3785Z"></path>
                                </svg>
                            </span>
                            Instagram
                        </a>
                    </li>
                    <li className="inline-block mr-6">
                        <a href="https://www.youtube.com/@SkySports" target="_blank" className="inline px-[1px] py-[1px] text-sm/[16px]">
                            <span className="h-[40px] mr-[4px] inline-block relative align-middle w-[40px]" aria-hidden="true">
                                <svg className="fill-[var(--shade-3)] h-full left-0 absolute -top-[0.1rem] w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.5714 10H10.4286C8.5 10 7 11.7143 7 13.4286V19.4286C7 21.3571 8.5 22.8571 10.4286 22.8571H21.5714C23.5 22.8571 25 21.3571 25 19.4286V13.4286C25 11.7143 23.5 10 21.5714 10ZM19 16.4286L14.2857 13.8571V19.2143L19 16.4286Z"></path>
                                </svg>
                            </span>YouTube
                        </a>
                    </li>
                    <li className="inline-block mr-6">
                        <a href="https://whatsapp.com/channel/0029VaLuBby1SWsvuBCrf53l" target="_blank" className="inline px-[1px] py-[1px] text-sm/[16px]">
                            <span className="h-[40px] mr-[4px] inline-block relative align-middle w-[40px]" aria-hidden="true">
                                <svg className="fill-[var(--shade-3)] h-full left-0 absolute -top-[0.1rem] w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M 24.9999 15.7802 C 24.9999 20.6293 21.0318 24.5603 16.1369 24.5603 C 14.577 24.5603 13.1112 24.1611 11.838 23.4602 C 11.8326 23.4609 11.8275 23.462 11.8227 23.4635 C 11.7396 23.4866 11.6576 23.5134 11.5756 23.5401 H 11.5756 C 11.5375 23.5525 11.4993 23.5649 11.4611 23.5771 L 10.8581 23.7677 C 9.60184 24.1648 8.34523 24.5621 7.08863 24.9602 C 7.07022 24.966 7.05329 24.9765 7.03616 24.9872 C 7.0291 24.9915 7.02201 24.9959 7.01477 25 H 7 C 7.00203 24.9903 7.00382 24.9805 7.0056 24.9708 H 7.0056 C 7.01004 24.9465 7.01444 24.9225 7.02245 24.8999 C 7.53237 23.3921 8.04288 21.8836 8.55458 20.3764 C 8.5585 20.3649 8.56145 20.3539 8.56335 20.3434 C 7.74518 19.0135 7.27385 17.4514 7.27385 15.7802 C 7.27385 10.931 11.242 7 16.1369 7 C 21.0318 7 24.9999 10.931 24.9999 15.7802 Z M 20.4352 18.3304 C 20.4003 18.5229 20.3566 18.7143 20.3105 18.9046 C 20.2502 19.1557 20.109 19.3559 19.9075 19.518 C 19.6132 19.7557 19.2906 19.9453 18.9249 20.0425 C 18.7045 20.1004 18.4723 20.1291 18.243 20.1408 C 17.9654 20.1543 17.7 20.0712 17.4389 19.9834 C 16.8533 19.7879 16.279 19.5666 15.7259 19.2927 C 15.0382 18.952 14.4408 18.4878 13.8995 17.9522 C 13.08 17.1398 12.407 16.2191 11.8658 15.2034 C 11.6797 14.8546 11.5485 14.4841 11.4859 14.093 C 11.4665 13.9738 11.4567 13.8531 11.4482 13.748 C 11.4448 13.7056 11.4416 13.6657 11.438 13.6295 C 11.4522 12.8638 11.7311 12.2609 12.2546 11.7622 C 12.404 11.62 12.5683 11.5146 12.7727 11.4777 C 12.7766 11.477 12.7805 11.476 12.7843 11.4751 C 12.7927 11.473 12.8009 11.4709 12.8094 11.4713 C 12.8611 11.4733 12.9128 11.4752 12.9645 11.477 L 12.9649 11.477 C 13.1584 11.484 13.3521 11.491 13.545 11.5035 C 13.5887 11.5058 13.6455 11.5363 13.6703 11.5714 C 13.7383 11.6697 13.8086 11.7716 13.8499 11.8816 C 13.9305 12.0952 14.0078 12.3099 14.0851 12.5245 V 12.5245 C 14.2051 12.8574 14.3249 13.1901 14.4568 13.5182 C 14.5377 13.7191 14.5342 13.887 14.4077 14.0486 C 14.2887 14.2 14.1623 14.3458 14.0358 14.4917 C 13.9877 14.5472 13.9396 14.6027 13.8919 14.6585 C 13.877 14.6758 13.8611 14.6921 13.8452 14.7083 C 13.8214 14.7327 13.7977 14.7569 13.7779 14.7843 C 13.6993 14.8944 13.6856 15.0114 13.7548 15.1309 C 14.1093 15.7385 14.5052 16.3162 15.0246 16.8015 C 15.5162 17.261 16.0739 17.6186 16.6878 17.8931 L 16.7028 17.8998 L 16.7029 17.8998 C 16.7569 17.9239 16.8105 17.9478 16.8651 17.9698 C 17.0117 18.0277 17.1387 17.9979 17.2433 17.882 C 17.3828 17.7287 17.5222 17.5735 17.6586 17.4167 C 17.7739 17.2844 17.8862 17.1486 17.9966 17.0127 C 18.0906 16.898 18.2064 16.8612 18.3476 16.905 L 18.3503 16.9059 C 18.3943 16.9197 18.4389 16.9336 18.4788 16.9548 L 18.7539 17.1014 L 18.754 17.1014 C 19.2464 17.3636 19.738 17.6254 20.2272 17.8914 C 20.4334 18.0037 20.4759 18.1003 20.4352 18.3304 Z"></path>
                                </svg>
                            </span>WhatsApp
                        </a>
                    </li>
                </ul>
                <ul className="list-none overflow-hidden p-0 grid grid-cols-4 gap-[30px] pt-4" data-role="accordian-body">
                    <li className="site-footer__col accordian__item" id="site-footer-sky-sports-group-0" data-index="0" data-offset="0">
                        <a href="#" className="pb-1 text-lg/[22px] text-slate-600" aria-controls="site-footer" id="site-footer-0">Partners</a>
                        <div className="accordian__item-content-frame" id="site-footer-nav-0">
                            <ul className="site-footer__nav site-footer__nav--vertical accordian__item-content">
                                <li className="site-footer__item">
                                    <a href="https://www.skybet.com/" className="site-footer__link" target="_blank">Sky Bet</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://super6.skysports.com/" className="site-footer__link" target="_blank">Super 6</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://www.teamtalk.com/" className="site-footer__link" target="_blank">TEAMtalk.com</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="http://www.football365.com/" className="site-footer__link" target="_blank">Football365.com</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="site-footer__col accordian__item" id="site-footer-sky-sports-group-1" data-index="1" data-offset="0">
                        <a href="#" className="pb-1 text-lg/[22px] text-slate-600" aria-controls="site-footer" id="site-footer-1">Sky Sports Channels</a>
                        <div className="accordian__item-content-frame" id="site-footer-nav-1">
                            <ul className="site-footer__nav site-footer__nav--vertical accordian__item-content">
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-main-event" className="site-footer__link">Sky Sports Main Event</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-premier-league" className="site-footer__link">Sky Sports Premier League</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-football" className="site-footer__link">Sky Sports Football</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-plus" className="site-footer__link">Sky Sports+</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-cricket" className="site-footer__link">Sky Sports Cricket</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-golf" className="site-footer__link">Sky Sports Golf</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-f1" className="site-footer__link">Sky Sports F1 </a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-tennis" className="site-footer__link">Sky Sports Tennis</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-nfl" className="site-footer__link">Sky Sports NFL</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-news" className="site-footer__link">Sky Sports News</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-racing" className="site-footer__link">Sky Sports Racing</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="/watch/sky-sports-mix" className="site-footer__link">Sky Sports Mix</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="site-footer__col accordian__item" id="site-footer-sky-sports-group-2" data-index="2" data-offset="0">
                        <a href="#" className="pb-1 text-lg/[22px] text-slate-600" aria-controls="site-footer" id="site-footer-2">More Sky Sites</a>
                        <div className="accordian__item-content-frame" id="site-footer-nav-2">
                            <ul className="site-footer__nav site-footer__nav--vertical accordian__item-content">
                                <li className="site-footer__item">
                                    <a href="https://www.sky.com/" className="site-footer__link" target="_blank">Sky.com</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://news.sky.com/" className="site-footer__link" target="_blank">Sky News</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://www.sky.com/shop/tv/sky-go/?dcmp=skygo_ss.com_more" className="site-footer__link" target="_blank">Sky Go</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://www.skygroup.sky" className="site-footer__link" target="_blank">Sky Group</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://skyforbusiness.sky.com/" className="site-footer__link" target="_blank">Sky For Businesses</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://commercialpartnerships.sky.com/" className="site-footer__link" target="_blank">Sky Partnerships</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://www.skygroup.sky/impact" className="site-footer__link" target="_blank">Sky Impact</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="http://www.sky.com/shop/store-locator/" className="site-footer__link" target="_blank">Store Locator</a>
                                </li>
                                <li className="site-footer__item">
                                    <a href="https://www.skymedia.co.uk/?utm_source=Sky_Sports&amp;utm_medium=Web_page&amp;utm_content=Sky_Sports_web_page&amp;utm_campaign=Sky_Sports_web_page" className="site-footer__link" target="_blank">Advertise With Us</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <ul className="site-footer__nav site-footer__nav--horizontal-nav pt-4 inline-block">
                    <li className="site-footer__item site-footer__item--inline inline mr-5 text-sm">
                        <a href="https://www.sky.com/help/articles/skycom-terms-and-conditions" className="site-footer__link" target="_blank">Terms &amp; Conditions</a>
                    </li>
                    <li className="site-footer__item site-footer__item--inline inline mr-5 text-sm">
                        <a href="https://www.sky.com/help/articles/sky-privacy-and-cookies-notice" className="site-footer__link" target="_blank">Privacy &amp; Cookies Notice</a>
                    </li>
                    <li className="site-footer__item site-footer__item--inline inline mr-5 text-sm">
                        <a href="#privacy-options" className="site-footer__link" target="_blank">Privacy Options</a>
                    </li>
                    <li className="site-footer__item site-footer__item--inline inline mr-5 text-sm">
                        <a href="https://www.skyaccessibility.sky/" className="site-footer__link" target="_blank">Accessibility Information</a>
                    </li>
                    <li className="site-footer__item site-footer__item--inline inline mr-5 text-sm">
                        <a href="https://www.skysports.com/contact-us" className="site-footer__link" target="_blank">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}