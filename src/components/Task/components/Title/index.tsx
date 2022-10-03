import React, { FC } from "react";

import { Typography } from "@mui/material";

interface ITaskTitleProps {
    title: string | React.ReactNode;
}

const TaskTitle: FC<ITaskTitleProps> = ({ title }) => {
    return <Typography variant={"subtitle1"}>{title}</Typography>;
};

export default TaskTitle;
