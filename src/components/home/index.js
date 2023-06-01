import { useSelector } from "react-redux";
import { ThemeState } from "../../features/theme";

import {
  Container,
  Events,
  EventTitle,
  EventInner,
  EventItem,
  Column,
  Icon,
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

Home.Column = function homeColumn({ children, ...restPorps }) {
  return <Column {...restPorps}>{children}</Column>;
};

Home.Icon = function surveyIcon({onClick}) {
  return (
    <Icon onClick={onClick}>
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="38" 
      viewBox="0 -960 960 960" 
      width="38">
        <path d="M180-12q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405l-60 60H180v600h600v-348l60-60v408q0 24-18 42t-42 18H180Zm300-360Zm182-352 43 42-285 284v86h85l286-286 42 42-303 304H360v-170l302-302Zm171 168L662-724l100-100q17-17 42.311-17T847-823l84 85q17 18 17 42.472T930-654l-97 98Z"/>
        </svg>
    </Icon>
  );
};

Home.ShowIcon= function homeShowIcon({onClick }) {
  return <Icon onClick={onClick}>
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="38" 
    viewBox="0 -960 960 960" 
    width="38">
      <path d="m289-87-42-42 269-270 140 140 216-215 42 42-258 258-140-140L289-87Zm-149-33q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h600q24 0 42 18t18 42v198H140v482Zm0-542h600v-138H140v138Zm0 0v-138 138Z"/>
    </svg>
  </Icon>;
};



//TODO: Add aditional properties for event item
