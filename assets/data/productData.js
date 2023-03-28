const products = [
    {
        id: 'DJ6901-600',
        name: 'Nike Air Force 1 Low Pastel Reveal (DJ6901-600)',
        brand_id: 2,
        category_id: 1,
        newPrice: '2.990.000₫',
        oldPrice: '3.950.000₫',
        sizes: [
            { size: '37', quantity: 10 },
            { size: '38', quantity: 5 },
            { size: '39', quantity: 0 },
            { size: '40', quantity: 10 },
            { size: '41', quantity: 0 },
            { size: '42', quantity: 20 },
        ],
        img: [
            './assets/img/product/product_1-1.webp',
            './assets/img/product/product_1-2.webp',
            './assets/img/product/product_1-3.webp',
            './assets/img/product/product_1-4.webp',
        ],
    },
    {
        id: 'DC1788-100',
        name: 'Jordan 1 Retro High CO JP Midnight Navy (575441-141/DC1788-100)',
        brand_id: '3',
        category_id: '1',
        newPrice: '6.990.000₫',
        oldPrice: '8.450.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '40', quantity: 0 },
            { size: '40.5', quantity: 0 },
            { size: '44', quantity: 25 },
        ],
        img: [
            './assets/img/product/product_2-1.webp',
            './assets/img/product/product_2-2.webp',
            './assets/img/product/product_2-3.webp',
            './assets/img/product/product_2-4.webp',
        ],

    },
    {
        id: 'CT0979-602',
        name: 'Jordan 1 High Zoom Air CMFT Canyon Rust (CT0979-602)',
        brand_id: '3',
        category_id: '1',
        newPrice: '3.990.000₫',
        oldPrice: '7.950.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '37.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '38.5', quantity: 1 },
            { size: '39', quantity: 25 },
            { size: '40', quantity: 0 },
            { size: '41', quantity: 0 },
            { size: '42', quantity: 0 },
        ],
        img: [
            './assets/img/product/product_3-1.webp',
            './assets/img/product/product_3-2.webp',
            './assets/img/product/product_3-3.webp',
            './assets/img/product/product_3-4.webp',
        ],
    },
    {
        id: 'CT0979-601',
        name: 'Jordan 1 High Zoom Air CMFT Pink Glaze (CT0979-601)',
        brand_id: '3',
        category_id: '1',
        newPrice: '5.555.000₫',
        oldPrice: '9.350.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '37.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '38.5', quantity: 1 },
            { size: '39', quantity: 2 },
            { size: '40', quantity: 1 },
        ],
        img: [
            './assets/img/product/product_4-1.webp',
            './assets/img/product/product_4-2.webp',
            './assets/img/product/product_4-3.webp',
            './assets/img/product/product_4-4.webp',
        ],
    },
    // Add more products here

    {
        id: 'DC9036-100',
        name: 'Jordan 1 Low White Camo (DC9036-100)',
        brand_id: 2,
        category_id: 1,
        newPrice: '7.050.000₫',
        oldPrice: '7.350.000₫',
        sizes: [
            { size: '37', quantity: 10 },
            { size: '38', quantity: 5 },
            { size: '39', quantity: 0 },
            { size: '40', quantity: 10 },
            { size: '41', quantity: 0 },
            { size: '42', quantity: 20 },
        ],
        img: [
            './assets/img/product/product_5-1.webp',
            './assets/img/product/product_5-2.webp',
            './assets/img/product/product_5-3.webp',
            './assets/img/product/product_5-4.webp',
        ],
    },
    {
        id: 'DH4406-100',
        name: 'Nike Air Force 1 Low 07 Essential White Blue Paisley (DH4406-100)',
        brand_id: '2',
        category_id: '1',
        newPrice: '3.250.000₫',
        oldPrice: '3.450.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '40', quantity: 0 },
            { size: '40.5', quantity: 0 },
            { size: '44', quantity: 25 },
        ],
        img: [
            './assets/img/product/product_6-1.webp',
            './assets/img/product/product_6-2.webp',
            './assets/img/product/product_6-3.webp',
            './assets/img/product/product_7-4.webp',
        ],

    },
    {
        id: 'CG5581',
        name: 'Adidas Alphabounce Beyond Core Black W (CG5581)',
        brand_id: '1',
        category_id: '1',
        newPrice: '999.000₫',
        oldPrice: '1.950.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '37.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '38.5', quantity: 1 },
            { size: '39', quantity: 25 },
            { size: '40', quantity: 0 },
            { size: '41', quantity: 0 },
            { size: '42', quantity: 0 },
        ],
        img: [
            './assets/img/product/product_7-1.webp',
            './assets/img/product/product_7-2.webp',
            './assets/img/product/product_7-3.webp',
            './assets/img/product/product_7-4.webp',
        ],
    },
    {
        id: 'EG0715',
        name: 'Adidas Ultraboost 20 Shoes - Dash Grey and Blue Violet (EG0695)',
        brand_id: '1',
        category_id: '1',
        newPrice: '2.390.000₫',
        oldPrice: '5.000.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '37.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '38.5', quantity: 1 },
            { size: '39', quantity: 2 },
            { size: '40', quantity: 1 },
        ],
        img: [
            './assets/img/product/product_8-1.webp',
            './assets/img/product/product_8-2.webp',
            './assets/img/product/product_8-3.webp',
            './assets/img/product/product_8-4.webp',
        ],
    },
    {
        id: '367516-12',
        name: 'Puma Thunder Spectra - Whisper White (367516-12)',
        brand_id: 2,
        category_id: 1,
        newPrice: '1.690.000₫',
        oldPrice: '2.450.000₫',
        sizes: [
            { size: '37', quantity: 10 },
            { size: '38', quantity: 5 },
            { size: '39', quantity: 0 },
            { size: '40', quantity: 10 },
            { size: '41', quantity: 0 },
            { size: '42', quantity: 20 },
        ],
        img: [
            './assets/img/product/product_9-1.webp',
            './assets/img/product/product_9-2.webp',
            './assets/img/product/product_9-3.webp',
            './assets/img/product/product_9-4.webp',
        ],
    },
    {
        id: 'DC1788-100',
        name: 'Jordan 1 Retro High CO JP Midnight Navy (575441-141/DC1788-100)',
        brand_id: '3',
        category_id: '1',
        newPrice: '6.990.000₫',
        oldPrice: '8.450.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '40', quantity: 0 },
            { size: '40.5', quantity: 0 },
            { size: '44', quantity: 25 },
        ],
        img: [
            './assets/img/product/product_2-1.webp',
            './assets/img/product/product_2-2.webp',
            './assets/img/product/product_2-3.webp',
            './assets/img/product/product_2-4.webp',
        ],

    },
    {
        id: 'CT0979-602',
        name: 'Jordan 1 High Zoom Air CMFT Canyon Rust (CT0979-602)',
        brand_id: '3',
        category_id: '1',
        newPrice: '3.990.000₫',
        oldPrice: '7.950.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '37.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '38.5', quantity: 1 },
            { size: '39', quantity: 25 },
            { size: '40', quantity: 0 },
            { size: '41', quantity: 0 },
            { size: '42', quantity: 0 },
        ],
        img: [
            './assets/img/product/product_3-1.webp',
            './assets/img/product/product_3-2.webp',
            './assets/img/product/product_3-3.webp',
            './assets/img/product/product_3-4.webp',
        ],
    },
    {
        id: 'CT0979-601',
        name: 'Jordan 1 High Zoom Air CMFT Pink Glaze (CT0979-601)',
        brand_id: '3',
        category_id: '1',
        newPrice: '5.555.000₫',
        oldPrice: '9.350.000₫',
        sizes: [
            { size: '36.5', quantity: 0 },
            { size: '37.5', quantity: 0 },
            { size: '38', quantity: 0 },
            { size: '38.5', quantity: 1 },
            { size: '39', quantity: 2 },
            { size: '40', quantity: 1 },
        ],
        img: [
            './assets/img/product/product_4-1.webp',
            './assets/img/product/product_4-2.webp',
            './assets/img/product/product_4-3.webp',
            './assets/img/product/product_4-4.webp',
        ],
    },
];

export default products;