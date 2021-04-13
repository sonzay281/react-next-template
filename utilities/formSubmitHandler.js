const submitHandler = (e) => {
  const form = e.target;
  let data = {};
  let errors = {};
  Array.from(form.elements).forEach((a) => {
    if (a.checkValidity()) {
      if (!!a.id && a.value !== "") data[a.id] = a.value;
    } else {
      errors[a.id] = a.validationMessage;
    }
  });

  if (form.checkValidity()) {
    return { isValid: true, data, errors, form };
  }
  return { isValid: false, data, errors, form };
};
export default submitHandler;
