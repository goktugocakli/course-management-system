import { useSelector } from "react-redux";
import { ThemeState } from "../../features/theme";

import {
  Container,
  Events,
  EventTitle,
  EventInner,
  EventItem,
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

//TODO: Add aditional properties for event item
