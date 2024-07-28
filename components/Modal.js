import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.h2`
  margin-bottom: 1rem;
`;

const FormField = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input, select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="password"] {
    margin-top: 0.5rem;
  }
`;

const ModalButton = styled.button`
  background-color: #ff5733;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>Login / Signup</ModalHeader>
        <form>
          <FormField>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </FormField>
          <FormField>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="example@email.com" required />
          </FormField>
          <FormField>
            <label htmlFor="mobile">Mobile No.</label>
            <input type="tel" id="mobile" name="mobile" placeholder="+91 -" pattern="[0-9]{10}" required />
          </FormField>
          <FormField>
            <label htmlFor="paymentMode">Payment Mode</label>
            <select id="paymentMode" name="paymentMode" required>
              <option value="upi">UPI</option>
              <option value="netBanking">Net Banking</option>
              <option value="debitCard">Debit/Credit Card</option>
              <option value="paypal">Paypal</option>
            </select>
          </FormField>
          <FormField>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Must contain 1 capital letter, 1 special symbol, and min 8 characters"
              pattern="(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
              required
            />
          </FormField>
          <ModalButton type="submit">Submit</ModalButton>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
