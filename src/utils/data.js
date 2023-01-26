import banner from "./../assets/images/banner/banner.jpg";

const TEAM = [
    {
        name: "Lionel HUNLEDE",
        role: "Founder",
        image: banner
    },
    {
        name: "Evouna Vann",
        role: "Co-founder",
        image: banner
    },
    {
        name: "Effoue Audree Flora",
        role: "Human Resources Manager",
        image: banner
    },
    {
        name: "Aurelie Grace",
        role: "Marketing Manager",
        image: banner
    },
];

const PRODUCTS = [
    {
        name: "COKE",
        image: "",
        category: "beverage",
        description: "IS A COLD SOFT FIZZY DRINK",
        price: {
            amount: 7,
            currency: "GHS"
        },
        rating: {
            average: 5
        }
    },
    {
        name: "FANTA",
        image: "",
        category: "beverage",
        description: "IS A COLD SOFT FIZZY DRINK KNOWN FOR ITS ORANGE FLAVOUR",
        price: {
            amount: 7,
            currency: "GHS"
        },
        rating: {
            average: 4.2
        }
    },
    {
        name: "WELCHES",
        image: "",
        category: "beverage",
        description: "IS A FRUITY DRINK",
        price: {
            amount: 18,
            currency: "GHS"
        },
        rating: {
            average: 4.4
        }
    },
    {
        name: "COFFEE(NESTLE)",
        image: "",
        category: "beverage",
        description: "IS A POWDERED CAFFEINE HOT BEVERAGE",
        price: {
            amount: 25,
            currency: "GHS"
        },
        rating: {
            average: 4.2
        }
    },
    {
        name: "MILO",
        image: "",
        category: "beverage",
        description: "IS A CHOCOLATE BEVERAGE AND CAN BE TAKEN HOT OR COLD",
        price: {
            amount: 20,
            currency: "GHS"
        },
        rating: {
            average: 4.5
        }
    },

    {
        name: "LAYS",
        image: "",
        category: "snack",
        description: "IS A CRUNCHY CHIP DELIGHT SNACK IN VARIOUS FLAVOURS",
        price: {
            amount: 36,
            currency: "GHS"
        },
        rating: {
            average: 5
        }
    },
    {
        name: "DORITOS",
        image: "",
        category: "snack",
        description: ": IS A CRUNCHY CHIP DELIGHT SNACK IN VARIOUS FLAVOURS.",
        price: {
            amount: 30,
            currency: "GHS"
        },
        rating: {
            average: 5
        }
    },
    {
        name: "FAMOUS AMOUS",
        image: "",
        category: "snack",
        description: "IS A CHOCOLATE CHIP BISCUIT",
        price: {
            amount: 15,
            currency: "GHS"
        },
        rating: {
            average: 4
        }
    },
    {
        name: "OREO",
        image: "",
        category: "snack",
        description: "IS A CREAM AND CHOCOLATE BISCUIT",
        price: {
            amount: 17,
            currency: "GHS"
        },
        rating: {
            average: 4.7
        }
    },
    {
        name: "RITZ",
        image: "",
        category: "snack",
        description: ": IS A CRUNCHY CHEESE BISCUIT",
        price: {
            amount: 26,
            currency: "GHS"
        },
        rating: {
            average: 4.5
        }
    }
];


const CORE_VALUES = [
    {name: "Responsibility"},
    {name: "Courtesy"},
    {name: "Honesty"},
    {name: "respect"},
    {name: "perseverance"},
];

export const LUXURY_MART_DATA = {TEAM, CORE_VALUES, PRODUCTS};
