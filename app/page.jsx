import UserInfo from "./components/AuthUser";
import SignInModal from "./components/SignInModal";

export default function Home() {
  return (
    <div className="grid ">
      <UserInfo />
      <SignInModal />
    </div>
  );
}
