import BaseResource from "./base"
import * as Types from "../types"
import { RequestOptions } from "../types"

class RegionsResource extends BaseResource {
  /**
   * @description Retrieves a list of regions
   * @return AsyncResult<{ regions: Region[] }>
   */
  list(
    options: RequestOptions = {}
  ): Types.AsyncResult<{ regions: Types.Region[] }> {
    const path = `/store/regions`
    return this.client.request("GET", path, {}, options)
  }

  /**
   * @description Retrieves a region
   * @param id is required
   * @return AsyncResult<{ region: Region }>
   */
  retrieve(
    id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ region: Types.Region }> {
    const path = `/store/regions/${id}`
    return this.client.request("GET", path, {}, options)
  }
}

export default RegionsResource
