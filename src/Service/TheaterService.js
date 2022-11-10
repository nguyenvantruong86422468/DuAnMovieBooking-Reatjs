import { Service } from "./Service";

export class TheaterService extends Service{
    GetMoviesSchedule = () => {
        return this.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap`)
    }
    GetTheaterSystem = () => {
        return this.get(`/QuanLyRap/LayThongTinHeThongRap`)
    }
    GetTheaterGroup = (id) => {
        return this.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
    }
    AddShowtimeSchedule = (data) => {
        return this.post(`/QuanLyDatVe/TaoLichChieu`,data)
    }
}

export const theaterService = new TheaterService();