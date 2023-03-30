import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class SkillService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/skills`) {
        super(baseURL)
    }

}

export default new SkillService()
