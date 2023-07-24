import http from "../http-common";

class BookingService {
  getAll() {
    return http.get("/bookings");
  }

  create(data) {
    return http.post("/bookings", data);
  }

  update(id, data) {
    return http.put(`/bookings/${id}`, data);
  }

  delete(id) {
    return http.delete(`/bookings/${id}`);
  }

  getForEmployee(empNo) {
    return http.get(`/bookings/mybookings/${empNo}`)
  }
}

export default new BookingService();