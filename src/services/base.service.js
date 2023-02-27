
import createApiClient from './api.service'

class BaseService {
    constructor (baseURL = '/') {
        this.api = createApiClient(baseURL)
    }
    async get(slug) {
        return (await this.api.get(`/${slug}`)).data
    }

    async getAll() {
        return (await this.api.get('/')).data
    }

    async create(data) {
        return (await this.api.post('/save', data)).data
    }

    async update(slug, data) {
        return (await this.api.patch(`/${slug}`, data)).data
    }

    async delete(id) {
        return (await this.api.delete(`/${id}`)).data
    }
}

export default BaseService
