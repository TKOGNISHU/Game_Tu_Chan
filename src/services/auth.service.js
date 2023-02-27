import { SERVER_URL_BLANK } from '../../env'

import createApiClient from './api.service'
import BaseService from './base.service'

class AuthService extends BaseService {
    constructor(baseURl = `${SERVER_URL_BLANK}/api/auth`) {
        super(baseURl)
    }

    async get() {
        return (await this.api.get('/user')).data
    }

    async logout() {
        return (await this.api.get('/logout')).data
    }
}

export default new AuthService()
