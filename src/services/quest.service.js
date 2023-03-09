import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class QuestService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/quests`) {
        super(baseURL)
    }

    
}

export default new QuestService()
