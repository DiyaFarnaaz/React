import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

function ApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);
  function onClickHandler() {
    console.log('button is clicked')
  }
  function spanClickHandler() {
    console.log('click even from a span tag.')
  }
  const [formData, setFormData] = useState({}); 

  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
  };
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Registration Form</h1>
      <label>
        First Name:
        <input {...register('firstName', { required: true, maxLength: 10 })} placeholder="First Name" />
        {errors?.firstName?.type === 'maxlength' ? <p> Length should not exceed 10</p> : <p>First Name is required</p>}
      </label>

      <br />
      <label>
        Last Name:
        <input {...register('lastName', { required: true, maxLength: 10 })} placeholder="Last Name" />
        {errors?.lastName?.type === 'maxlength' ? <p> Length should not exceed 10</p> : <p>Last Name is required</p>}
      </label>

      <br />

      <label>
        Email:
        <input type="email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} placeholder='Email'/>
        {errors?.email && <p>Email is required and should be in the format xxxxxxx@gmail.com</p>}
      </label>

      <br />

      <label>
        Password:
        <input type="password" {...register('password', { required: true, maxLength: 10 })} placeholder='password'/>
        {errors?.password && <p>Password is required and should be less than 10 characters</p>}
      </label>

      <br />

      <label>
        Confirm Password:
        <input type="password" {...register('confirmPassword', { required: true, maxLength: 10 })} placeholder='confirm password'/>
        {errors?.confirmPassword && <p>Confirm Password is required and should be less than 10 characters</p>}
        {errors?.confirmPassword && errors?.confirmPassword.type === 'validate' && <p>Passwords do not match</p>}
      </label>

      <br />

      <label>
        Contact Number:
        <input type="number" {...register('contactNumber', { required: true, minLength: 9, maxLength: 10 })} placeholder='Contact Number'/>
        {errors?.contactNumber?.type === 'minLength' ? <p> Phone number should contain 10 digits</p> :<p> This is required</p>}
      </label>

      <br />

      <label>
        Age:
        <input type="number" {...register('age', { required: true,min:18,max:100})} placeholder='Age'/>
        {errors?.age?.type === 'minLength' ? <p> Age should be min 18</p> :<p> This is required</p>}
    </label>

      <br />

      <label>
        Resume:
        <input type="file" {...register('resume', { required: true })} />
        {errors?.resume && <p>Resume is required</p>}
      </label>

      <br />

      <label>
        Hobbies:
        <input type="checkbox" value="swimming" {...register('interests')} /> Reading
        <input type="checkbox" value="reading" {...register('interests')} /> Playing
        <input type="checkbox" value="coding" {...register('interests')} /> Coding
      </label>

      <br />

      <label>
        Gender:
        <input type="radio" value="male" {...register('gender', { required: true })} /> Male
        <input type="radio" value="female" {...register('gender')} /> Female
        <input type="radio" value="other" {...register('gender')} /> Other
        {errors?.gender && <p>Gender is required</p>}
      </label>

      <br />

      <label>
  Country:
  <select {...register('country', { required: true })}>
    <option value="">Select a country</option>
    <option value="India">India</option> 
    <option value="USA">USA</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
  </select>
  {errors?.country && <p>Country is required</p>}
</label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ApplicationForm;