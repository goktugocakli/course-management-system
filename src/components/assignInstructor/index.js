import React from "react";

import {
  TableRow,
  TableColumn,
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

AssignInstructor.TableColumn = function AssignInstructorTableColumn({
  children,
  ...restPorps
}) {
  return <TableColumn {...restPorps}>{children}</TableColumn>;
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
