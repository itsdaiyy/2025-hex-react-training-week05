import { useForm } from "react-hook-form";

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  console.log(errors);

  return (
    <div className="container">
      <div className="my-5 row justify-content-center">
        <form className="col-md-6" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email 欄位必填",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email 格式錯誤",
                },
              })}
              id="email"
              name="email"
              type="email"
              className={`form-control ${errors.email && `is-invalid`}`}
              placeholder="請輸入 Email"
            />
            {errors.email && (
              <p className="text-danger my-2">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              收件人姓名
            </label>
            <input
              {...register("name", {
                required: true,
              })}
              id="name"
              name="name"
              type="text"
              className={`form-control ${errors.name && `is-invalid`}`}
              placeholder="請輸入姓名"
            />
            {/* {errors.name && (
              <p className="text-danger my-2">{errors.email.name}</p>
            )} */}
          </div>

          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              收件人電話
            </label>
            <input
              id="tel"
              name="tel"
              type="text"
              className={`form-control ${errors.tel && `is-invalid`}`}
              placeholder="請輸入電話"
            />
            {errors.tel && (
              <p className="text-danger my-2">{errors.tel.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              收件人地址
            </label>
            <input
              id="address"
              name="地址"
              type="text"
              className={`form-control ${errors.address && `is-invalid`}`}
              placeholder="請輸入地址"
            />
            {errors.address && (
              <p className="text-danger my-2">{errors.address.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              留言
            </label>
            <textarea
              id="message"
              className="form-control"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-success">
              送出訂單
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
