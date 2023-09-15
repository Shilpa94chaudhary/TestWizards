const mobileview = () => {
    cy.visit({
       "url": 'https://www.gamezop.com/en/get-started/category-selection',
        //"url": 'https://www.gamezop.com/',
        "headers": {
            "cloudfront-is-mobile-viewer": "true",
            //"sec-ch-ua-platform": "Android",
            "user-agent": "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36"
        }
    })
}

export {
    mobileview
}
