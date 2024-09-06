import { useForm } from "react-hook-form";
import TextFieldPro from "../../ui/TextFieldPro";
import RHFSelect from "../../ui/RHFSelect";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
// import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;
  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { editProject } = useEditProject();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => onClose()
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose(), reset();
        },
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldPro
        label="عنوان پروژه"
        name="title"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "وارد کردن عنوان ضروری است.",
          minLength: {
            value: 5,
            message: "طول عبارت باید بیشتر از ۵ حرف باشد ",
          },
        }}
      />
      <TextFieldPro
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextFieldPro
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div className="my-4">
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags"  />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />

      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="btnConfirm">
          تایید
        </button>
      )}
    </form>
  );
}

export default CreateProjectForm;
