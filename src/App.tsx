import AppRoutes from "./routes/AppRoutes";
import { setupNotification } from "./components/Notification/Notification";

function App() {
  const notificationHolder = setupNotification();

  return (
    <>
      {notificationHolder}
      <AppRoutes />
    </>
  );
}

export default App;
