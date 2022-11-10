import axios from "axios";
import { DOMAIN, TOKEN } from "../ultil/setting";
import { Service } from "./Service";

export class QuanLyHeThongRapServices extends Service {
    constructor() {
        super();
    }
    layThongTinLichChieu = (id) => {
        return this.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
    };

}
export const quanLyHeThongRapSerVices = new QuanLyHeThongRapServices();