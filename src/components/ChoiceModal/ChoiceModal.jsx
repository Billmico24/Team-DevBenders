import { Button, CloseBtn } from 'components/Buttons';
import { useEffect } from 'react';

import {
  Overlay,
  ModalBox,
  Title,
  Text,
  ContentBox,
  ButtonsSet,
} from './ChoiceModal.styled';

export const ChoiceModal = ({ text, choiceHandler, subText }) => {
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
  });

  const onChoiceCancel = () => {
    choiceHandler(false);
  };

  const onChoiceConfirm = () => {
    choiceHandler(true);
  };

  const escKeyHandle = e => {
    if (e.code === 'Escape') {
      onChoiceCancel();
    }
  };

  const handelOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onChoiceCancel();
    }
  };

  return (
    <Overlay onClick={handelOverlayClick}>
      <ModalBox>
        <CloseBtn onHandleClick={onChoiceCancel} position="absolute" />

        <ContentBox>
          <Title>Are you sure, {text}?</Title>
          <Text>{subText}</Text>

          <ButtonsSet>
            <Button
              onClickHandler={onChoiceCancel}
              btnText="Cancel"
              autofocus
            />

            <Button onClickHandler={onChoiceConfirm} btnText="Confirm" />
          </ButtonsSet>
        </ContentBox>
      </ModalBox>
    </Overlay>
  );
};