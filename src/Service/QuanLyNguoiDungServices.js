import axios from "axios";
import { Service } from "./Service";

export class QuanLyNguoiDungServices extends Service {
    dangNhap = (thongTinDangNhap) => {
        return this.post(`/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    dangKy = (thongTinDangKy) => {
        return this.post(`/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    };
    GetTicketOrdered = () => {
        return this.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
}
export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();