const request = require('superagent');

class RestApiClient {
  /**
   * Конструктор клиента. Проставляет домен, префикс, хедеры
   * @param {String} entryUrl URL рестового сервиса.
   * @param {Object} [requestHeaders] Заголовки запроса.
   */
  constructor({ entryUrl, requestHeaders, token }) {
    this.entryUrl = entryUrl;
    this.headers = requestHeaders || {};
    this.token = token;
  }

  /**
   * Выполняет GET запрос к API
   *
   * @method get
   * @param {String} url - URL ресурса, без домена и префикса
   * @param {Object} [query] - Query параметры
   * @return {Request}
   */
  get(url, query = {}) {
    return request.get(`${this.entryUrl}${url}`)
      .set(this.headers)
      .set({ Authorization: this.token })
      .query(query)
      .set(this.headers);
  }

  /**
   * Выполняет POST запрос к API
   *
   * @method get
   * @param {String} url - URL ресурса
   * @param {Object} [data] - body запроса
   * @param {Object} [query] - Query параметры
   * @return {Request}
   */
  post(url, data = {}, query = {}) {
    return request.post(`${this.entryUrl}${url}`)
      .set(this.headers)
      .set({ Authorization: this.token })
      .query(query)
      .send(data);
  }

  /**
   * Выполняет POST запрос к API
   *
   * @method get
   * @param {String} url - URL ресурса
   * @param {Object} [data] - body запроса
   * @param {Object} [query] - Query параметры
   * @return {Request}
   */
  postForm(url, data = {}, query = {}) {
    return request.post(`${this.entryUrl}${url}`)
      .set({ Authorization: this.token })
      .query(query)
      .send(data);
  }

  /**
   * Выполняет POST запрос к API
   *
   * @method get
   * @param {String} url - URL ресурса
   * @param {Object} [data] - body запроса
   * @param {Object} [query] - Query параметры
   * @return {Request}
   */
  postUpload(url, data = {}, query = {}) {
    return request.post(`${this.entryUrl}${url}`)
      .set({ Authorization: this.token })
      .query(query)
      .send(data);
  }

  /**
   * Выполняет PUT запрос к API
   *
   * @method get
   * @param {String} url - URL ресурса
   * @param {Object} [data] - body запроса
   * @param {Object} [query] - Query параметры
   * @return {Request}
   */
  put(url, data = {}, query = {}) {
    return request.put(`${this.entryUrl}${url}`)
      .set(this.headers)
      .set({ Authorization: this.token })
      .query(query)
      .send(data);
  }

  /**
   * Выполняет upload
   *
   * @method get
   * @param {String} url - URL ресурса
   * @param {Object} data - файл
   * @param {Object} query - Query параметры
   * @return {Request}
   */
  upload(url, data, query = {}) {
    return request.post(`${this.entryUrl}${url}`)
      .set(this.headers)
      .set({ Authorization: this.token })
      .query(query)
      .attach(data);
  }

  /**
   * Выполняет PATCH запрос к API
   *
   * @method get
   * @param {String} url - URL ресурса
   * @param {Object} data - body запроса
   * @param {Object} query - Query параметры
   * @return {Request}
   */
  patch(url, data, query) {
    return request.patch(`${this.entryUrl}${url}`)
      .set(this.headers)
      .set({ Authorization: this.token })
      .query(query)
      .send(data);
  }

  /**
   * Выполняет DELETE запрос к API
   *
   * @method delete
   * @param {String} url - URL ресурса
   * @param {Object} data - body запроса
   * @param {Object} query - Query параметры
   * @return {Request}
   */
  delete(url, data, query) {
    return request.delete(`${this.entryUrl}${url}`)
      .set(this.headers)
      .set({ Authorization: this.token })
      .query(query)
      .send(data);
  }
}

export default RestApiClient;
