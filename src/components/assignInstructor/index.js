import React from "react";

import {
  TableRow,
  Div,
  List,
  Label,
  CourseId,
  CourseName,
  LabelDiv,
  Select,
  Option,
  Line,
  Button,
} from "./styles/assignInstructor";

export default function AssignInstructor({ children, ...restPorps }) {
  return (
    <div style={{ overflowY: "scroll" }} {...restPorps}>
      {children}
    </div>
  );
}

AssignInstructor.TableRow = function AssignInstructorTableRow({
  children,
  ...restPorps
}) {
  return <TableRow {...restPorps}>{children}</TableRow>;
};

AssignInstructor.Div = function AssignInstructorTableDiv({
  children,
  ...restPorps
}) {
  return <Div {...restPorps}>{children}</Div>;
};

AssignInstructor.List = function AssignInstructorList({
  children,
  ...restPorps
}) {
  return <List {...restPorps}>{children}</List>;
};

AssignInstructor.CourseId = function AssignInstructorCourseId({
  children,
  ...restPorps
}) {
  return <CourseId {...restPorps}>{children}</CourseId>;
};

AssignInstructor.CourseName = function AssignInstructorCourseName({
  children,
  ...restPorps
}) {
  return <CourseName {...restPorps}>{children}</CourseName>;
};

AssignInstructor.Label = function AssignInstructorLabel({
  children,
  ...restPorps
}) {
  return <Label {...restPorps}>{children}</Label>;
};


AssignInstructor.LabelDiv = function AssignInstructorLabelDiv({
  children,
  ...restPorps
}) {
  return <LabelDiv {...restPorps}>{children}</LabelDiv>;
};

AssignInstructor.Select = function AssignInstructorSelect({
  children,
  ...restPorps
}) {
  return <Select {...restPorps}>{children}</Select>;
};

AssignInstructor.Option = function AssignInstructorOption({
  children,
  ...restPorps
}) {
  return <Option {...restPorps}>{children}</Option>;
};
AssignInstructor.Line = function AssignInstructorLine({
  children,
  ...restPorps
}) {
  return <Line {...restPorps}>{children}</Line>;
};

AssignInstructor.Button = function AssignInstructorButton({
  children,
  ...restPorps
}) {
  return <Button {...restPorps}>{children}</Button>;
};
