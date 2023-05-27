import { useSelector } from "react-redux";

import {
  Container,
  Wrapper,
  EvaluationItem,
  EvaluationColumn,
  EvaluationQuestionContainer,
  EvaluationQuestion,
  EvaluationAnswerContainer,
  EvaluationAddAnswer,
  EvaluationAnswer,
  FloatingContainer,
  DropDownCourse,
  UploadButton,
  AddExistingQuestion,
  ExistingQContainer,
  DropDownContainer,
} from "./styles/createevaluationform";
import { ThemeState } from "../../features/theme";

let Theme;
export default function CreateEvaluationForm({ children, ...restProps }) {
  Theme = useSelector(ThemeState).theme;
  return (
    <Container white={Theme} {...restProps}>
      {children}
    </Container>
  );
}

CreateEvaluationForm.EvaluationItem = function CreateEvaluationFormItem({
  children,
  ...restProps
}) {
  return <EvaluationItem {...restProps}>{children}</EvaluationItem>;
};

CreateEvaluationForm.EvaluationColumn = function CreateEvaluationFormColumn({
  onChange,
  children,
  ...restProps
}) {
  return (
    <Wrapper>
      <EvaluationColumn {...restProps} onChange={onChange}></EvaluationColumn>
    </Wrapper>
  );
};

CreateEvaluationForm.EvaluationQuestionContainer =
  function CreateEvaluationFormQuestionContainer({ children, ...restProps }) {
    return (
      <EvaluationQuestionContainer {...restProps}>
        {children}
      </EvaluationQuestionContainer>
    );
  };

CreateEvaluationForm.EvaluationQuestion =
  function CreateEvaluationFormQuestion({ children, ...restProps }) {
    return (
      <Wrapper>
        <EvaluationQuestion {...restProps}>{children}</EvaluationQuestion>
      </Wrapper>
    );
  };

CreateEvaluationForm.EvaluationAsnwerContainer =
  function CreateEvaluationFormAnswerContainer({ children, ...restProps }) {
    return (
      <EvaluationAnswerContainer {...restProps}>
        {children}
      </EvaluationAnswerContainer>
    );
  };

CreateEvaluationForm.EvaluationAnswer = function CreateEvaluationFormAnswer({
  onChange,
  children,
  ...restProps
}) {
  return (
    <Wrapper>
      <EvaluationAnswer onChange={onChange} {...restProps}>
        {children}
      </EvaluationAnswer>
    </Wrapper>
  );
};

CreateEvaluationForm.EvaluationAddAnswer =
  function CreateEvaluationFormAddAnswer({ onClick, ...restProps }) {
    return (
      <EvaluationAddAnswer onClick={onClick} {...restProps}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
        >
          <path
            pathLength="100"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="2.5"
            d="M23.7 18.7h-5m0 0h-5m5 0v-5m0 5v5M10.3 4.2a16.7 16.7 0 1 1-6.1 6.1"
          />
        </svg>
      </EvaluationAddAnswer>
    );
  };

CreateEvaluationForm.FloatingContainer =
  function CreateEvaluationFormFloatingContainer({ children, ...restProps }) {
    return <FloatingContainer {...restProps}>{children}</FloatingContainer>;
  };

CreateEvaluationForm.DropDownCourse =
  function CreateEvaluationFormDropDownCourse({ children, ...restProps }) {
    return <DropDownCourse {...restProps}>{children}</DropDownCourse>;
  };

CreateEvaluationForm.DropDownContainer =
  function CreateEvaluationFormDropDownContainer({ children, ...restProps }) {
    return <DropDownContainer {...restProps}>{children}</DropDownContainer>;
  };
CreateEvaluationForm.UploadButton = function CreateEvaluationFormUploadButton({
  children,
  ...restProps
}) {
  return <UploadButton {...restProps}>{children}</UploadButton>;
};

CreateEvaluationForm.AddExistingQuestion =
  function CreateEvaluationFormAddExistingQ({ children, ...restProps }) {
    return <AddExistingQuestion {...restProps}>{children}</AddExistingQuestion>;
  };

CreateEvaluationForm.ExistingQuestionContainer =
  function CreateEvaluationFormExistingQContainer({ children, ...restProps }) {
    return <ExistingQContainer {...restProps}>{children}</ExistingQContainer>;
  };
