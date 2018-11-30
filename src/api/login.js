import request from '@/utils/request'

/**
 * 登录
 * @param data
 */
export function login(data) {
  return request({
    url: '',
    method: 'get',
    data
  })
}

export function loginOut() {
  return request({
    url: '',
    method: 'post',
    data
  })
}
