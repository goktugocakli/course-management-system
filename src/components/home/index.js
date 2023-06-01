import { useSelector } from "react-redux";
import { ThemeState } from "../../features/theme";

import {
  Container,
  Events,
  EventTitle,
  EventInner,
  EventItem,
  GrantButton,
  DenyButton,
  ButtonRow,
  EventLabel,
  EventText,
} from "./styles/home";

let Theme = null;
export default function Home({ children, ...restProps }) {
  Theme = useSelector(ThemeState).theme;
  return (
    <Container white={Theme} {...restProps}>
      {children}
    </Container>
  );
}

Home.Events = function HomeEvents({ children, ...restProps }) {
  return <Events {...restProps}>{children}</Events>;
};

Home.EventTitle = function HomeEventsTitle({ children, ...restProps }) {
  return <EventTitle {...restProps}>{children}</EventTitle>;
};

Home.EventInner = function HomeEventsInner({ children, ...restProps }) {
  return <EventInner {...restProps}>{children}</EventInner>;
};

Home.EventItem = function HomeEventsItem({ children, ...restProps }) {
  return <EventItem {...restProps}>{children}</EventItem>;
};

Home.GrantButton = function homeGrantButton({ children, ...restPorps }) {
  return <GrantButton {...restPorps}>{children}</GrantButton>;
};

Home.DenyButton = function homeDenyButton({ children, ...restPorps }) {
  return <DenyButton {...restPorps}>{children}</DenyButton>;
};

Home.ButtonRow = function homeButtonROw({ children, ...restPorps }) {
  return <ButtonRow {...restPorps}>{children}</ButtonRow>;
};

Home.EventLabel = function homeEventLabel({ children, ...restPorps }) {
  return <EventLabel {...restPorps}>{children}</EventLabel>;
};

Home.EventText = function homeEventText({ children, ...restPorps }) {
  return <EventText {...restPorps}>{children}</EventText>;
};


//TODO: Add aditional properties for event item
