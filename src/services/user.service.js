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

    // [PATCH] /api/users/:idUser/embattle
    async embattle(idUser, idImmortality, index) {
        return (await this.api.patch(`/${idUser}/embattle`, {
            idImmortality,
            index,
        })).data
    }

    // [PATCH] /api/users/:idUser/immortalities/:idImmortality/enlist
    async enlist(idUser, idImmortality) {
        return (await this.api.patch(`/${idUser}/immortalities/${idImmortality}/enlist`)).data
    }

    // [PATCH] /api/users/:idUser/immortalities/:idImmortality/training/:skillName
    async training(id, idImmortality, skillName) {
        return (await this.api.patch(`/${id}/immortalities/${idImmortality}/training/${skillName}`)).data
    }

    // [PATCH] /api/users/:idUser/immortalities/:idImmortality/training/:skillName/increaseSpeed
    async increaseSpeed(idUser, idImmortality, skillName) {
        return (await this.api.patch(`/${idUser}/immortalities/${idImmortality}/training/${skillName}/increaseSpeed`)).data
    }

    // [DELETE] /api/users/:idUser/immortalities/:idImmortality
    async deleteImmortality(idUser, idImmortality) {
        return (await this.api.delete(`/${idUser}/immortalities/${idImmortality}`)).data
    }

}

export default new UserService()
