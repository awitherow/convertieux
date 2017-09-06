var gdax = require('gdax')

module.exports.getConversions = function () {
    var publicClient = new gdax.PublicClient();
    return new Promise((resolve, reject) => {
        return publicClient.getProducts(function (e, d) {
            if (e) {
                reject(new Error(e.message))
            } else {
                console.log(typeof d.body)
                JSON.parse(d.body).map(product => {
                    console.log(product.id)
                })
                resolve("ping")
            }
        });

    })

}