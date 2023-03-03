import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class UserService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/users`) {
        super(baseURL)
    }

    // [GET] /api/users/whoami
    async get() {
        return (await this.api.get('/whoami')).data
    }

    // [GET] /api/users/:id/immortalities
    async getImmortalities(id) {
        return (await this.api.get(`/${id}/immortalities`)).data
    }


}

export default new UserService()
