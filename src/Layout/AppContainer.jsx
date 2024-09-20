import CustomLayout from "./CustomLayout";

function AppContainer({ children }) {
  return (
    <>
      <CustomLayout>{children}</CustomLayout>
    </>
  );
}

export default AppContainer;
