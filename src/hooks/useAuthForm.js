import { useState } from "react";

export function useAuthForm(initial = { email: "", password: "" }) {
  const [formData, setFormData] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => setFormData(initial);

  return { formData, handleChange, reset };
}


