import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import { setupNotification } from "./components/Notification/Notification";

function App() {
  const notificationHolder = setupNotification();

  return (
    <>
      {notificationHolder}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
