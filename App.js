import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 Header Component
 - Logo Component
 - Nav Items

 Body Component
 - Search
 - Restaurant Container
 - Restaurant Cards

 Footer Component
 - Copyright
 - Links
 - Address
 - Contacts
 *
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/somkeing-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resObj = {
    info: {
        id: "350560",
        name: "Ambur Star Briyani Since 1890",
        cloudinaryImageId: "psjafovxcvdkmxcgsq76",
        locality: "5th Phase",
        areaName: "JP Nagar",
        costForTwo: "₹199 for two",
        cuisines: [
            "North Indian",
            "Chinese",
            "Tandoor",
            "Hyderabadi"
        ],
        avgRating: 4.2,
        feeDetails: {
            restaurantId: "350560",
            fees: [
                {
                    name: "BASE_DISTANCE",
                    fee: 5900
                },
                {
                    name: "BASE_TIME"
                },
                {
                    name: "ANCILLARY_SURGE_FEE"
                }
            ],
            totalFee: 5900
        },
        parentId: "21400",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
            deliveryTime: 28,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2023-11-21 01:30:00",
            opened: true
        },
        badges: {
            textExtendedBadges: [
                {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                    fontColor: "#7E808C"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available"
                            }
                        }
                    ]
                }
            }
        },
        loyaltyDiscoverPresentationInfo: {
            logoCtx: {
                logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            freedelMessage: "FREE DELIVERY",
            badgeType: "BADGE_TYPE_ONE_LITE"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
        link: "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-5th-phase-jp-nagar-bangalore-350560",
        type: "WEBLINK"
    }
};

