// const blogs = 
export default function handler(req, res) {
    return res.status(200).json([
        {
            id: 1,
            img: 'ismail',
            title: 'Selling A House With Major Repairs? What to Remember',
            date: 'by Steven Allen | Jan 5, 2022',
            description: 'Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a...'
        },
        {
            id: 2,
            img: 'ismail',
            title: 'Selling A House With Major Repairs? What to Remember',
            date: '19, 2022',
            description: 'Can you sell your home even under difficult circumstances? You certainly can, but are the right strategies at your disposal?'
        },
        {
            id: 3,
            img: 'ismail',
            title: 'Can I Sell my Salem Home without Any Equity?',
            date: 'by Quality Homes Reimagined LLC | Dec 21, 2021',
            description: 'Sometimes life can come at us in unexpected ways. A mortgage we thought we were capable of paying off suddenly becomes too overwhelming. But there are many options for homeowners facing the fear of foreclosure.'
        },
    ])
}