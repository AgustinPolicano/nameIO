import { Button, Image, Link, Modal, Text } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { ageApi } from "../../services/nameService";
import "./nameForm.scss";

function NameForm() {
  const [nameApi, setNameApi] = useState("");
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState(Number);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const getNationality = (name) => {
    ageApi
      .get("https://api.agify.io?name=" + name)
      .then((p) => setData(p.data));
  };

  function test(name) {
    setNameApi(name);
    getNationality(name);
  }

  function setData(data) {
    setAge(data.age);
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {
          if(values.name.length >= 4){
            handler()
            return test(values.name);
          } else {
            return alert('Debe ingresar un nombre con +4 caracteres')
          }
        }}
      >
        <Form>
          <Field id="name" name="name" placeholder="Jane" type="text"  className="form-custom"/>
          <Button type="submit" className="bg-button">
            Submit
          </Button>
        </Form>
      </Formik>

      <Modal noPadding open={visible} onClose={closeHandler}>
        <Modal.Body>
          <div className="text-modal">
            <span className="f18">Tu edad es de:</span>
            <p className="f32 subtitle-modal">{age} </p>
            <Button onPress={closeHandler} className="button-modal">
              Probar otro nombre
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NameForm;
