import React from "react";
import { notification } from "antd";

export type NotificationType = "success" | "info" | "warning" | "error";

let notificationApi: ReturnType<typeof notification.useNotification>[0];
let contextHolder: React.ReactElement;

export function setupNotification() {
  const [api, holder] = notification.useNotification();
  notificationApi = api;
  contextHolder = holder;
  return holder;
}

export function notify(
  type: NotificationType,
  message: string,
  description: string
) {
  if (notificationApi) {
    notificationApi[type]({
      message,
      description,
      placement: "topRight",
      duration: 3,
    });
  } else {
    notification[type]({
      message,
      description,
      placement: "topRight",
      duration: 3,
    });
  }
}

export { contextHolder as NotificationContextHolder };
