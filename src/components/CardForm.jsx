import { useState } from "react";

const CardForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    employeeId: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Designation:</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Employee ID:</label>
        <input
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Photo:</label>
        <input
          type="file"
          onChange={handlePhotoChange}
          accept="image/*"
          required
        />
      </div>
      <button type="submit" className="download-button">
        Generate Card
      </button>
    </form>
  );
};

export default CardForm;
