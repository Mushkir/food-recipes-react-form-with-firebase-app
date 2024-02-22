import PropTypes from "prop-types";

const FormSelect = ({ name, id, label, register, error }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="font-semibold text-white outline-none">
        {label}
      </label>
      <div className="mt-1.5">
        <select
          name={name}
          id={id}
          className="w-full p-2 rounded"
          {...register}
        >
          <option>--Choose Category--</option>
          <option value="Veg">Vegetarian</option>
          <option value="Non-Veg">Non-Vegetarian</option>
        </select>
        {error && <small className="text-red-300">{error.message}</small>}
      </div>
    </div>
  );
};

FormSelect.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};

export default FormSelect;
