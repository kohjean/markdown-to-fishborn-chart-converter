import React from 'react';
import { SubTitle } from './SubTitle';
import { CodeField } from './CodeField';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 40%;
`;

export const CodeSection = (props) => {
  return (
    <Container>
      <SubTitle text="Input Code" />
      <CodeField name={"CODE"}/>
    </Container>
  );
};
