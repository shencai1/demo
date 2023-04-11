import http from '../utils/http'

export const login = (data = {}) => {
  return http({
    url: '/admin/login',
    method: 'post',
    data
  })
}
export const getinfo = (data = {}) => {
  return http({
    url: '/admin/getinfo',
    method: 'post',
    data
  })
}
export const logout = (data = {}) => {
  return http({
    url: '/admin/logout',
    method: 'post',
    data
  })
}
