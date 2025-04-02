const foodAndDrinks = {
    beginner: [
        { word: "Apple", hint: "A common red or green fruit" },
        { word: "Pizza", hint: "A popular Italian dish with cheese" },
        { word: "Milk", hint: "A white liquid drink from cows" },
        { word: "Rice", hint: "A staple food in many countries" },
        { word: "Bread", hint: "A baked food made from flour" },
        { word: "Egg", hint: "A food from chickens, used in many dishes" },
        { word: "Carrot", hint: "An orange vegetable often eaten raw" },
        { word: "Juice", hint: "A drink made from squeezed fruits" },
        { word: "Burger", hint: "A sandwich with a meat patty" },
        { word: "Fish", hint: "A sea animal often eaten grilled or fried" }
    ],
    intermediate: [
        { word: "Sushi", hint: "A Japanese dish with rice and fish" },
        { word: "Espresso", hint: "A strong coffee shot" },
        { word: "Tofu", hint: "A plant-based protein made from soy" },
        { word: "Pasta", hint: "An Italian dish made from flour and water" },
        { word: "Mango", hint: "A tropical fruit, sweet and juicy" },
        { word: "Bagel", hint: "A round, chewy bread with a hole" },
        { word: "Avocado", hint: "A green fruit used in guacamole" },
        { word: "Omelet", hint: "Eggs cooked with fillings like cheese or vegetables" },
        { word: "Yogurt", hint: "A dairy product often eaten with fruit" },
        { word: "Basil", hint: "An herb used in pesto and Italian dishes" }
    ], 
    advanced: [
        { word: "Bouillabaisse", hint: "A French seafood stew" },
        { word: "Tzatziki", hint: "A Greek yogurt-based dip" },
        { word: "Kimchi", hint: "A fermented Korean cabbage dish" },
        { word: "Wasabi", hint: "A spicy Japanese green paste" },
        { word: "Gnocchi", hint: "Italian dumplings made from potato or flour" },
        { word: "Quinoa", hint: "A high-protein grain from South America" },
        { word: "Churros", hint: "A fried dough pastry from Spain" },
        { word: "Saffron", hint: "An expensive spice used in paella" },
        { word: "Caviar", hint: "Fish eggs considered a luxury food" },
        { word: "Brioche", hint: "A soft, sweet French bread" }
    ]
}

const nature = {
    beginner: [
        { word: "Tree", hint: "A tall plant with a trunk and branches" },
        { word: "Leaf", hint: "A green part of a plant that absorbs sunlight" },
        { word: "River", hint: "A flowing body of water" },
        { word: "Sun", hint: "The star that provides light and heat to Earth" },
        { word: "Rock", hint: "A solid material found in nature" },
        { word: "Grass", hint: "Green plants that cover the ground" },
        { word: "Cloud", hint: "A mass of water droplets in the sky" },
        { word: "Rain", hint: "Water falling from the sky" },
        { word: "Soil", hint: "The ground where plants grow" },
        { word: "Flower", hint: "A colorful part of a plant that blooms" }
    ],
    intermediate: [
        { word: "Mountain", hint: "A large natural elevation of the earth’s surface" },
        { word: "Erosion", hint: "The process of soil and rock being worn away" },
        { word: "Glacier", hint: "A massive, slow-moving ice formation" },
        { word: "Tsunami", hint: "A large sea wave caused by an earthquake" },
        { word: "Hurricane", hint: "A strong, spinning storm over the ocean" },
        { word: "Volcano", hint: "A mountain that can erupt with lava" },
        { word: "Savanna", hint: "A grassy plain found in tropical regions" },
        { word: "Oasis", hint: "A fertile area in a desert with water" },
        { word: "Ecosystem", hint: "A community of interacting organisms" },
        { word: "Fossil", hint: "Preserved remains of ancient life" }
    ],
    advanced: [
        { word: "Photosynthesis", hint: "The process plants use to convert sunlight into energy" },
        { word: "Biodiversity", hint: "The variety of life in an ecosystem" },
        { word: "Deforestation", hint: "The removal of forests for other land uses" },
        { word: "Permafrost", hint: "A layer of frozen soil found in polar regions" },
        { word: "Bioluminescence", hint: "The production of light by living organisms" },
        { word: "Tectonic", hint: "Related to the movement of Earth's crust" },
        { word: "Cumulonimbus", hint: "A dense, towering rain cloud" },
        { word: "Transpiration", hint: "The process of water loss from plants" },
        { word: "Anthropocene", hint: "The current geological age influenced by humans" },
        { word: "Aquifer", hint: "An underground layer of water-bearing rock" }
    ]
}

const commerce = {
    beginner: [
        { word: "Shop", hint: "A place where you buy goods" },
        { word: "Price", hint: "The cost of an item" },
        { word: "Money", hint: "Used to buy products and services" },
        { word: "Bank", hint: "A place where money is stored safely" },
        { word: "Cash", hint: "Physical money in the form of notes or coins" },
        { word: "Card", hint: "A plastic payment method" },
        { word: "Bill", hint: "A statement of money owed" },
        { word: "Sale", hint: "When products are sold at a discount" },
        { word: "Trade", hint: "The exchange of goods and services" },
        { word: "Loan", hint: "Money borrowed that must be repaid" }
    ],
    intermediate: [
        { word: "Inflation", hint: "The rise in prices over time" },
        { word: "Investment", hint: "Spending money on assets to gain profit" },
        { word: "Revenue", hint: "Income generated by a business" },
        { word: "Stock", hint: "Shares representing ownership in a company" },
        { word: "Deposit", hint: "Money added to a bank account" },
        { word: "Market", hint: "A place or system where goods are exchanged" },
        { word: "Profit", hint: "The money earned after expenses" },
        { word: "Demand", hint: "The desire of consumers for a product" },
        { word: "Supply", hint: "The availability of a product or service" },
        { word: "Bargain", hint: "Negotiation to get a better price" }
    ],
    advanced: [
        { word: "Cryptocurrency", hint: "A digital currency based on blockchain" },
        { word: "Blockchain", hint: "A decentralized ledger technology" },
        { word: "Arbitrage", hint: "Buying in one market and selling in another for profit" },
        { word: "Liquidity", hint: "How easily an asset can be converted to cash" },
        { word: "Diversification", hint: "Spreading investments to reduce risk" },
        { word: "Depreciation", hint: "A decrease in the value of an asset over time" },
        { word: "Equity", hint: "Ownership value in an investment" },
        { word: "Monopoly", hint: "A market dominated by a single seller" },
        { word: "Bear Market", hint: "A period of declining stock prices" },
        { word: "Leverage", hint: "Using borrowed funds to increase investment returns" }
    ]
}

export default {foodAndDrinks, nature, commerce};