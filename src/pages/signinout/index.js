import { LoginContainer, SignUpContainer } from "../../containers";

export default function SignInOut({signin}) {
    //TODO: implement useNavigate inside container
  return signin ? <LoginContainer/> : <SignUpContainer/>;
}
