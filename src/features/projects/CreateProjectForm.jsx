/* eslint-disable react/prop-types */
import { TagsInput } from "react-tag-input-component";
import RHKSelect from "../../ui/RHKSelect.jsx";
import TextField from "../../ui/TextField.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField.jsx";
import useCategory from "../../hooks/useCategory.js";
import useCreateProject from "./useCreateProject.js";
import Loading from "../../ui/Loading.jsx";

const CreateProjectForm = ({ onClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategory();
  const { createProject, isCreating } = useCreateProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول آرایه باید حداقل 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "طول آرایه باید حداقل 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        register={register}
        required
        type="number"
        validationSchema={{
          required: "بودجه ضروری است",
          minLength: {
            value: 5,
            message: "مقدار بودجه باید حداقل 5 رقم باشد",
          },
        }}
        errors={errors}
      />
      <RHKSelect
        label="دسته بندی"
        name="category"
        required
        register={register}
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} label="ددلاین" setDate={setDate} />
      <div className="mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateProjectForm;
