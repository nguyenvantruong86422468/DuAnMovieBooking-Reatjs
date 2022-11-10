import { GROUP_ID } from "../ultil/setting"
import { Service } from "./Service"

export class MovieService extends Service{
    GetBannerList = () => {
        return this.get(`/QuanLyPhim/LayDanhSachBanner`)
    }
    GetMovieList = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${name}`)
        }else return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
        
    }
    GetMovieInfo = (id) => {
        return this.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }
    AddNewMovie = (data) => {
        return this.post(`/QuanLyPhim/ThemPhimUploadHinh`,data)
    }
    EditMovie = (formData) => {
        return this.post(`/QuanLyPhim/CapNhatPhimUpload`,formData)
    }
    DeletaMovie = (id) => {
        return this.delete(`/QuanLyPhim/XoaPhim?MaPhim=${id}`)
    }
}
export const movieService = new MovieService();