const resList = [
    {
        info: {
            id: "350560",
            name: "Ambur Star Briyani Since 1890",
            cloudinaryImageId: "psjafovxcvdkmxcgsq76",
            locality: "5th Phase",
            areaName: "JP Nagar",
            costForTwo: "₹199 for two",
            cuisines: [
                "North Indian",
                "Chinese",
                "Tandoor",
                "Hyderabadi"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "350560",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 5900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5900
            },
            parentId: "21400",
            avgRatingString: "4.2",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 4.1,
                serviceability: "SERVICEABLE",
                slaString: "28 mins",
                lastMileTravelString: "4.1 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 01:30:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-5th-phase-jp-nagar-bangalore-350560",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "334475",
            name: "KFC",
            cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
            locality: "2nd Stage",
            areaName: "BTM Layout",
            costForTwo: "₹400 for two",
            cuisines: [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "334475",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4100
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4100
            },
            parentId: "547",
            avgRatingString: "4.0",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 16,
                lastMileTravel: 0.5,
                serviceability: "SERVICEABLE",
                slaString: "16 mins",
                lastMileTravelString: "0.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 02:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kfc-2nd-stage-btm-layout-bangalore-334475",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "683",
            name: "Cream Stone Ice Cream",
            cloudinaryImageId: "e6af7ef8b8ad04f12d748f144b602c0f",
            locality: "HSR Layout",
            areaName: "HSR Layout",
            costForTwo: "₹200 for two",
            cuisines: [
                "Ice Cream",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.4,
            feeDetails: {
                restaurantId: "683",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4400
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4400
            },
            parentId: "289",
            avgRatingString: "4.4",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 3.5,
                serviceability: "SERVICEABLE",
                slaString: "20 mins",
                lastMileTravelString: "3.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-20 23:59:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "D",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/cream-stone-ice-cream-hsr-layout-bangalore-683",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "209557",
            name: "Subway",
            cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
            locality: "JNC College Road",
            areaName: "Koramangala",
            costForTwo: "₹350 for two",
            cuisines: [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "209557",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 3600
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3600
            },
            parentId: "2",
            avgRatingString: "4.2",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "23 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/subway-jnc-college-road-koramangala-bangalore-209557",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "65797",
            name: "Leon's - Burgers & Wings (Leon Grill)",
            cloudinaryImageId: "r4ufflqojich0r29efvc",
            locality: "Koramangala",
            areaName: "Koramangala",
            costForTwo: "₹300 for two",
            cuisines: [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "65797",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4400
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4400
            },
            parentId: "371281",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 04:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "333",
            name: "Beijing Bites",
            cloudinaryImageId: "qkhikjhadnirtzb5zqqq",
            locality: "BTM Layout",
            areaName: "BTM Layout",
            costForTwo: "₹450 for two",
            cuisines: [
                "Chinese",
                "Thai"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "333",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 3600
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3600
            },
            parentId: "103",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 17,
                lastMileTravel: 0.2,
                serviceability: "SERVICEABLE",
                slaString: "17 mins",
                lastMileTravelString: "0.2 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 00:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/beijing-bites-btm-layout-bangalore-333",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "272236",
            name: "EatFit",
            cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
            locality: "2nd Stage",
            areaName: "BTM Layout",
            costForTwo: "₹270 for two",
            cuisines: [
                "Chinese",
                "Healthy Food",
                "Tandoor",
                "Pizzas",
                "North Indian",
                "Thalis",
                "Biryani"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "272236",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 3600
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3600
            },
            parentId: "76139",
            avgRatingString: "4.1",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 0.8,
                serviceability: "SERVICEABLE",
                slaString: "19 mins",
                lastMileTravelString: "0.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-20 23:59:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "brand",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "brand"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/eatfit-2nd-stage-btm-layout-bangalore-272236",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "29783",
            name: "CakeZone",
            cloudinaryImageId: "2857960242f8d1d4d390dc22a38c530e",
            locality: "BTM Layout",
            areaName: "2nd Stage",
            costForTwo: "₹200 for two",
            cuisines: [
                "Bakery",
                "Desserts",
                "Sweets",
                "Ice Cream"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "29783",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4300
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4300
            },
            parentId: "7003",
            avgRatingString: "4.2",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 22,
                lastMileTravel: 0.8,
                serviceability: "SERVICEABLE",
                slaString: "22 mins",
                lastMileTravelString: "0.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-20 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/cakezone-btm-layout-2nd-stage-bangalore-29783",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "18973",
            name: "Nandhana Palace",
            cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
            locality: "Koramangala",
            areaName: "Koramangala",
            costForTwo: "₹500 for two",
            cuisines: [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "18973",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4100
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4100
            },
            parentId: "2120",
            avgRatingString: "4.1",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 02:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹650",
                discountTag: "FLAT DEAL"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "289252",
            name: "BOX8 - Desi Meals",
            cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
            locality: "2nd stage",
            areaName: "Btm Layout",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "Biryani",
                "Thalis",
                "Home Food"
            ],
            avgRating: 4.4,
            feeDetails: {
                restaurantId: "289252",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 3600
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3600
            },
            parentId: "10655",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 13,
                lastMileTravel: 1.7,
                serviceability: "SERVICEABLE",
                slaString: "8-18 mins",
                lastMileTravelString: "1.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 02:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "EVERY ITEM",
                subHeader: "@ ₹169"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/box8-desi-meals-2nd-stage-btm-layout-bangalore-289252",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "272031",
            name: "Baskin Robbins",
            cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
            locality: "5th Block",
            areaName: "Koramangala",
            costForTwo: "₹150 for two",
            cuisines: [
                "Desserts"
            ],
            avgRating: 4.3,
            veg: true,
            feeDetails: {
                restaurantId: "272031",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 5100
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5100
            },
            parentId: "5588",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 18,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "18 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-27 00:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/baskin-robbins-5th-block-koramangala-bangalore-272031",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "156416",
            name: "The Good Bowl",
            cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
            locality: "Marenahalli",
            areaName: "JP Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "156416",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4400
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4400
            },
            parentId: "7918",
            avgRatingString: "4.1",
            totalRatingsString: "500+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-20 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/the-good-bowl-marenahalli-jp-nagar-bangalore-156416",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "49704",
            name: "California Burrito",
            cloudinaryImageId: "p57honbbzdgf7tyt2vay",
            locality: "5th Phase",
            areaName: "JP Nagar",
            costForTwo: "₹250 for two",
            cuisines: [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food",
                "Desserts"
            ],
            avgRating: 4.4,
            feeDetails: {
                restaurantId: "49704",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4400
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4400
            },
            parentId: "1252",
            avgRatingString: "4.4",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "29 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/california-burrito-5th-phase-jp-nagar-bangalore-49704",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "153731",
            name: "Dindigul Thalappakatti",
            cloudinaryImageId: "aslqpj36wuh2gx4xfrrk",
            locality: "Jayanagar",
            areaName: "Jayanagar",
            costForTwo: "₹550 for two",
            cuisines: [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "153731",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4300
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4300
            },
            parentId: "332",
            avgRatingString: "4.0",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 27,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "27 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/dindigul-thalappakatti-jayanagar-bangalore-153731",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "426",
            name: "Hotel Empire",
            cloudinaryImageId: "gswvotfmtwj47y7o7nqh",
            locality: "HSR Layout",
            areaName: "HSR Layout",
            costForTwo: "₹450 for two",
            cuisines: [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "426",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4400
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4400
            },
            parentId: "475",
            avgRatingString: "4.1",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "26 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 03:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "10% OFF",
                subHeader: "UPTO ₹40"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/hotel-empire-hsr-layout-bangalore-426",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "207768",
            name: "Taco Bell",
            cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
            locality: "Bannerghatta Road",
            areaName: "Bannerghatta Road",
            costForTwo: "₹300 for two",
            cuisines: [
                "Mexican"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "207768",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4100
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4100
            },
            parentId: "1557",
            avgRatingString: "4.1",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 33,
                lastMileTravel: 1.9,
                serviceability: "SERVICEABLE",
                slaString: "33 mins",
                lastMileTravelString: "1.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/taco-bell-bannerghatta-road-bangalore-207768",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "23683",
            name: "McDonald's",
            cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
            locality: "2nd Stage",
            areaName: "Btm Layout",
            costForTwo: "₹400 for two",
            cuisines: [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "23683",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 3600
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3600
            },
            parentId: "630",
            avgRatingString: "4.2",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 15,
                lastMileTravel: 0.1,
                serviceability: "SERVICEABLE",
                slaString: "15 mins",
                lastMileTravelString: "0.1 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 03:45:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/mcdonalds-2nd-stage-btm-layout-bangalore-23683",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "10582",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            locality: "Maruti Nagar",
            areaName: "Madiwala",
            costForTwo: "₹300 for two",
            cuisines: [
                "Pizzas"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "10582",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 3600
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3600
            },
            parentId: "721",
            avgRatingString: "4.0",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 03:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/pizza-hut-maruti-nagar-madiwala-bangalore-10582",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "17927",
            name: "Polar Bear",
            cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
            locality: "6th Sector",
            areaName: "HSR Layout",
            costForTwo: "₹300 for two",
            cuisines: [
                "Ice Cream",
                "Desserts"
            ],
            avgRating: 4.5,
            veg: true,
            feeDetails: {
                restaurantId: "17927",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 3600
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3600
            },
            parentId: "726",
            avgRatingString: "4.5",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 2.9,
                serviceability: "SERVICEABLE",
                slaString: "19 mins",
                lastMileTravelString: "2.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-21 03:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                freedelMessage: "FREE DELIVERY",
                badgeType: "BADGE_TYPE_ONE_LITE"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/polar-bear-6th-sector-hsr-layout-bangalore-17927",
            type: "WEBLINK"
        }
    }
];


const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo"
                 alt="res-logo"
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.info.cloudinaryImageId}
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) =>
                        (
                            <RestaurantCard key = {restaurant.info.id} resData={ restaurant }/>
                        )
                    )
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (<div className="app">
        <Header/>
        <Body/>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);





