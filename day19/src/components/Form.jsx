import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    email: '',
  });

  const [submitForm, setSubmitForm] = useState(false);

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm(!submitForm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Fullname">Fullname</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label htmlFor="Fullname">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="Fullname">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit Form</button>
      </form>

      {submitForm && (
        <div>
          <div>{formData.fullName}</div>
          <div>{formData.password}</div>
          <div>{formData.email}</div>
        </div>
      )}
    </div>
  );
}

export default Form;
