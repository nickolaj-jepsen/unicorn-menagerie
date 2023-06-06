import {
  Box,
  createStyles,
  Group,
  Header as MantineHeader,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    padding: "10px 20px",
    backgroundClip: "text",
    color: "transparent",
    backgroundImage: `linear-gradient(123deg, rgba(67,35,146,1) 0%, rgba(68,115,246,1) 20%, rgba(236,70,195,1) 40%, rgba(255,179,28,1) 60%, rgba(68,115,246,1) 80%, rgba(67,35,146,1) 100%)`,
  },
}));

export const Header = () => {
  const { classes } = useStyles();

  return (
    <Box pb={20}>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Text size={"xl"} className={classes.title} weight={"bolder"}>
            Virtual Unicorn
          </Text>
        </Group>
      </MantineHeader>
    </Box>
  );
};
