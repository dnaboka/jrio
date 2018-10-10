define({
    showDetails: true,
    showTotals: true,
    showSummary: true,

    columns: [
        {
            type: 'spacer',
            width: 200
        }, {
            type: 'string',
            label: 'City',//or something like 'locale.city'
            width: 300,
            format: null,
            horizontalAlign: 'left'
        }, {
            type: 'number',
            label: 'Shipping charge',
            width: 150,
            format: null,
            horizontalAlign: 'left'
        }
    ],

    rows: [
        {
            type: 'group',
            data: ['Argentina']
        }, {
            type: 'detail',
            data: [null, 'Buenos Aires', 34]
        }, {
            type: 'detail',
            data: [null, 'Buenos Aires', 40]
        }, {
            type: 'group total',
            data: ['Argentina Totals', 2, 74]
        }, {
            type: 'group',
            data: ['Austria']
        }, {
            type: 'detail',
            data: [null, 'Salzburg', 31]
        }, {
            type: 'detail',
            data: [null, 'Salzburg', 12]
        }, {
            type: 'group total',
            data: ['Austria Totals', 2, 43]
        }
    ],

    summary: [
        {
            type: 'total',
            data: ['Totals', 4, 117]
        }
    ]
});