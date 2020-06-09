import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  ButtonToolbar,
  Row,
  Col,
  FormGroup,
  Form,
} from 'react-bootstrap';

export default function UserInfoModal(props) {
  const { show, infoData } = props;

  function hideModal() {
    props.hideModal();
  }

  return (
    <Modal
      size="md"
      show={show}
      onHide={hideModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Detail
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <FormGroup as={Row}>
            <Form.Label column md={3}>Name:</Form.Label>
            <Col>
              <Form.Control readOnly required defaultValue={infoData.name}></Form.Control>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column md={3}>Bio:</Form.Label>
            <Col>
              <Form.Control readOnly defaultValue={infoData.bio}></Form.Control>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column md={3}>Login:</Form.Label>
            <Col>
              <Form.Control readOnly defaultValue={infoData.login}></Form.Control>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column md={3}>Site Admin:</Form.Label>
            <Col>
              <Form.Control readOnly defaultValue={infoData.site_admin}></Form.Control>
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column md={3}>Location:</Form.Label>
            <Col>
              <Form.Control readOnly defaultValue={infoData.location}></Form.Control>
            </Col>
          </FormGroup>
          <FormGroup>
            <Form.Label>Avatar Url:</Form.Label>
            <Form.Control readOnly defaultValue={infoData.avatar_url}></Form.Control>
          </FormGroup>
          <FormGroup>
            <Form.Label>Blog:</Form.Label>
            <Form.Control readOnly defaultValue={infoData.blog}></Form.Control>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button variant="outline-secondary" type="button" onClick={hideModal}>Close</Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
