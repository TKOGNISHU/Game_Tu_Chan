import { SERVER_URL_BLANK } from '../../env'

import BaseService from './base.service'

class QuestService extends BaseService {
    constructor(baseURL = `${SERVER_URL_BLANK}/api/quests`) {
        super(baseURL)
    }

    // [GET] /api/quests/:idQuest/clusters/:idCluster/fight
    async fight(idQuest, idCluster) {
        return (await this.api.get(`/${idQuest}/clusters/${idCluster}/fight`)).data
    }
}

export default new QuestService()
