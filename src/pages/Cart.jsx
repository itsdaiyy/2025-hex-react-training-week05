import { useEffect } from "react";
import { clientGetCart } from "../services/apiCart";

function Cart() {
  useEffect(() => {
    (async () => {
      clientGetCart();
    })();
  }, []);

  return (
    <div className="container">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => (
          <tr key={product.id}>
            <td style={{ width: "200px" }}>
              <img
                className="img-fluid"
                src={product.imageUrl}
                alt={product.title}
              />
            </td>
            <td>{product.title}</td>
            <td>
              <del className="h6">原價 {product.origin_price} 元</del>
              <div className="h5">特價 {product.origin_price}元</div>
            </td>
            <td>
              <div className="btn-group btn-group-sm">
                <button
                  onClick={() => handleSeeMore(product)}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  查看更多
                </button>
                <button type="button" className="btn btn-outline-danger">
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
