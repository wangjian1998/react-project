import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
  name: 'detailSlice',
  initialState: {
    detailData: {
        "_id": "63043046432f9033d45410e4",
        "id": "41753655",
        "picture_url": "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/62a65941-b3c1-4879-aabb-3de9973e61a4.jpeg?aki_policy=large",
        "picture_urls": [
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/62a65941-b3c1-4879-aabb-3de9973e61a4.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/60de8b6e-751b-4730-b355-49f9fa6c1ebc.jpg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/d95d5eab-86ea-44cb-9fff-10642e3be31a.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/5d626c60-faac-4bbe-851e-ca2310eb8a56.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/1b199ebc-3f2c-4104-9bbe-a14f0c39eae8.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/4a24ae12-c77c-4a6c-b61e-0530b1838869.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/28e48d79-7e73-4b2c-9047-55e0f740b8ae.jpg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/c5f27739-d0eb-4263-b338-2451f75e0d4b.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/b96668f1-a963-46ae-bcab-89cb1f8dbe90.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-41753655/original/547eb5b2-29f5-4b98-9a02-4af0e3a3abd8.jpeg?aki_policy=large"
        ],
        "verify_info": {
            "messages": [
                "独立房间",
                "1室1卫1床"
            ],
            "text_color": "#767676"
        },
        "name": "希悦小筑/广州南站/优享大床房",
        "price": 148,
        "price_format": "￥148",
        "star_rating": 5,
        "star_rating_color": "#FF5A5F",
        "reviews_count": 6,
        "reviews": [
            {
                "comments": "挺好的",
                "created_at": "2021-10-31T00:00:00Z",
                "is_translated": false,
                "localized_date": "2021年10月",
                "reviewer_image_url": "https://a0.muscache.com/im/pictures/user/817d5e5f-51d2-461f-99c5-eb444d646d40.jpg?aki_policy=x_medium",
                "review_id": 484965548612439800
            }
        ],
        "bottom_info": null,
        "lat": 22.986,
        "lng": 113.26,
        "image_url": "/moreitems/b9ceebb1f10d7a469093eb1385eb8e89.jpg"
    }
  },
  reducers: {
    changeDetailDataAction(state, {payload}) {
      state.detailData = payload
    }
  }
})

export const {changeDetailDataAction} = DetailSlice.actions
export default DetailSlice.reducer
