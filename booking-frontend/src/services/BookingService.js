import http from "../http-common";

class BookingService {
  getAll() {
    return http.get("/bookings");
  }

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }

  create(data) {
    return http.post("/bookings", data);
  }

  update(id, data) {
    return http.put(`/bookings/${id}`, data);
  }

  delete(id) {
    return http.delete(`/bookings/${id}`);
  }
}

export default new BookingService();