import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H3 } from "../../components/Text";
import { Button } from "../../components/Button";
import { ImageUpload, TextArea } from "../../components/Form";

const Shitbox = () => (
    <form>
      <Wrapper>
        <H3 bold>Sladreboksen</H3>
        <TextArea width={"95%"} placeholder="Skriv noe sladder..."/>
        <FormRow2 width={"95%"}>
          <ImageUpload/>
          <Button primary>Send inn</Button>
        </FormRow2>
      </Wrapper>
    </form>
);

const FormRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${ props => props.width || "380px" };
`;

const Wrapper = styled.div`
  display: flex;
  height: 300px;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 4px;
  width: ${ props => props.width || "380px" };
`;

export { Shitbox };
