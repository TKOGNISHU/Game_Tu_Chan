import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class MarketService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/markets`) {
        super(baseURL)
    }

}

export default new MarketService()
