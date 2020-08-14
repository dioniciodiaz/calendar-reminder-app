import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import ReactSelect from "react-select";
import cityOptions from 'constants/cities';

const ReminderSchema = yup.object().shape({
  description: yup.string().required().min(3).max(30),
  username: yup.string().required(),
  time: yup.string().required().matches(`[0-9]{2}:[0-9]{2}`),
  date: yup.date().required(),
  cityName: yup.string().required(),
  color: yup.string().required(),
});

const options = cityOptions.map(v => ({
  label: v,
  value: v
}));


const ReminderForm = ({ submitHandler, initialData = {}, deleteHandler = ()=> {} }) => {

  const defaultValues = {...initialData};
  const { register, handleSubmit, errors, watch, control } = useForm({
    defaultValues,
    validationSchema: ReminderSchema
  });

	const onSubmitHandler = data => {
    submitHandler(data);
	};

	return (
		<form  onSubmit={handleSubmit(onSubmitHandler)}>
      <fieldset>
      <label>Description : </label>
			<input
				name="description"
				placeholder="Your description....."
				autoComplete="off"
				maxLength="30"
				required
        ref={register}
        />
      </fieldset>
      <fieldset>
      <label>Time : </label>
			<input
				name="time"
				type="time"
				placeholder="e.g. 15:33"
				pattern="[0-9]{2}:[0-9]{2}"
				required
        ref={register}
        />
      </fieldset>
      <fieldset>
      <label>Date : </label>
			<input
				name="date"
				type="date"
				placeholder="eg. 2020-03-24"
				required
        ref={register}
			/>
      </fieldset>
      <fieldset>
        <label htmlFor="city">City : </label>

            <Controller
              as={ReactSelect}
              options={options}
              name="city"
              isClearable
              control={control}
              maxMenuHeight={220}
              menuPlacement="auto"
            />
         </fieldset>
      <fieldset>
      <label>		Background Color : </label>
			<input
				name="bgColor"
				type="color"
				required
        ref={register}
        />
      </fieldset>
			<button
        style={{marginLeft: 80}}
        type="submit" >
				Save
			</button>
      {initialData?.id ?
        <button
          type="button"
         onClick={() => deleteHandler(initialData)}
         style={{marginLeft: 80}}
         >
				delete
			</button>
      : null}

		</form>
	);
};

export default ReminderForm;
