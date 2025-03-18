# Giải thích về Router và React Router

## Router là gì?

Trong các ứng dụng web truyền thống, mỗi khi bạn nhấp vào một liên kết, trình duyệt sẽ gửi một yêu cầu mới đến máy chủ, máy chủ sẽ trả về một trang HTML mới. Điều này dẫn đến việc tải lại toàn bộ trang, gây ra trải nghiệm người dùng không mượt mà.

Router giải quyết vấn đề này bằng cách quản lý điều hướng phía máy khách (client-side routing). Thay vì tải lại toàn bộ trang, Router chỉ cập nhật các thành phần cần thiết trên trang dựa trên URL hiện tại. Điều này tạo ra trải nghiệm người dùng nhanh hơn và mượt mà hơn, tương tự như các ứng dụng desktop.

## Cách hoạt động của Router

1.  **Theo dõi URL:** Router theo dõi sự thay đổi của URL trong thanh địa chỉ của trình duyệt.
2.  **Xác định tuyến đường (Route):** Router so sánh URL hiện tại với các tuyến đường (route) đã được định nghĩa trước đó.
3.  **Kết xuất thành phần:** Khi một tuyến đường phù hợp được tìm thấy, Router kết xuất (render) thành phần (component) tương ứng với tuyến đường đó.
4.  **Cập nhật giao diện người dùng:** Router cập nhật chỉ những phần của DOM (Document Object Model) cần thiết để hiển thị thành phần mới, mà không cần tải lại toàn bộ trang.

## React Router

React Router là một thư viện phổ biến cho phép bạn thêm chức năng routing vào các ứng dụng React. Nó cung cấp các thành phần và công cụ để quản lý điều hướng giữa các thành phần khác nhau trong ứng dụng React của bạn.

### Các thành phần chính của React Router

* **`BrowserRouter`:** * Loại router này sử dụng API History của trình duyệt để quản lý URL. Nó phù hợp cho hầu hết các ứng dụng web hiện đại.
    * Bạn nên bao bọc toàn bộ ứng dụng của bạn bên trong thành phần `BrowserRouter`.
* **`Routes`:** * `<Routes>` được dùng làm vùng chứa cho các `<Route>`.
    * Nó sẽ tìm kiếm `Route` phù hợp nhất với URL hiện tại.
* **`Route`:** * `<Route>` được dùng để định nghĩa một tuyến đường cụ thể.
    * Nó nhận hai props quan trọng:
        * `path`:  Đường dẫn URL mà route này sẽ khớp.
        * `element`: Thành phần React sẽ được kết xuất khi đường dẫn khớp.
* **`Link`:** * `<Link>` được dùng để tạo các liên kết điều hướng giữa các tuyến đường trong ứng dụng của bạn.
    * Nó tương tự như thẻ `<a>` của HTML, nhưng ngăn trình duyệt tải lại toàn bộ trang.

### Ứng dụng của React Router trong dự án
1. **Tạo menu điều hướng:** Sử dụng các thẻ **`<Link>`** để tạo các liên kết đến các trang khác nhau.
    * **`to="/"`** chỉ định đường dẫn cho liên kết.
2. **Định nghĩa các tuyến đường:** Sử dụng **`<Routes>`** để chứa các **`<Route>`**.
    * Mỗi **`<Route>`** định nghĩa một đường dẫn (path) và thành phần (element) tương ứng sẽ được hiển thị khi đường dẫn đó được truy cập.
    * Ví dụ: **`<Route path="/" element={<BookList />} />`**
        * Khi người dùng truy cập đường dẫn gốc ("`/`"), thành phần **`<BookList>`** sẽ được hiển thị.

=> Khi người dùng nhấp vào một button, React Router sẽ chặn hành vi mặc định của trình duyệt là tải lại trang. Thay vào đó, nó sẽ cập nhật URL và hiển thị thành phần tương ứng với URL mới.