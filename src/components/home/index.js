import { useSelector } from "react-redux";
import { ThemeState } from "../../features/theme";

import {
  Container,
  Events,
  EventTitle,
  EventInner,
  EventItem,
  Button,
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

Home.Button = function homeButton({ children, ...restPorps }) {
  return <Button {...restPorps}>{children}</Button>;
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
