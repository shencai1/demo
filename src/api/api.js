import http from '../utils/http'

export const login = (data = {}) => {
  return http({
    url: '/admin/login',
    method: 'post',
    data
  })
}
