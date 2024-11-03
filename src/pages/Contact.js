// import React from "react";
// import { Form, Button, Container } from "react-bootstrap";
// import "./Contacts.css";

// function Contact() {
//   return (
//     <div className="contacts-section">
//       <section id="contact" className="py-5 bg-light text-center">
//         <Container>
//           <h2 className="display-5 mb-4">Контакты</h2>
//           <p className="mb-4">
//             Свяжитесь с нами по электронной почте: info@lyuto.com
//           </p>
//           <Form className="mx-auto" style={{ maxWidth: "500px" }}>
//             <Form.Group className="mb-3" controlId="name">
//               <Form.Control type="text" placeholder="Ваше Имя" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="email">
//               <Form.Control type="email" placeholder="Ваш Email" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="message">
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Ваше сообщение"
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100">
//               Отправить
//             </Button>
//           </Form>
//         </Container>
//       </section>
//     </div>
//   );
// }

// export default Contact;

// Contacts.js
import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts-section">
      <div className="contact-form">
        <h2>Связаться с нами</h2>
        <form>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" name="name" placeholder="Ваше имя" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Ваш email" />

          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Ваше сообщение"
          ></textarea>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
