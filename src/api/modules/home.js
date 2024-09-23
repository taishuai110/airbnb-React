import hyRquest from '../request/index'

export function getHomeGoodPriceData() {
    return hyRquest.get({
        url: "/home/goodprice"
    })
}