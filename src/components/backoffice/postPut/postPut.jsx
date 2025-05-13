import styles from "./PostPut.module.css";

const PostPut = ({
  page,
  addEdit,
  onSubmit,
  input,
  handleAddImage,
  handleSubmit,
  register,
  watch,
}) => {
  const testfunction = (formInput) => {
    if (formInput.type === "text" || formInput.type === "number") {
      return (
        <div key={formInput.id}>
          <label htmlFor={formInput.id}>{formInput.title}</label>
          <input
            id={formInput.id}
            type={formInput.type}
            {...register(formInput.id, { required: formInput.required })}
          />
        </div>
      );
    } else {
      return (
        <div key={formInput.id}>
          <label htmlFor={formInput.id}>Vælg billede:</label>
          {imagePreview && <img src={imagePreview} alt="Preview" />}
          <input
            id={formInput.id}
            type={formInput.type}
            {...register("selectedFile")}
            onChange={handleAddImage}
          />
        </div>
      );
    }
  };

  const imagePreview = watch("imagePreview");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1>
        {addEdit} {page}
      </h1>

      {input.map((item, index) => testfunction(input[index]))}

      <button type="submit" className={styles.submit}>
        {addEdit} {page}
      </button>
    </form>
  );
};

export default PostPut;
