module.exports = {
    elements: {
        headerMenu: {
            toRent: '[data-testid=header-primarynav-mn-rent] > [data-testid=header-primarynav-accordion] > [data-testid=header-primarynav-link]',
            toRentTravelTime: '.css-vhb6hw-PrimaryList-PrimaryListWrapper > li:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            housePrices: '[data-testid=header-primarynav-mn-prices] > [data-testid=header-primarynav-accordion] > [data-testid=header-primarynav-link]',
            signIn: '.css-1oboy4t-LogoWrapper > .css-mein0i-ProfileMenuWrapper > [data-testid=header-profile] > [data-is-logged-in="false"] > [data-testid=header-profile-sign-in]', 
            myZooplaAlertSearch: '#bhome > div:nth-child(6) > div > div > div > header > div > div > div.css-1oboy4t-LogoWrapper.exf84yl3 > div > ul > li:nth-child(3) > div > ul > li:nth-child(2) > a > div'
        },
        searchModal: {
            location: '#search-input-location',
            firstResult: 'li.ui-menu-item:nth-child(1)',
            minPrice: '#rent_price_min_per_month',
            maxPrice: '#rent_price_max_per_month',
            bedrooms: '#beds_min',
            search: '.btn',
            searchSubmit: '#search-submit',
            duration: '#duration',
            transport: '#transport_type',
        },
        searchResultsCards: '.hp-card-list',
        saveSearch: '[data-testid=save-search]',
        signIn: '[data-testid=register-page-header-sign-in-link]',
        searchResultCount: '[data-testid=total-results]',
        acceptCookie: '.ui-cookie-consent-choose__buttons > .ui-button-primary'
    }
} 
