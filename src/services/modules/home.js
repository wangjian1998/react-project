import request from '../index'

export function getHomeData() {
  return request.get({
    url: '/home/goodprice'
  })
}

export function getHomehighScoreData() {
  return request.get({
    url: '/home/highscore'
  })
}

export function getDisCountData() {
  return request.get({
    url: '/home/discount'
  })
}


export function getRecommendData() {
  return request.get({
    url: '/home/hotrecommenddest'
  })
}
