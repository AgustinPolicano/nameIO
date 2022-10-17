import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import "./nameForm.scss";

function NameForm() {
  return (
    <div>
      <Formik
        initialValues={{ user: "" }}
        validate={(values) => {
          console.log(values);
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                bordered
                clearable
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.user}
                name="user"
                labelPlaceholder="Name"
                color="warning"
                type="text"
                width="35%"
                css={{
                  $$inputHoverBorderColor: "white",
                  $$inputTextColor: "white",
                }}
              />
            </div>
            <div className="mt-10">
              <Button type="submit" disabled={isSubmitting} className="mt-auto">
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default NameForm;
