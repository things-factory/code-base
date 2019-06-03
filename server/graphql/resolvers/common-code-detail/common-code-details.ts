import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const commonCodeDetailsResolver = {
  async commonCodeDetails(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(CommonCodeDetail).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
