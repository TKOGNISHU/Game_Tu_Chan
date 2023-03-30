import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class ImmortalityService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/immortalities`) {
        super(baseURL)
    }

}

export default new ImmortalityService()
