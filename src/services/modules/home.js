import request from '../index'

export function getHomeData() {
  return request.get({
    url: '/home/goodprice'
  })
}

