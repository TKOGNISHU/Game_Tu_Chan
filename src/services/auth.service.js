import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class AuthService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/auth`) {
        super(baseURL)
    }

    async logout() {
        return (await this.api.get('/logout')).data
    }
}

export default new AuthService()
