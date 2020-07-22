const userAgent = navigator.userAgent.toLowerCase();

export const isMobile = () => {
    return userAgent.indexOf('mobile') > -1
};

export const isMobileOnly = () => {
    return isMobile() && window.innerWidth < 768;
};

export const isTablet = () => {
    return isMobile() && window.innerWidth > 767;
};

export const isAndroidDevice = () => {
    return isMobile() && userAgent.indexOf('android') > -1;
};

export const isIosDevice = () => {
    return isMobile() && userAgent.indexOf('mac os x') > -1;
};
