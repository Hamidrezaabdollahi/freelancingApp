import AuthContainer from "../features/Authentication/AuthContainer";
function Auth() {
  return (
    <div className="bg-secondary-100 h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default Auth;
