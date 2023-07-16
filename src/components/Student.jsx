import { useFormik } from "formik";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";

const Student = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Question is required."),
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    touched,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      resetForm()
    },
  });
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Question <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={values?.title}
                    placeholder="Enter question"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="text-danger">{touched.title && errors.title }</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    name="description"
                    value={values?.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter question"
                  />
                </Form.Group>
                <div className="d-flex gap-2 justify-content-end">
                  <Button
                    variant="outline-success"
                    size="sm"
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => resetForm()}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Student;
