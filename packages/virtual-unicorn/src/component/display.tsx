import { createStyles, Group, Stack } from "@mantine/core";
import { Device } from "@unicorn-menagerie/menagerie/src/device.ts";
import React, { FunctionComponent, useMemo } from "react";

interface IDisplayProps {
  device: Device;
}

const useStyles = createStyles((theme) => ({
  led: {
    width: 10,
    height: 10,
    border: "1px solid black",
    borderRadius: "50%",
    transition: "background-color 0.1s ease-in-out",
  },
}));

export const Display: FunctionComponent<IDisplayProps> = ({ device }) => {
  const { classes } = useStyles();
  const matrix = useMemo(() => device.toMatrix(), [device]);
  return (
    <Stack align={"center"} pb={20}>
      {matrix.map((row, index) => (
        <Group key={index}>
          {row.map(([r, g, b, a], index) => (
            <div
              key={index}
              className={classes.led}
              style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
            />
          ))}
        </Group>
      ))}
    </Stack>
  );
};
