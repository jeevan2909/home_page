import React, { useState } from "react";

export default function useFilter({ tasks }) {
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTasks = tasks.filter((item, index) => {


    if (filterStatus === "all") {
      return true;
    }

    console.log(item.status === filterStatus, "status");
    return item.status === filterStatus;
  });

  return {
    filteredTasks,
    filterStatus,
    setFilterStatus,
  };
}
