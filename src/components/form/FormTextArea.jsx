import PropTypes from "prop-types";

const FormTextArea = ({
  type = "text",
  name,
  id,
  placeholder,
  label,
  register,
  error,
}) => {
  return (
    <div className="text-white mb-5">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div>
        <textarea
          type={type}
          name={name}
          id={id}
          rows="7"
          placeholder={placeholder}
          className="p-2 rounded w-full mt-1.5 outline-none text-[#3E3232] "
          {...register}
        ></textarea>
        {error && <small className="text-red-300">{error.message}</small>}
      </div>
    </div>
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};

export default FormTextArea;
