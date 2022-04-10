import { Injectable } from '@angular/core';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  User = {
    name: "Nguyễn Văn H",
    job: "Tài Chính Kinh Doanh",
    image: "https://icdn.dantri.com.vn/thumb_w/640/2018/5/23/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    date: "2022-02-22",
    phone: "0900000000",
    email: "gmail.@gmail.com",
    address: " so 20 Nguyen Thien Thuat",
    fb: "abc@fb.com",
    object: "Cái nàyhưa handle textarea được vì chưa xem cái gì hết xíu check khoảng cách số lượng ký tự mỗi dồng tự động xuống dòng, kích thước chữ",
    skills: [
      {
        skill1: "Skills Search Google",
        skill2: "Tư duy logic",
      }
    ],
  }


  constructor() { }
}
