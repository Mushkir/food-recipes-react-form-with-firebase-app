import PropTypes from "prop-types";

const FormInput = ({
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
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="p-2 rounded w-full mt-1.5 outline-none text-[#3E3232]"
          {...register}
        />
        {error && <small className="text-red-300">{error.message}</small>}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};

export default FormInput;
