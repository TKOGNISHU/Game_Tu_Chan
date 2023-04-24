import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class MarketService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/markets`) {
        super(baseURL)
    }

    // [PATCH] /api/markets/buy
    async buy(idUser, idItem) {
        return (await this.api.patch(`/buy`, {
            idUser: idUser,
            idItem: idItem,
        })).data
    }

}

export default new MarketService()
