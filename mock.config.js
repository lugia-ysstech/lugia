require('isomorphic-fetch');
export default {
  'POST /api/array': [
    { name: 'apple', value: 1.2 },
    { name: 'orange', value: 0.95 }
  ],
  '/api/object': {
    shop: {
      taxPercent: 8,
      items: [{ name: 'apple', value: 1.2 }, { name: 'orange', value: 0.95 }]
    }
  },
  'POST /api/search': function (req, res) {
    fetch('http://192.168.102.79/api/search',
      {
        method: 'Post',
        body: JSON.stringify(req.body ),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }).then(response => (response.json())).then(data => {
        res.json(data);
    });
  }
};
